// function example
{
  add(2, 5);
  add(3, 5);
  add(3, 8);
  console.log("hello world!");

  function add(a, b) {
    var sum = a + b;
    return console.log(sum);
  }
}
// function example end

//different between var Types
{
  function varTypes() {
    var x = 10;
    let y = 20;
    const z = 30;

    if (true) {
      x = 50; // Redeclaring the same variable
      y = 60; // Creating a new variable within the block
      z = 70; // Error: Assignment to constant variable
      console.log(x, y, z); // Output: 50, 60, 70
    }

    console.log(x, y, z); // Output: 50, 20, 30
  }
  console.log(x);

  varTypes();
}
//different between var Types end

// Different ways to Output a variable
{
  let name = "Ilya";
  console.log(`hello ${1}`);
  console.log(`hello ${"name"}`);
  console.log(`hello ${name}`);
}
// Different ways to Output a variable end

// Object Construction function
{
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.sayHello = function () {
    console.log(
      "Hello, my name is " + this.name + " and I'm " + this.age + " years old."
    );
  };

  // Creating objects using the constructor function
  var person1 = new Person("Alice", 25);
  var person2 = new Person("Bob", 30);

  // Accessing object properties
  console.log(person1.name); // Output: "Alice"
  console.log(person2.age); // Output: 30

  // Invoking object methods
  person1.sayHello(); // Output: "Hello, my name is Alice and I'm 25 years old."
  person2.sayHello(); // Output: "Hello, my name is Bob and I'm 30 years old."
}
// Object Construction function End

//Speard and rest functions
{
  // 1 Copying an array
  {
    const originalArray = [1, 2, 3];
    const newArray = [...originalArray];
    console.log(newArray); // Output: [1, 2, 3]
  }
  // 2 Merging arrays
  {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const mergedArray = [...array1, ...array2];
    console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
  }

  // 3 Adding elements to an existing array:
  {
    const array1 = [1, 2, 3];
    const array2 = [...array1, 4, 5, 6];
    console.log(array2); // Output: [1, 2, 3, 4, 5, 6]
  }

  // 4 Spreading a string into an array of characters:
  {
    const str = "Hello";
    const charArray = [...str];
    console.log(charArray); // Output: ['H', 'e', 'l', 'l', 'o']
  }

  // 5 Merging objects:
  {
    const obj1 = { foo: 1, bar: 2 };
    const obj2 = { baz: 3 };
    const mergedObject = { ...obj1, ...obj2 };
    console.log(mergedObject); // Output: { foo: 1, bar: 2, baz: 3 }
  }

  // 6 Creating a shallow copy of an object:
  {
    const originalObj = { name: "Alice", age: 25 };
    const newObj = { ...originalObj };
    console.log(newObj); // Output: { name: "Alice", age: 25 }
  }
}
//Speard and rest functions end

// object destructuring
{
  const person = { name: "Alice", age: 25, country: "USA" };
  const { name, age, country } = person; // Extracting values using object destructuring

  console.log(name); // Output: "Alice"
  console.log(age); // Output: 25
  console.log(country); // Output: "USA"
}
// object destructuring end

// array destructuring
{
  const numbers = [1, 2, 3];
  const [first, second, third] = numbers; // Extracting values using array destructuring

  console.log(first); // Output: 1
  console.log(second); // Output: 2
  console.log(third); // Output: 3
}
// array destructuring end

// Math Object (just some are listed here)
{
  console.log(Math.PI); // Output: 3.141592653589793
  console.log(Math.round(4.7)); // Output: 5
  console.log(Math.floor(4.7)); // Output: 4
  console.log(Math.random()); // Output: A random number between 0 and 1
  console.log(Math.sqrt(16)); // Output: 4
  console.log(Math.sin(Math.PI / 2)); // Output: 1 (sine of 90 degrees in radians)
}
// Math Object end

// Date Object (few are listed here )
{
  const currentDate = new Date();
  console.log(currentDate); // Output: Current date and time

  const specificDate = new Date("2022-12-31");
  console.log(specificDate); // Output: December 31, 2022

  console.log(currentDate.getFullYear()); // Output: Current year
  console.log(currentDate.getMonth()); // Output: Current month (0-11, where 0 is January)
  console.log(currentDate.getDate()); // Output: Current day of the month
  console.log(currentDate.getHours()); // Output: Current hour
  console.log(currentDate.getMinutes()); // Output: Current minute
  console.log(currentDate.getSeconds()); // Output: Current second
  console.log(currentDate.getMilliseconds()); // Output: Current millisecond
}
// Date Object end

// DOM manipulation
{
  // Get an element by its ID
  const element = document.getElementById("myElementId");

  // Get the first element that matches a CSS selector
  const firstElement = document.querySelector(".myClass");

  // Get all elements that match a CSS selector
  const allElements = document.querySelectorAll(".myClass");

  // Update text content
  element.textContent = "New text content";

  // Update inner HTML
  element.innerHTML = "<strong>New HTML content</strong>";

  // Change styles
  element.style.color = "red";
  element.style.fontSize = "20px";
  // You can create new DOM elements using document.createElement()

  const newElement = document.createElement("div");
  newElement.textContent = "New element content";

  // and append them to the document using methods like appendChild().
  const parentElement = document.getElementById("parentElementId");
  parentElement.appendChild(newElement);

  const button = document.getElementById("myButton");

  // You can attach event listeners to elements to respond to user interactions.
  button.addEventListener("click", function () {
    console.log("Button clicked!");
  });
}
// DOM manipulation end
