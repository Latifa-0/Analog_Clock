const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

/**
 * Updates hand positions based on current time.
 */
function setClockHands() {
  const now = new Date();

  // Get current seconds
  const seconds = now.getSeconds();
  // Calculate degrees for seconds hand
  const secondsDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // Get current minutes
  const minutes = now.getMinutes();
  // Calculate degrees for minutes hand
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  // Get current hours
  const hours = now.getHours() % 12;
  // Calculate degrees for hours hand
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Update every second
setInterval(setClockHands, 1000);

// Execute once
setClockHands();
