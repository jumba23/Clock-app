const displayTime = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let amPm;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (hours <= 12) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }

  if (hours === 00 || hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  }

  let timeDisplay = `${hours}:${minutes}:${seconds} ${amPm}`

  return (document.getElementById("time").textContent = timeDisplay);
};

const displayDate = () => {
  let now = new Date();
  let month = now.getMonth();
  let day = now.getDay();
  let date = now.getDate();
  let year = now.getFullYear();

  const dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sauturday",
  ];
  const monthOfTheYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  dayOfTheWeek.forEach(
    (formatDay = () => {
      return (formatDay = dayOfTheWeek[day]);
    })
  );

  monthOfTheYear.forEach(
    (formatMont = () => {
      return (formatMonth = monthOfTheYear[month]);
    })
  );

  if (date === 01 || date === 21 || date === 31) {
    date = date + "st";
  } else if (date === 02 || date === 22) {
    date = date + "nd";
  } else if (date === 03 || date === 23) {
    date = date + "rd";
  } else {
    date = date + "th";
  }

  let dateDisplay = [`${formatDay}, ${formatMonth} ${date} ${year}`];

  return document.getElementById("date").textContent = dateDisplay;
};

const displayDateTime = () => {
  displayTime();
  displayDate();
};

displayDateTime();
setInterval(displayDateTime, 1000);
