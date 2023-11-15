window.addEventListener('scroll', function() {
  var logo = document.querySelectorAll('.logoimage');
  var text = document.querySelectorAll('.logotext');
  var dark = document.querySelector('#dark')
  var light = document.querySelector('#light')
  var link = document.querySelector('nav');
  var head = document.querySelector('header');
  var content = document.querySelector('.wrapper');

  if (!logo || !content) {
    return;
  }
  
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      var logoHeight = logo[0].offsetHeight;
      var logo = logo[0]
      var text = text[0]
  }
  else {
      var logoHeight = logo[1].offsetHeight;
      var logo = logo[1]
      var text = text[1]
  }
  
  var scrollTop = window.scrollY|| document.documentElement.scrollTop;
  console.log("Header: " + head.offsetHeight + "\nText: " + text.innerHTML)
  console.log("Offest Height: "+ logoHeight)
  if (scrollTop >= logoHeight) {
    logo.classList.add('shrink');
    text.style.opacity = 0;
    link.style.opacity = 0;
    head.style.background = "rgba(0, 0, 0, 0)";
    logo.style.position = "fixed";
    logo.style.left = "2%";
    logo.style.top = "2%";
  } else {
    logo.classList.remove('shrink');
    text.style.opacity = 1;
    link.style.opacity = 1;
    head.style.background = "var(--header)";
    logo.style.position = "static";
  }
  var finalHeight = logoHeight * 2 / 75
  console.log("Final Height: "+ finalHeight)
  content.style.marginTop =  finalHeight + 'px';
});