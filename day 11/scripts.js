'use strict';

const video = document.querySelector("video.player__video");
const toggleButton = document.querySelector(".toggle");
const progressFilled = document.querySelector(".progress__filled");
const progress = document.querySelector(".progress");
const volumeSlider = document.querySelector("input[name='volume']");
const playbackSlider = document.querySelector("input[name='playbackRate']");
const skipButtons = document.querySelectorAll(".skip");

const toggleController = () => {
  if (video.paused) {
    video.play();
    toggleButton.textContent = "❚ ❚";
  }
  else {
    video.pause();
    toggleButton.textContent = "►";
  }
}

const getCurrentProgress = () => {
  return (video.currentTime / video.duration) * 100;
}

const updateProgress = e => {
  progressFilled.style.flexBasis = `${getCurrentProgress().toPrecision(2)}%`;
}

const volumeController = e => video.volume = e.target.value;

const playbackController = e => video.playbackRate = e.target.value;

const jump = seconds => video.currentTime += seconds;

const skipController = e => {
  const jumpSeconds = parseInt(e.target.dataset.skip, 10);
  jump(jumpSeconds);
}

const seekerController = e => {
  const targetElement = e.target.closest(".progress")
  const {left, width } = targetElement.getBoundingClientRect();
  const progress = (e.x - left) / width;
  video.currentTime = video.duration * progress;
}

video.addEventListener("click", toggleController);
video.addEventListener("timeupdate", updateProgress);
toggleButton.addEventListener("click", toggleController);

volumeSlider.addEventListener("change", volumeController);
volumeSlider.addEventListener("mousemove", volumeController);

playbackSlider.addEventListener("change", playbackController);
playbackSlider.addEventListener("mousemove", playbackController);

skipButtons.forEach(button => button.addEventListener("click", skipController));

progress.addEventListener("click", seekerController);
progress.addEventListener("mousedown", e =>
  e.target.addEventListener("mousemove", seekerController)
);
progress.addEventListener("mouseup", e =>
  e.target.removeEventListener("mousemove", seekerController)
);
progress.addEventListener("mouseleave", e =>
  e.target.removeEventListener("mousemove", seekerController)
);

document.addEventListener("fullscreenchange", e => console.log("epa"));
// progress.addEventListener("mousemove", seekerController);

