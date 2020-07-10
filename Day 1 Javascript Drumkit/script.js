window.addEventListener('keydown', playTune);
function playTune(e) {
  let code = e.keyCode;
  let audio = document.querySelector(`audio[data-key="${code}"]`);
  if(!audio) return;
  let key = document.querySelector(`div[data-key="${code}"]`);
  audio.currentTime = 0; // Every time the key is pressed restart the audio
  audio.play();
  key.className = "key click";
  setTimeout(function(){key.className = "key"}, 70);
}