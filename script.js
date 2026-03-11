let imageNumber = 1;

function advanceimage() {
    const img = document.getElementById("imageImage");
    const caption = document.getElementById("imageCaption");
    const button = document.getElementById("nextButton");

    if (imageNumber === 1) {
        img.src = "images/forest2.jpg";
        caption.textContent = "The trees grow taller, shadows seem to move.";
        imageNumber++;
    } else if (imageNumber === 2) {
        img.src = "images/forest3.jpg";
        caption.textContent = "A misty path leads down the green trail.";
        imageNumber++;
    } else {
        document.getElementById("endingMessage").classList.remove("hidden");
        button.disabled = true;
        imageNumber++;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nextButton").addEventListener("click", advanceimage);
});
