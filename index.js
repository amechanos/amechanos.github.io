window.onscroll = function() {
    // Adjust the background position based on the scroll position
    var scrollPosition = window.scrollY;
    document.querySelector('.bg').style.backgroundPositionY = (-scrollPosition * 1.5) + 'px';
};

// These should be declared inside a function or after DOM is loaded
// not at the global scope
let tocDiv;
let contentDiv;

// Function to load the exported HTML content
async function loadNovelContent() {
    try {
        const response = await fetch('novel.html');
        const html = await response.text();
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        const chapterHeadings = tempDiv.querySelectorAll('h1, h2, h3');
        
        const chapters = {};
        chapterHeadings.forEach((heading, index) => {
            const title = heading.textContent;
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

function loadChapter(chapterTitle, chapters) {
    contentDiv.innerHTML = `
        <div class="chapter-text">
            <h2>${chapterTitle}</h2>
            ${chapters[chapterTitle]}
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

async function initializePage() {
    // Get DOM elements after making sure they exist
    tocDiv = document.getElementById('toc-links');
    contentDiv = document.getElementById('chapter-content');

    // Check if elements exist
    if (!tocDiv || !contentDiv) {
        console.error('Required DOM elements not found. Make sure "toc-links" and "chapter-content" elements exist.');
        return;
    }

    const chapters = await loadNovelContent();
    
    // Create TOC links
    Object.keys(chapters).forEach(chapterTitle => {
        const link = document.createElement('span');
        link.className = 'chapter-link';
        link.textContent = chapterTitle;
        link.onclick = () => loadChapter(chapterTitle, chapters);
        tocDiv.appendChild(link);
    });
    
    // Handle browser back/forward buttons
    window.onpopstate = function(event) {
        if (event.state && event.state.chapter) {
            loadChapter(event.state.chapter, chapters);
        }
    };
    
    // Load chapter from URL hash on page load
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash && chapters[hash]) {
        loadChapter(hash, chapters);
    }
}

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', initializePage);