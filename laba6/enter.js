let button_enter = document.querySelector('#enter_link');
let button_close = document.querySelector('.enter_close');
let drag=document.querySelector('.enter_top');

button_enter.addEventListener("click", function() {
    document.querySelector('.overlay').style.display = "flex";
  });

button_close.addEventListener("click", function() {
    document.querySelector('.overlay').style.display = "none";
  });

let div = document.querySelector('.enter_window');
let listener = function(e) {
  div.style.left = e.pageX - 50 + "px";
  div.style.top = e.pageY - 50 + "px";
};

drag.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', listener);
});

drag.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', listener);
});
 