let inputBox = document.querySelector('.input-box');
let searchBtn = document.querySelector('#searchBtn');
let weather_img = document.querySelector('.wheather-img');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let humidity = document.getElementById("humidity");
let wind_speed = document.getElementById("wind-speed");
let location_not_found = document.querySelector('.location-not-found');
let weather_body = document.querySelector('.weather-body');

function checkWeather(city){
    const api_Key = "98bc2d947c18349eae5986a898d09d0c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}`;
    fetch(`${url}`)
        .then((reponse) => reponse.json())
        .then((data) => {
            if (data.cod === '404') {
                location_not_found.style.display = "flex";
                weather_body.style.display = "none"
                return;  
            } 

                location_not_found.style.display = "none";
                weather_body.style.display = "block";
                
               
            
            
               
        
            temperature.innerText = Math.round(data.main.temp - 273.15) + "°C";
            description.innerText = data.weather[0].description;
            humidity.innerText = data.main.humidity + "%";
            wind_speed.innerText = data.wind.speed + "Km/H";
           
            
            switch (data.weather[0].main) {
                case 'Clouds':
                    weather_img.src = "assets/img/cloud.png";
                    break;
                case 'Clear':
                    weather_img.src = "assets/img/clear.png";
                    break;
                case 'Mist':
                    weather_img.src = "assets/img/mist.png";
                    break;
                case 'Rain':
                    weather_img.src = "assets/img/rain.png";
                    break;
                case 'Snow':
                    weather_img.src = "assets/img/snow.png";
                    break;
                
                

            }
        });
    
    
    

}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})


