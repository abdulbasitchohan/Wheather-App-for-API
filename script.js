const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const main = document.querySelector('#root')
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
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "℃";
    document.querySelector('.humidity').innerHTML = data.wind.speed + "Km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        main.url = ""
        weatherIcon.src = "img/clouds.png";
        break;

      case "Clear":
        main.src = "background-img/clear.jpg"
        weatherIcon.src = "img/clear.png";
        break;

      case "Rain":
        main.src = "background-img/rain.jpg"
        weatherIcon.src = "img/rain.png";
        break;

      case "Drizzle":
        weatherIcon.src = "img/drizzle.png";
        break;

      case "Mist":
        weatherIcon.src = "img/mist.png";
        break;

      // default:
      // weatherIcon.src = "img/default.png"; 
    }

    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";
  }

}


searchBtn.addEventListener('click', ()=>{
  checkWheather(input.value);
})


input.addEventListener("keydown", (e)=>{
  if (e.key === "Enter") {
    checkWheather(input.value)
  }
})