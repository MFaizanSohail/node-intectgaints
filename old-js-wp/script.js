document.getElementById("addElementBtn").addEventListener("click", function () {
	var elementToAdd = prompt(
		"Choose an element number to add: 1 Paragraph, 2 Image, 3 Video, 4 Form"
	);

	if (elementToAdd) {
		switch (elementToAdd) {
			case "1":
				var text = prompt("Enter text for the paragraph"); // getting the text from the user input
				if (text) {
					var paragraph = document.createElement("p"); // create paragraph element
					paragraph.textContent = text; // add text to paragraph element
					paragraph.setAttribute("class", "par"); // add class to paragraph element
					document.getElementById("content").appendChild(paragraph); // add the paragraph to div with id "content".
				}
				break;

			case "2":
				var imageURL = prompt("Enter the URL of the image (only one)");
				if (imageURL) {
					var image = document.createElement("img");
					image.src = imageURL;
					image.setAttribute("class", "picture");
					document.getElementById("content").appendChild(image);
				} else {
					alert("Invalid input!");
				}
				break;

			case "3":
				var videoURL = prompt("Enter the URL of the video(only one)");
				if (videoURL) {
					var video = document.createElement("iframe");
					video.src = videoURL;
					video.setAttribute("class", "video");
					document.getElementById("content").appendChild(video);
				} else {
					alert("Invalid input!");
				}
				break;

			case "4":
				var formHTML = ` 
                    <form id="contact-form">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required><br>

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required><br>

                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" rows="3"></textarea><br>

                        <input type="submit" value="Submit"><br>
                    </form>
                `;
				document
					.getElementById("content")
					.insertAdjacentHTML("beforeend", formHTML);
				break;

			default:
				alert("Invalid choice!");
		}
	}
});
