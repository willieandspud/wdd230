document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'afa5c93d41bf8d58051cd7e329e526df';
    const city = 'Rexburg,US'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = document.getElementById('temperature');
            const description = document.getElementById('description');
            const weatherIcon = document.getElementById('weather-icon');

            temperature.textContent = `Temperature: ${data.main.temp}°F`;
            description.textContent = `Conditions: ${data.weather[0].description}`;
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherIcon.alt = `${data.weather[0].description} icon`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
