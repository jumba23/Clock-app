const getTimeDate = () => {
  const now = new Date();
  const hours = displayTwelveHourClock(now.getHours());
  const minutes = addLeadingZero(now.getMinutes());
  const seconds = addLeadingZero(now.getSeconds());
  const isAm = hours < 12 || hours === 0;
  let amPm = isAm ? "AM" : "PM";

  const date = convertToOrdinal(now.getDate());
  const year = now.getFullYear();

  const assignDay = [
    "Sunday",
    "Monday",
    "Tusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sauturday",
  ];
  const assignMonth = [
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

  const month = assignMonth[now.getMonth()];
  const day = assignDay[now.getDay()];

  const timeFormat = `${hours}:${minutes}:${seconds} ${amPm}`;
  const dateFormat = `${day}, ${month} ${date} ${year}`;

  const timeDisplay = (document.getElementById("time").textContent =
    timeFormat);
  const dateDisplay = (document.getElementById("date").textContent =
    dateFormat);

  return {
    dateDisplay,
    timeDisplay,
  };
};

const convertToOrdinal = (number) => {
  if (number < 10 || number > 20) {
    switch (number % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
    return number + 'th'
  }
};

const displayTwelveHourClock = (hours) => {
  hours = hours >= 13 ? hours - 12 : hours;
  hours = hours === 0 ? hours + 12 : hours;
  return hours;
};

const addLeadingZero = (number) => {
  return number < 10 ? "0" + number : number;
};

const ScreenDisplay = () => {
  getTimeDate();
  setInterval(getTimeDate, 1000);
};

ScreenDisplay();
