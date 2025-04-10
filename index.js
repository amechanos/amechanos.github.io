window.onscroll = function() {
    // Adjust the background position based on the scroll position
    var scrollPosition = window.scrollY;
    document.querySelector('.bg').style.backgroundPositionY = (-scrollPosition * 1.5) + 'px';
};

// Global variables to store references and current state
let tocDiv, contentDiv, currentChapters;

// Main function to load a novel by name
async function loadNovel(novelName) {
    if (!novelName) {
        console.error('Novel name is required');
        return;
    }
    
    // Get DOM elements
    tocDiv = document.getElementById('toc-links');
    contentDiv = document.getElementById('chapter-content');
    
    // Check if elements exist
    if (!tocDiv || !contentDiv) {
        console.error('Required DOM elements not found');
        return;
    }
    
    // Clear previous content
    tocDiv.innerHTML = '';
    contentDiv.innerHTML = '<p>Loading story content...</p>';
    
    try {
        // Load novel content
        currentChapters = await loadNovelContent(novelName);
        
        // Check if we got any chapters
        if (Object.keys(currentChapters).length === 0) {
            contentDiv.innerHTML = '<p>No chapters found for this story.</p>';
            return;
        }
        
        // Create TOC links
        Object.keys(currentChapters).forEach(chapterTitle => {
            const link = document.createElement('span');
            link.className = 'chapter-link';
            link.textContent = chapterTitle;
            link.onclick = () => loadChapter(chapterTitle);
            tocDiv.appendChild(link);
        });
        
        // Load the first chapter by default or from URL hash
        const hash = decodeURIComponent(window.location.hash.slice(1));
        if (hash && currentChapters[hash]) {
            loadChapter(hash);
        } else {
            const firstChapter = Object.keys(currentChapters)[0];
            loadChapter(firstChapter);
        }
        
        // Handle browser back/forward buttons
        window.onpopstate = function(event) {
            if (event.state && event.state.chapter) {
                loadChapter(event.state.chapter);
            }
        };
    } catch (error) {
        console.error('Error initializing novel:', error);
        contentDiv.innerHTML = '<p>Error loading story content.</p>';
    }
}

async function loadNovelContent(name) {
    try {
        const book = "novels/" + name + ".html";
        const response = await fetch(book);
        
        if (!response.ok) {
            throw new Error(`Failed to load novel: ${response.status} ${response.statusText}`);
        }
        
        const html = await response.text();
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        const chapterHeadings = tempDiv.querySelectorAll('h1, h2, h3');
        
        const chapters = {};
        chapterHeadings.forEach((heading) => {
            const title = heading.textContent.trim();
            let content = [];
            let currentElement = heading.nextElementSibling;
            
            while (currentElement && !currentElement.matches('h1, h2, h3')) {
                content.push(currentElement.outerHTML);
                currentElement = currentElement.nextElementSibling;
            }
            
            chapters[title] = content.join('');
        });
        
        return chapters;
    } catch (error) {
        console.error('Error loading novel:', error);
        return {};
    }
}

function loadChapter(chapterTitle) {
    if (!currentChapters || !currentChapters[chapterTitle]) {
        console.error('Chapter not found:', chapterTitle);
        return;
    }
    
    contentDiv.innerHTML = `
        <div class="chapter-text">
            <h2>${chapterTitle}</h2>
            ${currentChapters[chapterTitle]}
        </div>
    `;
    
    document.querySelectorAll('.chapter-link').forEach(link => {
        link.classList.remove('active-chapter');
        if (link.textContent === chapterTitle) {
            link.classList.add('active-chapter');
        }
    });
    
    history.pushState({chapter: chapterTitle}, '', `#${encodeURIComponent(chapterTitle)}`);
}