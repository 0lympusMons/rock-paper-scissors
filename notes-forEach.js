/* w3schools original code: 

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction());
text += "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>";
}

console.log(text);

*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// {

let text = "<ul>";

// Passing an array and a function == (arr, fn)
//Function can also be written as: function (x) {console.log(x)}
forEachBootleg(fruits, (x) => console.log(x));

text += "</ul>";

// }


// This function has 2 parameters: (1) array and (2) function.
// (1) Array is for looping through each of its contents
// (2) Function is for using it for each elements of the array

// (arr, fn()) should not be used as this prevents forEachBootleg to use it as a function inside of it
// which makes fn(arr[i]) to cause errors. 
// Similar to OOP, we pass the function name instead of the function itself to access its "methods"/"functionalities"
function forEachBootleg(arr, fn) {

    let length = arr.length;

    for (let i = 0; i < length; i++) {
        fn(arr[i]);
    }

}

function myFunction(value) {
    text += "<li>" + value + "</li>";
}

