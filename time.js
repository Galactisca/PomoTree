// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

const minute = $('.minute');
const second = $('.second');
const startBtn = $('.start');
const stopBtn = $('.stop');
const startingMinutes = 1;
const startingSeconds = 0;

function startTimer() {
  currentMinute = startingMinutes - 1;
  currentSecond = 59;

  minute.innerHTML = currentMinute;
  second.innerHTML = currentSecond;
  currentSecond < 10 ? second.innerHTML = 0 + currentSecond : currentSecond;

  var minutesInterval = setInterval(updateMinute, 60000);
  window.localStorage.setItem('minutesInterval', minutesInterval);
  var secondsInterval = setInterval(updateSecond, 1000);
  window.localStorage.setItem('secondsInterval', secondsInterval);

  function updateMinute() {
    currentMinute--;
    minute.innerHTML = currentMinute;
  }
  
  function updateSecond() {
    currentSecond--;
    second.innerHTML = currentSecond;
  
    if (currentSecond == 0 && currentMinute == 0) {
      clearInterval(minutesInterval);
      clearInterval(secondsInterval);
  
      minute.innerHTML = startingMinutes;
      second.innerHTML = startingSeconds;
    }
  }

  startBtn.classList.toggle('hidden');
  stopBtn.classList.toggle('hidden');
}

function stopTimer(){
  clearInterval(window.localStorage.getItem('minutesInterval'));
  clearInterval(window.localStorage.getItem('secondsInterval'));
  window.localStorage.clear('minutesInterval');
  window.localStorage.clear('secondsInterval');
  minute.innerHTML = startingMinutes;
  second.innerHTML = startingSeconds;
  startBtn.classList.toggle('hidden');
  stopBtn.classList.toggle('hidden');
}


