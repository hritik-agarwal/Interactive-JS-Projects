const secondHand = document.querySelector('.secHand');
const minsHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');

setInterval(changeTime, 1000);

function changeTime(){

  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 270;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 270;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 270;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}