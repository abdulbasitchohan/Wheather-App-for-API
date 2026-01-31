const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const input = document.querySelector('#input')

async function checkWheather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = "block";
    document.querySelector('.weather').style.display = "none";
  }
  else {
    let data = await response.json()
    document.querySelector('.city').innerHTML = data.location.name;
    document.querySelector('.temp').innerHTML = data.current.temp_c + "℃";
    document.querySelector('.humidity').innerHTML = data.current.wind_kph + "Km/h";
  }
}


checkWheather()