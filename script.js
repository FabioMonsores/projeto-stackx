let count = 1;
let slide = document.querySelector(".slide");
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  slide.style.transition = "all 2s";

  if (count > 4) {
    slide.style.transition = "all 0s";

    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
