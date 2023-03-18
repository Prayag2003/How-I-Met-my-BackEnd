const currentDate = document.getElementById("date");
let weathercon = document.getElementsById("weathercon");
// let weathercon2 = document.getElementById("weathercon2");
// let weathercon3 = document.getElementById("weathercon3");

const tempStatus = "{%tempStatus%}";

if (tempStatus == "Sunny") {
  // only single quotes inside double quotes
  weathercon.innerHTML = "<i class='fas fa-sun' style='color :#ece508'></i>";
} 

// else if (tempStatus == "Rainy") {
//   // only single quotes inside double quotes
//   weathercon2.innerHTML = "<i class='fa-solid fa-raindrops'></i>";
// }

// else if (tempStatus == "Clouds") {
//   // only single quotes inside double quotes
//   weathercon3.innerHTML =
//     "<i class='fa-solid fa-cloud' style='color : #90a1c0'></i>";
// }

const getCurrentDay = () => {
  let weekDays = new Array(7);

  weekDays[0] = "Sun";
  weekDays[1] = "Mon";
  weekDays[2] = "Tues";
  weekDays[3] = "Wed";
  weekDays[4] = "Thur";
  weekDays[5] = "Fri";
  weekDays[6] = "Sat";

  let currentTime = new Date();
  let day = weekDays[currentTime.getDay()];
  return day;
};

const getCurrentTime = () => {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let now = new Date();
  let month = months[now.getMonth()];
  let date = now.getDate();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let timeMeridian = "AM";

  if (hour > 11) {
    timeMeridian = "PM";
    if (hour > 12) {
      hour -= 12;
    }
  }

  if (minute < 10) {
    minute = "0" + minute;
  }
  return `${month} ${date} | ${hour}:${minute} ${timeMeridian} `;
};

currentDate.innerHTML = getCurrentTime() + " | " + getCurrentDay();
