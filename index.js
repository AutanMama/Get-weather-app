const apiKey = "327f1a17b7b473347204ed8e3b95994c";
const weatherInfoElement = document.getElementById("weatherInfo");

function getWeather() {
  const cityInput = document.getElementById("cityInput").value;

  if (cityInput.trim() === "") {
    alert("Please enter a city.");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&
    units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const { name, main, weather } = data;
      const temperature = main.temp;
      const humidity = main.humidity;
      const description = weather[0].description;

      const weatherInfo = `
                <h2>City: ${name}</h2>
                <h2>Temperature: ${temperature}°C</h2>
                <h2>Humidity: ${humidity}%</h2>
                <h2>Description: ${description}</h2>
            `;

      weatherInfoElement.innerHTML = weatherInfo;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again.");
    });
}
