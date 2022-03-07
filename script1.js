const getTimeDate = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let amPm;

  let month = now.getMonth();
  let day = now.getDay();
  let date = now.getDate();
  let year = now.getFullYear();

  let timeReady = formatTimeNow(hours, minutes, seconds, amPm);
  let dateReady = formatDateNow(month, day, date,year);
  
  let timeDisplay = (document.getElementById("time").textContent = timeReady);
  let dateDisplay = (document.getElementById("date").textContent = dateReady);

  return {
    dateDisplay,
    timeDisplay,
  };
};

const formatTimeNow = (hours, minutes, seconds, amPm) => {
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (hours < 12) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }

  if (hours === 00 || hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  }

  let timeFormat = `${hours}:${minutes}:${seconds} ${amPm}`;

  return timeFormat;
};

const formatDateNow = (month, day, date,year) => {

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
    (assignDay = () => {
      return (assignDay = dayOfTheWeek[day]);
    })
  );

  monthOfTheYear.forEach(
    (assignMonth = () => {
      return (assignMonth = monthOfTheYear[month]);
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

  let dateFormat = `${assignDay}, ${assignMonth} ${date} ${year}`;

  return dateFormat;
}

const ScreenDisplay = () => {
  getTimeDate();
  setInterval(getTimeDate, 1000);
};

ScreenDisplay();
