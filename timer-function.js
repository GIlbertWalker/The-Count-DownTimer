let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // reset timer 
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // Stop timer from running into negative
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // displayTimeLeft
    displayTimeLeft(secondsLeft);
  }, 1000);
}