// There can be mainly three types of nodes in a DOM tree: Element, Text (leaf), and Comment.
// NOTE : document.body can sometimes return null if the javascript is written before the body tag.

// ---------- Accessing Childs & Parent Node ----------

let y = document.body;
let x = document.body.firstElementChild;

y.firstChild; //Accessing First Child of DOM (Any type of child)
y.firstElementChild; //Accessing First Child of DOM (Only access element)
y.lastChild; //Accessing Last Child of DOM (Any type of child)
y.lastElementChild; //Accessing Last Child of DOM (Only access element)
y.childNodes; //Accessing All Childs of DOM
y.childNodes[1]; //Accessing Specific Child of DOM
y.children; //Accessing All Childs of DOM (Only access element)
y.nextSibling; //Accessing Next Sibling of DOM
y.nextElementSibling; //Accessing Next Sibling of DOM (Only access element)
y.previousSibling; //Accessing Previous Sibling of DOM
y.previousElementSibling; //Accessing Previous Sibling of DOM (Only access element)
y.dataset; //Accessing Dataset of the element (Only access element)
x.parentNode; //Accessing Parent Node of the element
x.parentElement; //Accessing Parent Node of the element (Only access element)
x.nodeName; //Accessing Node Name of the element
x.tagName; //Accessing Tag Name of the element (Only access element)
x.nodeValue; //Accessing Node Value of the element (Only access text node)
x.textContent; //Accessing Text Content of the element (Only access element)
x.hidden; //Accessing Hidden Property of the element (Only access element)
x.innerHTML; //Accessing Inner HTML of the element (Only access element)
x.outerHTML; //Accessing Outer HTML of the element (Only access element)
document.designMode; //Accessing Design Mode of the document means we can edit anything directly

// ---------- All Methods of Node ----------

y.appendChild(x.firstElementChild); //Adding Child to DOM
y.prepend(x.firstChild); //Adding Child to DOM at the beginning
y.removeChild(x); //Removing Child from DOM
y.remove(); //Removing the element from DOM
y.replaceChild(x, y.lastElementChild); //Replacing Child in DOM
y.insertBefore(x.firstElementChild, x); //Inserting Child to DOM before a specific child
x.cloneNode(true); //Cloning Node with all its children and you have to store it in a variable and append it to the DOM using appendChild()
y.checkVisibility(); //Checking Visibility of DOM
y.before(x); //Inserting Child to DOM before a specific child
y.after(x); //Inserting Child to DOM after a specific child
console.dir(x); //Give the element with all it's properties and methods

// ---------- Attribute Methods ----------

// NOTE : The attribute methods are used to get and set the attributes of an element. They are case sensitive
x.attributes; //Accessing All Attributes of the element
x.getAttribute("id"); //Accessing Specific Attribute of the element
x.hasAttribute("id"); //Checking if the element has a specific attribute
x.setAttribute("style", "color: red;"); //Setting Specific Attribute of the element
x.removeAttribute("style"); //Removing Specific Attribute of the element
x.toggleAttribute();
x.getAttributeNames(); //Accessing All Attribute Names of the element

// ---------- Accessing Table ----------

let t = document.getElementById("myTable");

t.tHead; // Gives the heading of the table
t.tBodies; // Gives the body of the table
t.tFoot; // Gives the foot of the table
t.caption; // Gives the caption of the table
t.border; // Gives the borderwidth of the table
t.cellpadding; // Gives the cellpadding of the table
t.cellspacing; // Gives the cellspacing of the table
t.frame; // Gives the frame of the table
t.rules; // Gives the rules of the table
t.width; // Gives the width of the table

t.rows; // Gives all rows of the table
t.cells; // Gives all cells of the table
t.rows.length; // Gives the first row of the table
t.rows[0].rowIndex; // Gives the index of the row of the table
t.rows[0].sectionRoxIndex; // Gives the index of the section of the row of the table
t.rows[0].cells; // Gives all cells of the row of the table
t.rows[0].cells[0]; // Gives the first cell of the row of the table
t.rows[0].cells[0].cellIndex; // Gives the index of the cell of the row of the table
t.rows[0].cells[0].rowSpan; // Gives the row span of the cell of the table.
t.rows[0].cells[0].colSpan; // Gives the column span of the cell of the table.
t.rows[0].insertCell(0); // Inserting a new cell in the table, then use .textContent to add text to the cell.
t.rows[0].deleteCell(0); // Deleting a cell from the table

// ---------- Searching DOM Elements ----------

document.getElementsByClassName("boxes"); //give all elements having given class name
document.getElementById("box2"); //give the specific element having given id
document.getElementsByTagName("div"); //give all div elements
document.getElementsByName("box4"); //give the element named box4
document.querySelector(".box"); //give the first element having given class name
document.querySelectorAll("#box1"); //give all elements having given class name or id name.
document.getRootNode().nodeName; //give the root node of the document & it's name
document.getAnimations(); //give all animations of the document

// ---------- Matches, Closest & Contains ----------

let d = document.querySelectorAll(".boxes");
d[0].matches("#box1"); //checks if the element matches the given selector
d[0].closest("#box1"); //returns the closest element to the given selector. Self Check => Parent => Grand Parent (until it finds)
d[0].contains("sub-box"); //checks if the element contains the given element.

// ---------- Adding/Removing Classes ----------

let p = document.body.firstElementChild;

p.classList; //returns all classes of the element in array form
p.className; //returns all classes of the element in string form
p.classList.add("box"); //adds a class to the element
p.classList.remove("box"); //removes a class from the element
p.classList.contains("box-keeper"); //checks if the element has the given class
p.classList.toggle("redbox"); //adds the class if it doesn't exist, else removes it.

// ---------- Creating Elements ----------

let newDiv = document.createElement("div");
newDiv.className = "box";
newDiv.id = "box1";
newDiv.textContent = "Hello, World!";
newDiv.innerHTML = "<b>Welcome</b>";
newDiv.style.color = "red";
newDiv.style.fontSize = "20pt";

document.body.append(newDiv);

// ---------- insertAdjacentHTML/Text/Element ----------

let q = document.querySelector(".container");
q.insertAdjacentHTML("beforebegin", "<b>Hello</b>");
q.insertAdjacentText("afterbegin", "World");
q.insertAdjacentText("afterend", "World");
q.insertAdjacentElement("beforeend", document.createElement("p"));
