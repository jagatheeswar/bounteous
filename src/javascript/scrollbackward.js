function scrollback(){
    var container = document.getElementById('scrolling');

var x = container.scrollLeft;
  container.scrollTo({
    top: 0,
    left: x -= 900,
    behavior: 'smooth'
  });
}


export default scrollback;