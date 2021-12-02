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
  var secondsInterval = setInterval(updateSecond, 1000);

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

function stopTimer(minutesInterval, secondsInterval){
  clearInterval(minutesInterval);
  clearInterval(secondsInterval);
  minute.innerHTML = startingMinutes;
  second.innerHTML = startingSeconds;
  startBtn.classList.toggle('hidden');
  stopBtn.classList.toggle('hidden');
}


