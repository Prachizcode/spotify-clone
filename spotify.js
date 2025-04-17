const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const progressBar = document.querySelector('.progress-bar');
const currTime = document.querySelector('.curr-time');
const totTime = document.querySelector('.tot-time');

let isPlaying = false;

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playBtn.src = 'player_icon3.png'; // play icon
  } else {
    audio.play();
    playBtn.src = 'pause_icon.png'; // pause icon
  }
  isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', () => {
  progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
  currTime.textContent = formatTime(audio.currentTime);
  totTime.textContent = formatTime(audio.duration || 0);
});

progressBar.addEventListener('input', () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});
