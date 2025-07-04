//---------- Variables in JavaScript ----------
/*
Variables in JavaScript are used to store values at allocated memory location.
Types Of Variables:
 - var (Can be changed / empty / re-declared)
 - let (Can be changed / empty. but NOT re-declared)
 - const (Cannot be changed / empty / re-declared)
*/

// var Example (old gen)
var name_ = "Mahin";
console.log(name_);

var name_ = "Mahin"; // re-declaration
name_ = "Zayn"; //updating
var surname; // We can assign nothing but the return value will be 'undefined'
console.log(surname);

// let Example (new gen)
{
  let othername = "Khushi"; //Overwrite the global variable if local not exist
  console.log(othername);
}

// const Example (new gen)
// const othername; // Empty Value. Gives error
const othername = "Zayn";
// othername = "Sahil" //Cannot change. Hence, Gives error
console.log(othername);
