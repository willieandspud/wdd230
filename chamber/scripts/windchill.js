document.addEventListener('DOMContentLoaded', function() {
    const temperatureElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('windSpeed');
    const windChillElement = document.getElementById('windChill');

    const temperature = parseFloat(temperatureElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);

    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = windChill.toFixed(2) + ' °F';
    } else {
        windChillElement.textContent = 'N/A';
    }

    function calculateWindChill(temp, speed) {
        return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    }
});
