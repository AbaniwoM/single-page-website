// Get the resume modal
var resumeModal = document.getElementById("resume-modal");
// Get the button that opens the modal
var resumeButton = document.getElementById("resume-btn");
// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close-modal")[0];
// Get photo modal
var photoModal = document.getElementById("photo-modal");
// Get the button that opens the modal
var photoButton = document.getElementById("photo-btn");
// Get the <span> element that closes the modal
var closeResumeButton = document.getElementsByClassName("close-resume-modal")[0];
var closePhotoButton = document.getElementsByClassName("close-photo-modal")[0];


// When the user clicks on the button, open the modal
resumeButton.onclick = function() {
  resumeModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeResumeButton.onclick = function() {
  resumeModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == resumeModal) {
    resumeModal.style.display = "none";
  }
}

photoButton.onclick = function() {
  photoModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closePhotoButton.onclick = function() {
  photoModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == photoModal) {
    photoModal.style.display = "none";
  }
}