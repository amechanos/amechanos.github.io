window.onscroll = function() {
    // Adjust the background position based on the scroll position
    var scrollPosition = window.scrollY;
    document.querySelector('.bg').style.backgroundPositionY = (-scrollPosition * 1.5) + 'px';
};
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------

let tocDiv, contentDiv, currentChapters;
async function loadNovel(novelName) {
    if (!novelName) {
        console.error('Novel name is required');
        return;
    }
    tocDiv = document.getElementById('toc-links');
    contentDiv = document.getElementById('chapter-content');
    if (!tocDiv || !contentDiv) {
        console.error('Required DOM elements not found');
        return;
    }
    tocDiv.innerHTML = '';
    contentDiv.innerHTML = '<p>Loading story content...</p>';
    try {
        currentChapters = await loadNovelContent(novelName);
        if (Object.keys(currentChapters).length === 0) {
            contentDiv.innerHTML = '<p>No chapters found for this story.</p>';
            return;
        }
        
        Object.keys(currentChapters).forEach(chapterTitle => {
            const link = document.createElement('span');
            link.className = 'chapter-link';
            link.textContent = chapterTitle;
            link.onclick = () => loadChapter(chapterTitle);
            tocDiv.appendChild(link);
        });
        setupChapterNavigationButtons();
        const hash = decodeURIComponent(window.location.hash.slice(1));
        if (hash && currentChapters[hash]) {
            loadChapter(hash);
        } else {
            const firstChapter = Object.keys(currentChapters)[0];
            loadChapter(firstChapter);
        }
        
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
        const totalChapters = Object.keys(chapters).length;
        const rows = Math.ceil(totalChapters / 3);

        const tocDiv = document.getElementById('toc-links');
        tocDiv.style.gridTemplateRows = `repeat(${rows}, auto)`;
        return chapters;
    } catch (error) {
        console.error('Error loading novel:', error);
        return {};
    }
    

}

let currentChapterTitle = '';
function loadChapter(chapterTitle) {
    if (!currentChapters || !currentChapters[chapterTitle]) {
        console.error('Chapter not found:', chapterTitle);
        return;
    }

    currentChapterTitle = chapterTitle;
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

    history.pushState({ chapter: chapterTitle }, '', `#${encodeURIComponent(chapterTitle)}`);
    updateChapterButtons();
}

function setupChapterNavigationButtons() {
    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');
    const topBtn = document.getElementById('back-to-top');
    const contentContainer = document.getElementById('chapter-content'); // Assuming this exists
    
    // Function to scroll to the appropriate position
    const scrollToChapterStart = () => {
        // Option 1: Scroll to content container with offset
        if (contentContainer) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const position = contentContainer.offsetTop - headerHeight - 20; // 20px extra padding
            window.scrollTo({ top: position, behavior: 'smooth' });
        } 
        // Option 2: Use percentage of viewport height as fallback
        else {
            const viewportHeight = window.innerHeight;
            window.scrollTo({ top: viewportHeight * 0.15, behavior: 'smooth' }); // 15% from the top
        }
    };

    prevBtn.onclick = () => {
        const keys = Object.keys(currentChapters);
        const index = keys.indexOf(currentChapterTitle);
        if (index > 0) {
            loadChapter(keys[index - 1]);
            // Wait briefly for the chapter to load before scrolling
            setTimeout(scrollToChapterStart, 10);
        }
    };

    nextBtn.onclick = () => {
        const keys = Object.keys(currentChapters);
        const index = keys.indexOf(currentChapterTitle);
        if (index < keys.length - 1) {
            loadChapter(keys[index + 1]);
            setTimeout(scrollToChapterStart, 10);
        }
    };

    topBtn.onclick = scrollToChapterStart;
}


// Enable/disable buttons depending on position
function updateChapterButtons() {
    const keys = Object.keys(currentChapters);
    const index = keys.indexOf(currentChapterTitle);
    document.getElementById('prev-chapter').disabled = index <= 0;
    document.getElementById('next-chapter').disabled = index >= keys.length - 1;
}

function setupNovelSelection() {
    const projects = document.querySelectorAll('.book');

    projects.forEach(project => {
        project.style.cursor = 'pointer'; // Optional: make it look clickable

        project.addEventListener('click', () => {
            const novelName = project.getAttribute('data-novel');
            if (novelName) {
                loadNovel(novelName);
            } else {
                console.warn('No novel specified for this project.');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupNovelSelection();
});

//------------------------------------------------------------------

const logo = document.querySelector('.logoimage');
let isRotated = false;

logo.addEventListener('mouseenter', () => {
  console.log("Enter")
  if (!isRotated) {
    logo.style.transform = 'rotate(180deg)';
    console.log("180")
  } else {
    logo.style.transform = 'rotate(360deg)';
    console.log("360")
  }
});

logo.addEventListener('mouseleave', () => {
  console.log("Leave")
  isRotated = !isRotated;
});
