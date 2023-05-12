function wallclock() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes() + seconds / 60;
  const hour = date.getHours() - 12;

  const secAng = seconds * 6;
  const minAng = minutes * 6;
  const hourAng = hour * 30;

  const secondHand = document.getElementById("seconds");
  const minuteHand = document.getElementById("minutes");
  const hourHand = document.getElementById("hours");

  secondHand.setAttribute("transform", `rotate(${secAng}, 244, 251)`);
  minuteHand.setAttribute("transform", `rotate(${minAng}, 244, 251)`);
  hourHand.setAttribute("transform", `rotate(${hourAng}, 244, 251)`);
}
setInterval(wallclock, 1000);
