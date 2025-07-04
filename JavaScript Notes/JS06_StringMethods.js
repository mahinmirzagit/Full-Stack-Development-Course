// ---------- Strings ----------

let mystr = `My name is Mahin Mirza`; // Strings cannot be changed after they are created

// Methods
console.log(mystr.charAt(12)); //Returns the character at a specified index (position)
console.log(mystr.charCodeAt(12)); //Returns the Unicode of the character at a specified index
console.log(mystr.concat(". I am 16 y/o")); //Concatinate the strings
console.log(mystr.endsWith("fes")); //Returns true if a string ends with a specified value
console.log(mystr.startsWith("My")); //Checks whether a string begins with specified characters
console.log(mystr.includes("is")); //Returns true if a string contains a specified value
console.log(mystr.indexOf("name")); //Returns the index (position) of the first occurrence of a value in a string
console.log(mystr.lastIndexOf("M")); //Returns the index (position) of the last occurrence of a value in a string
console.log(mystr.match("M")); //Searches a string for a value, or a regular expression, and returns the matches
console.log(mystr.matchAll("M")); //Searches a string for a value, or a regular expression, and returns the matches
console.log(mystr.repeat(3)); //Returns a new string with a number of copies of a string
console.log(mystr.replace("is", "are")); //Searches a string for a value, or a regular expression, and returns a string where the values are replaced
console.log(mystr.search("is")); //Searches a string for a value, or regular expression, and returns the index (position) of the match
console.log(mystr.substring(0, 5)); //Extracts characters from a string, between two specified indices (except no negative values)
console.log(mystr.slice(-5)); //Extracts a part of a string and returns a new string (except negative values)
console.log(mystr.split(" ")); //Splits a string into an array of substrings
console.log(mystr.toLowerCase()); //Returns a string converted to lowercase letters
console.log(mystr.toUpperCase()); //Returns a string converted to uppercase letters
console.log(mystr.trim()); //Returns a string with removed whitespaces
console.log(mystr.valueOf()); //Returns the primitive value of a string or a string object
console.log(mystr.padEnd(10, "+")); //Adds padding at the end of the text with the given string
console.log(mystr.padStart(10, "+")); //Adds padding at the start of the text with the given string

console.clear();

// Best Method To Concatenate (Template Literals)
let name = "Mahin";
let age = 16;
let myinfo = `My name is ${name} and my age is ${age}`;
console.log(myinfo);
console.log(mystr);
