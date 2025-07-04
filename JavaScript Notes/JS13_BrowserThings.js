/* ---------- JS in Browser ----------
Javascript was initially designed to run on the web, and it's still the primary language used for client-side scripting in web browsers. When you run JavaScript in a browser, it has access to the Document Object Model (DOM) of the webpage, which allows it to interact with and manipulate the page's content. Javascript's ability to run on the web is very limited to protect the user's privacy and security. Developer's Tools in the browser can be used to debug and test the code. It contains features like console, debugger, and network tab.
1. Elements tab : This tab allows you to inspect and edit the HTML and CSS of a webpage.
2. Console tab : This tab allows you to execute JavaScript code and view the browser's console output/errors.
3. Debugger tab : This tab allows you to set breakpoints and step through your code line by line.
4. Network tab : This tab allows you to view the network requests made by the webpage.
5. Performance tab : This tab allows you to view the performance metrics of the webpage, including CPU usage, memory usage, and more.
6. Sources tab : This tab allows you to view and edit the source code of the webpage.
7. Lighthouse tab : This tab allows you to run audits on the webpage and view the results.
8. Memory tab : This tab allows you to view the memory usage of the webpage.
9. Security tab : This tab allows you to view the security settings of the webpage.
10. Application tab : This tab allows you to view and edit the application's settings.
11. Recorder tab : This tab allows you to record and replay user interactions with the webpage.

Some browsers methods are:
- alert("Alert") : This method displays an alert box with the specified message.
- confirm("Confirm this?") : This method displays a confirmation dialog box with the specified message.
- prompt("Enter name") : This method displays a prompt dialog box with the specified message.
- console.log("Hello") : This method logs the specified message to the console.
- console.error("Error") : This method logs the specified message to the console with an error level.
- console.warn("Delete?") : This method logs the specified message to the console with a warning level.
- console.info("About Us") : This method logs the specified message to the console with an info level.
- console.clear() : This method clears the console.
- console.table({Mahin:"Male", Sadaf:"Female"}) : This method logs the specified data to the console in a table format.
- console.assert(23>200, 'Not Possible') : This method logs the specified message to the console if the condition is false.
-location.href : This method returns the current URL of the webpage.
etc

Window Object, DOM, and BOM are the three main objects in the browser. Window object is the topmost object in the browser. It contains methods and properties that can be used to interact with the browser and the webpage. DOM is the Document Object Model, which is a tree-like structure that represents the webpage. BOM is the Browser Object Model, which is a set of objects that represent the browser and its functionality. The functions alert/confirm/prompt are also a part of the BOM.

*/

// ---------- Quiz 7 : Redirection ----------
/*
let x = confirm("Do you want to go for YouTube...?");

if (x) {
  location.href = "https://www.youtube.com/";
} else {
  alert("Denied");
}
*/

// ---------- Quiz 8 : ChangeColor ----------
/*
let userinp = prompt("Enter Color");
document.body.style.backgroundColor = userinp;
*/
