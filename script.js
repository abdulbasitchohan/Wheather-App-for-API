const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const main = document.querySelector('#root')
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const input = document.querySelector('.input')

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
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        main.style.backgroundImage = "url('bg/clouds.jpg')";
        weatherIcon.src = "img/clouds.png";
        break;

      case "Clear":
        weatherIcon.src = "img/clear.png";
        main.style.backgroundImage = "url('bg/clear.jpg')";
        break;

      case "Rain":
        weatherIcon.src = "img/rain.png";
        weatherIcon.src = "img/rain.png";
        break;

      case "Drizzle":
        main.style.backgroundImage = "url('bg/drizzle.jpg')";
        weatherIcon.src = "img/drizzle.png";
        break;

      case "Mist":
        main.style.backgroundImage = "url('bg/mist.jpg')";
        weatherIcon.src = "img/mist.png";
        break;

      default:
        main.style.backgroundImage = "url('bg/default.jpg')";
    }

    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";
  }

}


searchBtn.addEventListener('click', () => {
  checkWheather(input.value);
})


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkWheather(input.value)
  }
})