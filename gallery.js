
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

// Additional information shown in the information box
const infoTexts = [
    "Adopting a rescue dog gives an animal a second chance. With patience, care, and a safe home, rescued dogs can become wonderful companions.",
    "Cats need a comfortable place where they can rest and feel secure. A calm environment helps them settle into their new home.",
    "Playtime helps pets stay active and healthy. Always supervise outdoor activities and provide fresh water.",
    "Cats are curious animals that enjoy exploring safe surroundings. Toys, scratching posts, and play can keep them engaged.",
    "Some pets form strong friendships with other animals. Introduce new pets slowly and supervise their interactions.",
    "A peaceful resting place helps pets feel comfortable. Give them a quiet space where they can relax without disturbance.",
    "Regular walks provide dogs with exercise and opportunities to explore. Use a suitable leash and keep your dog safe.",
    "Puppies learn about the world through exploration. Gentle training, supervision, and positive reinforcement help them grow.",
    "Pets need enough rest to stay healthy. Provide a clean, comfortable bed in a safe area of your home.",
    "Responsible pet care includes nutritious food, clean water, exercise, grooming, and regular veterinary checkups."
];

// Variables for the HTML tags
const openList = '<li id="photo';
const closeList = '</li>';

const openCaptionTag = '<p class="caption">';
const closeCaptionTag = '</p>';

const openDescTag = '<div class="description">';
const closeDescTag = '</div>';

const openInfoHeading = '<h2>';
const closeInfoHeading = '</h2>';

const openInfoText = '<p>';
const closeInfoText = '</p>';

const closeLinkText = "Click This To Close";

const galleryList = document.getElementById("gallery-list");
const infoBox = document.getElementById("info-box");
const infoHeading = document.getElementById("info-heading");
const infoText = document.getElementById("info-text");
const closeInfo = document.getElementById("close-info");

// Hide the information box when the page first loads
infoBox.style.visibility = "hidden";

// Create all gallery images
for (let i = 0; i < imagePaths.length; i++) {
    const listItem = document.createElement("li");
    listItem.id = "photo" + (i + 1);

    const image = document.createElement("img");
    image.src = imagePaths[i];
    image.alt = captionTexts[i];
    image.className = "photo";
    image.loading = "lazy";

    const caption = document.createElement("p");
    caption.className = "caption";
    caption.textContent = captionTexts[i];

    const description = document.createElement("div");
    description.className = "description";
    description.textContent = descTexts[i];
    description.tabIndex = 0;

    // Clicking the description opens the information box
    function showInformation() {
        infoHeading.innerHTML =
            openInfoHeading + captionTexts[i] + closeInfoHeading;

        infoText.innerHTML =
            openInfoText + infoTexts[i] + closeInfoText;

        infoBox.style.visibility = "visible";
    }

    description.addEventListener("click", showInformation);

    // Allow keyboard users to open the information box
    description.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showInformation();
        }
    });

    listItem.appendChild(image);
    listItem.appendChild(caption);
    listItem.appendChild(description);

    galleryList.appendChild(listItem);
}

// Close the information box when the close link is clicked
closeInfo.textContent = closeLinkText;

closeInfo.addEventListener("click", function (event) {
    event.preventDefault();
    infoBox.style.visibility = "hidden";
});
