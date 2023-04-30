const API_KEY = "404108b160b80837802d21f2f616152f";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
    // console.log("You live in", lat, lon);
    
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

// true면 ok함수 실행, false면 error함수 실행인가봐 
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);