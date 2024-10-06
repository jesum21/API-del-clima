const apiKey = ''; // Copiar la API enviada al correo y pegarla aquí
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            cityElement.textContent = data.name;
            temperatureElement.textContent = `${data.main.temp}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
