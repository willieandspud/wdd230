document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'afa5c93d41bf8d58051cd7e329e526df';
    const cityId = '3530103';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            const highTempMessage = document.getElementById('high-temp-message');
            
            const { main, description, icon } = data.weather[0];
            const { temp, humidity, temp_max } = data.main;
            const weatherHtml = `
                <p>Current Temperature: ${temp}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Condition: ${main} - ${description} <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${description}"></p>
            `;
            weatherInfo.innerHTML = weatherHtml;
            highTempMessage.innerHTML = `High Temperature Today: ${temp_max}°C <button onclick="this.parentElement.style.display='none'">Close</button>`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
