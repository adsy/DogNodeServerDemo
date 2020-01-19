const WEATHER_API = "http://api.openweathermap.org/data/2.5/weather?lat=-27&lon=153&units=metric&APPID=5238b2be2476743ef363b263ae4d2db6";

const weather_promise = fetch(WEATHER_API);
weather_promise.then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
})
    .then(function (processedResponse) {
        var paragraph = document.getElementById("weather");
        var temp = processedResponse.main.feels_like;
        temp = Math.round(temp);
        document.getElementById("weather").textContent += temp+"°";
    });