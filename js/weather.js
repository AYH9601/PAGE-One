function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude
    const API = "313d868ff36db4b35da0d3345b7359dc"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-of-type(2)");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        temp.innerText = data.main.temp;
        weather.innerText = `${data.weather[0].main}`;
    });
}

function onGeoError(){
    alert("Location Error! I think You are Inversioned");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);