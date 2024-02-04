window.onscroll = function() {
    // Adjust the background position based on the scroll position
    var scrollPosition = window.scrollY;
    document.querySelector('.bg').style.backgroundPositionY = (-scrollPosition * 1.75) + 'px';
};