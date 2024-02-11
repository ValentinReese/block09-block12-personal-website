// commented code is failed attempt

/*const windowsErrorPop = document.querySelector(".windowsErrorPop"),
header = windowsErrorPop.querySelector("header");

function onDrag({movementX, movementY}) {
  let getStyle = window.getComputedStyle(windowsErrorPop);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);
  windowsErrorPop.style.left = `${left + movementX}px`;
  windowsErrorPop.style.left = `${top + movementY}px`;
}

header.addEventListener("mousedown", ()=>{
  header.addEventListener("mousemove", onDrag);
}); */

// Another attempt.... 

/*
const dragBox; 

const move = function(windowsErrorPop){
    const windowsWow = document.querySelector(".windowsErrorPop")

    windowsWow.forEach(windowsErrorPop => {
        windowsErrorPop.addEventListener ("mousedown", ( => {
            windowsErrorPop.style.position = "absolute"
            dragBox = windowsErrorPop

            document.onmousemove = (e) => {
                const x = e.pageX
                const y = e.pageY

                dragBox.style.left = x + "px"
                dragBox.style.top = y + "px"
            }
        }))
    })
}
*/

// Third attempt.... failed :( hahaha

/*
var loading = null;
var dragging = false;
var x;
var y;


function dragLoading() {

  loading = document.getElementById("loading");

  if(window.addEventListener) {
    loading.addEventListener('mousedown', startDrag);
    document.body.addEventListener('mousemove', drag);
    document.addEventListener('mouseout', stopDrag);
    document.body.addEventListener('mouseup', stopDrag);
  }

}

function startDrag(ev) {
  if(!dragging) {
    x = ev.clientX - loading.offsetLeft;
    y = ev.clientY - loading.offsetTop;
    dragging = true;
  }
}

function drag(ev) {
  if(dragging) {
    loading.style.left = ev.clientX - x + "px";
    loading.style.top = ev.clientY - y + "px";
  }
}

function stopDrag(ev) {
  if(dragging) {
    loading.style.left = ev.clientX - x + "px";
    loading.style.top = evclientY - y + "px";
    dragging = false;
  }
}
*/

loading.onmousedown = function(event) {

  let shiftX = event.clientX - loading.getBoundingClientRect().left;
  let shiftY = event.clientY - loading.getBoundingClientRect().top;

  loading.style.position = 'absolute';
  loading.style.zIndex = 1000;
  document.body.append(loading);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    loading.style.left = pageX - shiftX + 'px';
    loading.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  loading.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    loading.onmouseup = null;
  };

};

loading.ondragstart = function() {
  return false;
};

// Yay, it finally works!!!

/*
const notInKansas = document.getElementById('specialCharacters');

const rgbColors = (e) => {
  notInKansas.style.color = '#181818';
  setTimeout(() => {
    notInKansas.style.color = 'white';
  }, 200);
};

notInKansas.addEventListener('click', rgbColors);
*/

console.log("Hello World");

// Just adding a comment to commit 