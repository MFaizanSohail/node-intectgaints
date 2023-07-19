
add(2,5);
add(3,5);
add(3,8);
console.log("hello world!");

function add(a,b) {
   var sum = a+b;    
   return console.log(sum);
}



function dataTypes() {
  var x = 10;
  let y = 20;
  const z = 30;

  if (true) {
    var x = 50;     // Redeclaring the same variable
    let y = 60;    // Creating a new variable within the block
    const z = 70;  // Creating a new constant within the block
    console.log(x, y, z);  // Output: 50, 60, 70
  }

  console.log(x, y, z);  // Output: 50, 20, 30
}
console.log(x);

dataTypes();


let name = "Ilya";

console.log( `hello ${1}` ); // ?

console.log( `hello ${"name"}` ); // ?

console.log( `hello ${name}` ); // ?