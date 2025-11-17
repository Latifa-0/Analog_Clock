const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

/**
 * Updates hand positions based on current time.
 */
function setClockHands() {
  const now = new Date();

  const seconds = now.getSeconds();

  const secondsDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();

  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours() % 12;

  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Update every second
setInterval(setClockHands, 1000);

// Execute once
setClockHands();
