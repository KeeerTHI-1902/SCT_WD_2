let ms = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let milli = ms < 10 ? "0" + ms : ms;

  document.getElementById("display").innerText =
    `${h}:${m}:${s}:${milli}`;
}

function start() {
  if (timer !== null) return;

  timer = setInterval(() => {
    ms++;

    if (ms === 100) {
      ms = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 10);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  ms = seconds = minutes = hours = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (timer === null) return;

  const lapTime = document.getElementById("display").innerText;
  const li = document.createElement("li");
  li.innerText = "Lap: " + lapTime;
  document.getElementById("laps").appendChild(li);
}
