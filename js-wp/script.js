// Function to show the element options when the button is clicked
function showElementOptions() {
	var elementOptionsDiv = document.getElementById("elementOptions");
	elementOptionsDiv.classList.toggle("hidden");
}

// Function to add an element based on the selected option
function addElement(elementType) {
	switch (elementType) {
		case "paragraph":
			var paragraphText = prompt("Enter the text for the paragraph:");
			if (paragraphText) {
				var paragraph = document.createElement("p");
				paragraph.textContent = paragraphText;
				document.getElementById("content").appendChild(paragraph);
			} else {
				alert("Invalid input!");
			}
			break;
		case "image":
			var imageUrl = prompt("Enter the URL for the image:");
			if (imageUrl) {
				var image = document.createElement("img");
				image.src = imageUrl;
				document.getElementById("content").appendChild(image);
			} else {
				alert("Invalid input!");
			}
			break;
		case "video":
			var orgVideoUrl = prompt("Enter the URL for the video:");
            var videoUrl = orgVideoUrl.replace("watch?v=", "embed/");
			if (videoUrl) {
				var video = document.createElement("iframe");
				video.src = videoUrl;
				video.setAttribute("allowfullscreen", "true");
				document.getElementById("content").appendChild(video);
			} else {
				alert("Invalid input!");
			}
			break;
		case "form":
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
			var formDiv = document.createElement("div");
			formDiv.innerHTML = formHTML;
			document.getElementById("content").appendChild(formDiv);
			break;
		default:
			alert("Invalid choice!");
	}
	showElementOptions();
}
