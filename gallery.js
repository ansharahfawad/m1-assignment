
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

const infoTexts = [
    "Adopting a rescue dog gives an animal a second chance. With patience, care, and a safe home, rescued dogs can become wonderful companions.",
    "Cats need a comfortable place where they can rest and feel secure.",
    "Playtime helps pets stay active and healthy. Always supervise outdoor activities.",
    "Cats are curious animals that enjoy exploring safe surroundings.",
    "Introduce pets slowly and supervise their interactions to help them get along.",
    "A peaceful resting place helps pets feel comfortable and secure.",
    "Regular walks provide dogs with exercise and opportunities to explore.",
    "Gentle training, supervision, and positive reinforcement help puppies grow.",
    "Pets need enough rest to stay healthy. Provide a clean, comfortable bed.",
    "Responsible pet care includes nutritious food, clean water, exercise, grooming, and veterinary checkups."
];

const galleryList = document.getElementById("gallery-list");
const infoBox = document.getElementById("info-box");
const infoHeading = document.getElementById("info-heading");
const infoText = document.getElementById("info-text");
const closeInfo = document.getElementById("close-info");

// Hide the previous assignment's information box initially.
if (infoBox) {
    infoBox.style.visibility = "hidden";
}

// Create the gallery images, captions, and hover descriptions.
for (let i = 0; i < imagePaths.length; i++) {
    const listItem = document.createElement("li");
    listItem.id = "photo" + (i + 1);

    // The image is inside a link so it can be selected
    // independently from the hover description.
    const imageLink = document.createElement("a");
    imageLink.href = "#";
    imageLink.className = "lightbox-toggle";
    imageLink.setAttribute("aria-label", "Enlarge " + captionTexts[i]);

    const image = document.createElement("img");
    image.src = imagePaths[i];
    image.alt = captionTexts[i];
    image.className = "photo";
    image.loading = "lazy";

    imageLink.appendChild(image);

    const caption = document.createElement("p");
    caption.className = "caption";
    caption.textContent = captionTexts[i];

    const description = document.createElement("div");
    description.className = "description";
    description.textContent = descTexts[i];
    description.tabIndex = 0;

    // Keep the previous assignment's information box behavior.
    // Clicking the description does not open the lightbox.
    function showInformation() {
        if (!infoBox) return;

        infoHeading.textContent = captionTexts[i];
        infoText.textContent = infoTexts[i];
        infoBox.style.visibility = "visible";
    }

    description.addEventListener("click", showInformation);

    description.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showInformation();
        }
    });

    listItem.appendChild(imageLink);
    listItem.appendChild(caption);
    listItem.appendChild(description);

    galleryList.appendChild(listItem);
}

// Close the previous information box.
if (closeInfo && infoBox) {
    closeInfo.addEventListener("click", function (event) {
        event.preventDefault();
        infoBox.style.visibility = "hidden";
    });
}

// --------------------------------------------------
// jQuery LIGHTBOX
// This feature opens when the IMAGE is clicked.
// It does not use the description's click event.
// --------------------------------------------------

$(document).ready(function () {

    // Open the lightbox when a gallery image is clicked.
    $(document).on("click", ".lightbox-toggle img", function (event) {
        event.preventDefault();

        // Remove any image from the previous lightbox opening.
        $(".lightbox-content").empty();

        // Clone the clicked image and place it in the lightbox.
        const enlargedImage = $(this).clone();

        enlargedImage.removeAttr("loading");
        enlargedImage.attr("alt", $(this).attr("alt"));

        $(".lightbox-content").append(enlargedImage);

        // Show the dark backdrop and lightbox window.
        $(".backdrop")
            .stop(true, true)
            .css("display", "block")
            .animate({ opacity: 0.65 }, 300);

        $(".box")
            .stop(true, true)
            .fadeIn(300);
    });

    // Close when the X button or dark backdrop is clicked.
    $(".close, .backdrop").on("click", function () {
        closeLightbox();
    });

    // Also allow the user to close the lightbox with Escape.
    $(document).on("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });

    function closeLightbox() {
        $(".box").stop(true, true).fadeOut(200);

        $(".backdrop")
            .stop(true, true)
            .animate({ opacity: 0 }, 200, function () {
                $(this).css("display", "none");
            });

        $(".lightbox-content").empty();
    }
});
