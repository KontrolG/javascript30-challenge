'use strict';

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const takePhotoButton = document.querySelector('.btn-take');

// Get user's permission, then the media video track
const getVideo = async () => {
  try {
    return await navigator.mediaDevices.getUserMedia({video: true});
  } catch (error) {
    console.log(`Ha ocurrido un error: ${error.message}`);
  }
}
// Append it to video player and play it
const addStreamToVideoPlayer = (stream, videoPlayer) => {
  videoPlayer.srcObject = stream;
  videoPlayer.play();
}
// render the video player image on the canvas
// Apply effect to the canvas
const setupCanvas = () => {
  canvas.width = 600;
  canvas.height = 480;
}

// Effects
const redScale = imageData => {
  const { data } = imageData;
  for (let i = 0; i < data.length; i += 4) {
    var avg = (data[i + 1] + data[i + 2]) / 2;
    data[i] = 200; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
    data[i + 3] = 240; // alpha
  }
  ctx.putImageData(imageData, -100, 0);
}

const blueScale = imageData => {
  const { data } = imageData;
  for (let i = 0; i < data.length; i += 4) {
    var avg = (data[i] + data[i + 1]) / 2;
    data[i] = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = 255; // blue
    data[i + 3] = 240; // alpha
  }
  ctx.putImageData(imageData, 100, 0);
};

const greenToBlack = imageData => {
  const { data } = imageData;
  let l = data.length / 4;

  for (let i = 0; i < l; i++) {
    let r = data[i * 4 + 0];
    let g = data[i * 4 + 1];
    let b = data[i * 4 + 2];
    if (g < 50 && r < 50 && b < 50) data[i * 4 + 3] = 0;
  }
  ctx.putImageData(imageData, 0, 0);
};

const renderCanvas = () => {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  /* redScale(imageData);
  blueScale(imageData); */
  greenToBlack(imageData);
  requestAnimationFrame(renderCanvas);
}
// Save a snapshot of the canvas


const setupCamera = async () => {
  const stream = await getVideo();
  addStreamToVideoPlayer(stream, video);
  setupCanvas();
  renderCanvas();
  console.log(stream);
}

const takePhoto = e => {
  /* background */
  const backgroundCanvas = document.createElement("canvas");
  const bgContext = backgroundCanvas.getContext("2d");
  // const backgroundImage = new Image()
  bgContext.drawImage();
  const anchorElement = `<a><img src="${canvas.toDataURL("image/png")}"/></a>`;
  strip.insertAdjacentHTML("afterBegin", anchorElement);
}

takePhotoButton.addEventListener("click", takePhoto);
window.addEventListener("load", setupCamera);
