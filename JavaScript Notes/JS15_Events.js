// ---------- Events ----------
/* An event is a function that is called when a specific action occurs.
Some important events are:
- Mouse Events: click, dblclick, mousedown, mouseup, mouseover, mouseout, mousemove, contextmenu(right click), mousewheel(scroll), etc.
- Keyboard Events: keydown, keyup, keypress, etc.
- Form Events: submit, reset, change, etc.
- Document Events: load, unload, scroll, resize, etc.
*/

// Handling Events in JavaScript
/* <input type="button" onclick="func1()"></input> */
//OR
let elem = document.body.getElementsByClassName(".btn");
elem.addEventListener("click", () => {
  console.log("Button clicked");
});
elem.addEventListener("keydown", () => {
  console.log("Key pressed");
});
//OR
elem.onclick = function () {
  console.log("Button clicked");
};

// We can use removeEventListener() to remove an event listener from an element.
elem.removeEventListener("click", () => {
  console.log("Button clicked");
});

event.type(); // returns the type of the event
event.target(); // returns the element that triggered the event
event.preventDefault(); // prevents the default action of the event
event.currentTarget(); // returns the current target of the event
event.clientX(); // returns the x-coordinate of the mouse pointer relative to the origin of the client area of the window
event.clientY(); // returns the y-coordinate of the mouse pointer relative to the origin of the client area of the window

// ---------- Event Bubbling and Capturing ----------
// Event bubbling is the process of an event being triggered on an element and then being triggered on all of its parent elements.
// Event capturing is the process of an event being triggered on an element and then being triggered on all of its child elements.
// We can use event.stopPropagation() to prevent event bubbling.
// We can use event.stopImmediatePropagation() to prevent event bubbling and also prevent other event listeners from being triggered.

// ---------- setInterval() and setTimeout() ----------
// setInterval() is a function that calls a function at specified intervals (in milliseconds).
// setTimeout() is a function that calls a function after a specified delay (in milliseconds).
// We can use clearInterval() to stop the execution of a function that is being called at specified intervals
// We can use clearTimeout() to stop the execution of a function that is being called after a specified delay

let a = setInterval(() => {
  document.getElementById("box1").style.backgroundColor = randColor();
}, 3000); // change the background color of box1 every 3 seconds

let b = setTimeout(() => {
  document.getElementById("box1").style.backgroundColor = randColor();
}, 3000); // change the background color of box1 after 3 seconds
