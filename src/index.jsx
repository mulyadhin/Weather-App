function updateSearch(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#newCity");
  let updatedCity = currentCity.value;

  let heading = document.querySelector("h1");
  heading.innerHTML = `${currentCity.value}`;

  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${day} ${hours}:${minutes}`;

  let apiKey = `9b523c80eead3e092o98fa4bbt7a0e84`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${updatedCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function updateWeather(response) {
  let currentDay = now.getDay();

  let temperature = Math.round(response.data.daily[currentDay].temperature.day);
  let updateTemperature = document.querySelector("#currentTemperature");
  updateTemperature.innerHTML = `${temperature}`;

  let humidity = response.data.daily[currentDay].temperature.humidity;
  let updateHumidity = document.querySelector("#humidity");
  updateHumidity.innerHTML = `${humidity}%`;

  let wind = response.data.daily[currentDay].wind.speed;
  let updateWind = document.querySelector("#wind");
  updateWind.innerHTML = `${wind}m/s`;
}

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let searchCity = document.querySelector("#submit-button");
searchCity.addEventListener("click", updateSearch);
