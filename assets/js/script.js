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
const displayBackgroudImage = (obj) => {
    //Extraer la hora del objeto que contine datos del tiempo
    let dateSpanish = new Date(obj.dt*1000).toLocaleString("es-LA",{
        timeStyle: "short",
        dateStyle: "long"
    });
    console.log(dateSpanish);
    //convertirlo a una hora entendible para el usuario
    //Manipular e DOM para la fecha
    date.textContent = `Actualizacion ${dateSpanish}`;
    //Extraer la hora
    const dayHour = new Date(obj.dt*1000).getHours();
    console.log(dayHour);
    //logica if else
    if(dayHour > 6 && dayHour < 18){
        container.classList.remove('night');
        container.classList.add('day');
    } else {
        container.classList.remove('day');
        container.classList.add('night');
    }
}

const displayData = (obj) => {
    console.log(obj);
    /* temperatureDegrees.textContent =  */

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
    const data = await res.json();
    //fetch para el endpoint
    //CAmbiar el fondo de pantalla
    displayBackgroudImage(data);
    //Mostrar los datos en pantalla
    displayData(data);
}

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    getWeatherData(searchInput.value)
})

//Al cargar la pag nos carge una ciudad
window.onload = () => {
    getWeatherData("Boston");
}

