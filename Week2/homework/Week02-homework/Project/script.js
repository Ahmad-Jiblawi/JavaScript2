const downArrow = document.querySelector('#arrow-down'),
  upArrow = document.querySelector('#arrow-up'),
  setTime = document.querySelector('#time-set'),
  play = document.querySelector('#play'),
  pause = document.querySelector('#pause'),
  reset = document.querySelector('#reset'),
  timeCounter = document.querySelector('#clock');

let time = 30 * 60;
let repeat;

setTime.innerHTML = timeFormat(time);
timeCounter.innerHTML = timeFormat(time);
upArrow.addEventListener('click', timeIncrease);
downArrow.addEventListener('click', timeDecrease);
play.addEventListener('click', runCountDown);
pause.addEventListener('click', pauseCountDown);
reset.addEventListener('click', resetCountValue);

function timeFormat(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  if(min > 59) {
    let hour = Math.floor(min / 60);
        min = min % 60;
        if(hour < 10) {hour = '0' + hour}
        if(min < 10) {min = '0' + min}
        if(sec < 10) {sec = '0' + sec}
    return hour + ':' + min + ':' + sec;
  };
  if(min < 10) {min = '0' + min};
  if(sec < 10) {sec = '0' + sec};
  {
    if(time.classList === 'active') {downArrow.removeEventListener("click", timeDecrease)};

  return min + ':' + sec;
} 
}

function countDown() {
  if(time === 0) {
    timeCounter.innerHTML = 'Time\'s up!';
  }
  else {
  time = time - 1;
  timeCounter.innerHTML = timeFormat(time);
  }
}

function timeIncrease() {
  time = time + 60;
  setTime.innerHTML = timeFormat(time);
  timeCounter.innerHTML = timeFormat(time);
}

function timeDecrease() {
  if(time === 0 || time - 60 < 0) {downArrow.removeEventListener("click", timeDecrease)}
  else {
  time = time - 60;
  setTime.innerHTML = timeFormat(time);
  timeCounter.innerHTML = timeFormat(time);
  }
}

function resetCountValue() {
  time = 30 * 60;
  clearInterval(repeat);
  setTime.innerHTML = timeFormat(time);
  timeCounter.innerHTML = timeFormat(time);
}

function runCountDown() {
  upArrow.removeEventListener("click", timeIncrease);
  downArrow.removeEventListener("click", timeDecrease);
  play.removeEventListener('click', runCountDown);
  downArrow.classList.add('active');
  repeat = setInterval(countDown, 1000);
}

function pauseCountDown() {
  setTime.innerHTML = timeCounter.innerHTML;
  downArrow.addEventListener('click', timeDecrease);
  upArrow.addEventListener('click', timeIncrease);
  play.addEventListener('click', runCountDown);
  clearInterval(repeat);
}