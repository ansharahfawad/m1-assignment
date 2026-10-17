
/* Happy Tails - JavaScript Photo Gallery */

// Store the image paths in an array.
const imagePaths = [
    "images/gallery-01.jpeg",
    "images/gallery-02.jpeg",
    "images/gallery-03.jpeg",
    "images/gallery-04.jpeg",
    "images/gallery-05.jpeg",
    "images/gallery-06.jpeg",
    "images/gallery-07.jpeg",
    "images/gallery-08.jpeg",
    "images/gallery-09.jpeg",
    "images/gallery-10.jpeg"
];

// Captions displayed below the photographs.
const captionTexts = [
    "A Happy Beginning",
    "A Quiet Moment",
    "Playtime Outdoors",
    "Curious Whiskers",
    "Friends Forever",
    "A Cozy Afternoon",
    "Ready for a Walk",
    "Little Explorer",
    "Nap Time",
    "Love and Care"
];

// Descriptions displayed when the user hovers over a photograph.
const descTexts = [
    "A rescued dog enjoys a fresh start in a caring home.",
    "A cat relaxes in a comfortable and peaceful space.",
    "A playful pet enjoys time outside in the sunshine.",
    "A curious cat explores its surroundings.",
    "Two animal friends enjoy spending time together.",
    "A relaxed pet enjoys a quiet afternoon indoors.",
    "A happy dog gets ready to go for a walk.",
    "A curious puppy discovers something new.",
    "A tired furry friend settles down for a nap.",
    "Gentle care and affection help pets feel safe."
];

// HTML opening and closing tags required for the gallery.
const openList = '<li id="photo';
const closeList = '</li>';

const openCaptionTag = '<p class="caption">';
const closeCaptionTag = '</p>';

const openDescTag = '<div class="description">';
const closeDescTag = '</div>';

// Find the gallery list in gallery.html.
const galleryList = document.getElementById("gallery-list");

// Generate gallery items using a loop.
if (galleryList) {
    for (let i = 0; i < imagePaths.length; i++) {

        // Each list item receives a unique ID: photo1, photo2, etc.
        const listItem = document.createElement("li");
        listItem.id = "photo" + (i + 1);

        // Create the image.
        const image = document.createElement("img");
        image.src = imagePaths[i];
        image.alt = captionTexts[i];
        image.className = "photo";
        image.loading = "lazy";

        // Create the caption using captionTexts.
        const caption = document.createElement("p");
        caption.className = "caption";
        caption.textContent = captionTexts[i];

        // Create the description using descTexts.
        const description = document.createElement("div");
        description.className = "description";
        description.textContent = descTexts[i];

        // Add the image, caption, and description to the list item.
        listItem.appendChild(image);
        listItem.appendChild(caption);
        listItem.appendChild(description);

        // Add the completed list item to the gallery.
        galleryList.appendChild(listItem);
    }
}
