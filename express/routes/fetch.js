
// const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// // Function to fetch data from the API using promises
// const fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// // Usage of fetchData function to fetch JSON data
// fetchData(apiUrl)
//   .then((data) => {
//     console.log("Fetched JSON data:", data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

const fetch = require("node-fetch");

async function fetchData() {
	try {
		const response = await fetch("https://api.github.com/users/github");
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error("Error:", error);
	}
}

fetchData();
