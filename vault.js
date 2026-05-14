// const imageInput = document.getElementById("imageInput");
// const gallery = document.getElementById("gallery");

// //Add image with addEventListener
// imageInput.addEventListener("change", function () {
//   const files = imageInput.files;

//   //check file one after the other
//   for (let file of files) {
//     if (!file.type.startsWith("image/")) continue;

//     const reader = new FileReader();

//     //If the image is loading from gallery createNewElement
//     reader.onload = function (e) {
//       const imageBox = document.createElement("div");
//       imageBox.classList.add("image-box");

//       const img = document.createElement("img");
//       img.src = e.target.result;

//       const captionDisplay = document.createElement("div");
//       captionDisplay.classList.add("caption");
//       captionDisplay.textContent = "No caption";

//       const captionInput = document.createElement("input");
//       captionInput.type = "text";
//       captionInput.placeholder = "Enter caption...";
//       captionInput.classList.add("caption-input");

//       const saveBtn = document.createElement("button");
//       saveBtn.textContent = "Save";
//       saveBtn.classList.add("save-btn");

//       saveBtn.onclick = function () {
//         captionDisplay.textContent = captionInput.value || "No caption";
//         captionInput.value = "";
//       };

//       const removeBtn = document.createElement("button");
//       removeBtn.textContent = "×";
//       removeBtn.classList.add("remove-btn");

//       removeBtn.onclick = function () {
//         gallery.removeChild(imageBox);
//       };

//       imageBox.appendChild(removeBtn);
//       imageBox.appendChild(img);
//       imageBox.appendChild(captionDisplay);
//       imageBox.appendChild(captionInput);
//       imageBox.appendChild(saveBtn);

//       gallery.appendChild(imageBox);
//     };

//     reader.readAsDataURL(file);
//   }

//   imageInput.value = "";
// });

// Just image without upload vote result
// const gallery = document.getElementById("gallery");

// // 📦 Get data from admin
// function getImages() {
//   return JSON.parse(localStorage.getItem("gallery")) || [];
// }

// // 🖼️ Show images
// function displayImages() {
//   gallery.innerHTML = "";
//   const images = getImages();

//   images.forEach((item) => {
//     const imageBox = document.createElement("div");
//     imageBox.classList.add("image-box");

//     const img = document.createElement("img");
//     img.src = item.src;

//     const caption = document.createElement("div");
//     caption.classList.add("caption");
//     caption.textContent = item.caption;

//     imageBox.appendChild(img);
//     imageBox.appendChild(caption);

//     gallery.appendChild(imageBox);
//   });
// }

// // 🔄 Auto update every second
// setInterval(displayImages, 1000);

// // Load first time
// displayImages();
