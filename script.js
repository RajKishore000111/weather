document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value.trim(); // Get city name
    if (!city) {
      alert('Please enter a city name!');
      return;
    }
  
    const apiKey = 'ea79003c226345f7883161331243011'; // Replace with your WeatherAPI key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      document.getElementById('weatherResult').innerHTML = `
        <p><strong>${data.location.name}, ${data.location.country}</strong></p>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_kph} kph</p>
        <p>Last Updated: ${data.current.last_updated}</p>
      `;
    } catch (error) {
      console.error(error); // Log errors
      document.getElementById('weatherResult').innerHTML = `
        <p style="color: red;">${error.message}</p>
      `;
    }
  });
  