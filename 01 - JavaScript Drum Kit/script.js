document.addEventListener('keypress', keyPress);
let keyGlobal;

function keyPress(event) {
   const [key, audio] = document.querySelectorAll(`[data-key='${event.keyCode}']`);
   keyGlobal = key
   if(key == null) return;
   key.classList.add("playing");
   setTimeout(() => keyGlobal.classList.remove('playing'), 70);
   audio.play();
}