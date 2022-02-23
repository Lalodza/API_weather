//API  - Open Weather Map

//Capturar los elementos del DOM

let container = document.querySelector("#container");
let searchForm = document.querySelector("#search__submit");
let searchInput = document.querySelector("#search__input");
let temperatureDegrees = document.querySelector("#degreeNumber");
let weatherIcon = document.querySelector("#weatherIcon");
let temperatureDescription = document.querySelector("#description");
let timeZone = document.querySelector("#timeZone");
let date = document.querySelector("#date");
let min = document.querySelector("#min");
let max = document.querySelector("#max");

//Funciones Secundarias
const displayBackgroudImage = (data) => {
    
}

const displayData = (data) => {

}


//Declarar getWeatherData
const getWeatherData = async (city) => {
    //Hacer request a la API
    const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}%2Cuk&units=metric&lang=sp`, {
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "ddddfb1564msh7d3541e37649c97p17ece3jsnf856d254c62a"
        }
    });
    const data = res.json();
    //fetch para el endpoint
    //CAmbiar el fondo de pantalla
    /* displayBackgroudImage(data); */
    //Mostrar los datos en pantalla
    /* displayData(data); */
}

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    getWeatherData(searchInput.value)
})

//Al cargar la pag nos carge una ciudad
window.onload = () => {
    getWeatherData("London");
}

