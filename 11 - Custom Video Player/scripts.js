const videoPlayer = document.querySelector(".player__video");
const progressBar = document.querySelector(".progress__filled");
const progressContainer = document.querySelector(".progress");
const playButton = document.querySelector(".player__button");
const volumeChange = document.querySelectorAll(".player__slider")[0];
const playBackRateChange = document.querySelectorAll(".player__slider")[1];
const goBack10 = document.querySelectorAll(".player__button")[1];
const goForward25 = document.querySelectorAll(".player__button")[2];


let play = false;
let mousedown = false;


videoPlayer.addEventListener("timeupdate", progress);

playButton.addEventListener("click", playPause);
goBack10.addEventListener("click", goBack);
goForward25.addEventListener("click", goForward);

progressContainer.addEventListener("mousemove", (e) => mousedown&&changeTime(e));
progressContainer.addEventListener("mousedown", ()=> mousedown=true);
progressContainer.addEventListener("mouseup", () => mousedown=false);

volumeChange.addEventListener("input", volume);
playBackRateChange.addEventListener("input", playBackRate);




function progress(e){
   const progressPercentage = this.currentTime*100/this.duration;
   progressBar.style.flexBasis = `${progressPercentage}%`;
}

function playPause(){
   if(!play){
      videoPlayer.play();
      playButton.innerHTML = "&#x23F8";
      play = true;
   }
   else {
      videoPlayer.pause();
      playButton.textContent = "►";
      play = false;
   }
}

function volume(e){
   videoPlayer.volume = e.target.value;
}

function playBackRate(e){
   videoPlayer.playbackRate = e.target.value;
}

function goBack(){
   videoPlayer.currentTime -= 10;
}

function goForward(){
   videoPlayer.currentTime += 25;
}

function changeTime(e){
   let videoTime = (e.offsetX / progressContainer.offsetWidth) * videoPlayer.duration;
   videoPlayer.currentTime = videoTime;
}