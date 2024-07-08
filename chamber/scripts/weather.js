async function fetchWeather() {
    const apiKey = 'afa5c93d41bf8d58051cd7e329e526df';
    const lat = 43.020119;
    const lon = -123.293121;
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(weatherURL);
        const data = await response.json();

        const currentWeather = data.list[0];
        document.getElementById('temperature').textContent = Math.round(currentWeather.main.temp);
        document.getElementById('weather-description').textContent = currentWeather.weather[0].description;

        const forecastElement = document.getElementById('forecast');
        forecastElement.innerHTML = '';

        // Fetch weather data at 24-hour intervals (3*8 = 24 hours)
        for (let i = 0; i < 24; i += 8) {
            const forecastData = data.list[i];
            const forecastItem = document.createElement('li');
            forecastItem.textContent = `Day ${i / 8 + 1}: ${Math.round(forecastData.main.temp)} °F`;
            forecastElement.appendChild(forecastItem);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

fetchWeather();
