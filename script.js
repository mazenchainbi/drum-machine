const names = {
  Q: "Heater 1", W: "Heater 2", E: "Heater 3",
  A: "Heater 4", S: "Clap", D: "Open Hi-Hat",
  Z: "Kick and Hat", X: "Kick", C: "Closed Hi-Hat"
};

const display = document.getElementById('display');

function trigger(letter) {
  const audio = document.getElementById(letter);
  audio.currentTime=0;
  const p = audio.play();
  if (p && p.catch) p.catch(() => {});
  display.innerText=names[letter];
  const pad = audio.parentElement;
  pad.classList.add('active');
  setTimeout(() => pad.classList.remove("active"), 100);
}

document.querySelectorAll(".drum-pad").forEach(pad => {
  pad.addEventListener('click', () => trigger(pad.querySelector('.clip').id));
});

document.addEventListener("keydown", e => {
  const letter = (e.key || "").toUpperCase();
  if (names[letter]) trigger(letter);
});