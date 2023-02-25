let locationNameRef = document.getElementById("locationName");
let resultRef = document.getElementById("result");
let search = document.getElementById("search");

search.addEventListener('click', () => {
    let locationName = locationNameRef.value;

    if(locationName.length <= 0) {
        resultRef.innerHTML = '<h3 class="msg">Please enter a location name</h3>';
    }

    else {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a16131e02emsh90421a0343fc974p1cf3b2jsn8d18a237120a',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+locationName, options)
            .then(response => response.json())
            .then(response => {
                try {
                    integrateWeatherToPage(response);
                } catch (err) {
                    resultRef.innerHTML = `<img src="./images/404.png" alt="Not found icon"> \n`
                    + `<h3>There was a problem, please retry with a correct location</h3>`;
                }
            })
            .then(response => console.log(response));
    }
});

function integrateWeatherToPage(response) {
    resultRef.innerHTML = `<img src=${response.current.condition.icon} alt="Weather icon"> \n`
    + `<h2>${response.current.temp_c} °C</h2>\n`

    + `<div class="detailedData">\n`

    + `<div class="dataObject">\n`

    + `<i class="fa-solid fa-wind fa-2x"></i>\n`
    + `<p>${response.current.wind_kph} kph</p>\n`
    + `<p>Wind</p>\n`

    + `</div>\n`

    + `<div class="dataObject">\n`

    + `<i class="fa-sharp fa-solid fa-compass fa-2x"></i>\n`
    + `<p>${response.current.wind_dir}</p>\n`
    + `<p>Wind Direction</p>\n`

    + `</div>\n`

    + `<div class="dataObject">\n`

    + `<i class="fa-solid fa-temperature-three-quarters fa-2x"></i>\n`
    + `<p>${response.current.feelslike_c} °C</p>\n`
    + `<p>Feelslike</p>\n`

    + `</div>\n`

    + `<div class="dataObject">\n`

    + `<i class="fa-solid fa-cloud fa-2x"></i>\n`
    + `<p>${response.current.cloud} %</p>\n`
    + `<p>Cloud cover</p>\n`

    + `</div>\n`

    + `<div class="dataObject">\n`

    + `<i class="fa-solid fa-temperature-three-quarters"></i>\n`
    + `<p>${response.current.feelslike_c} °C</p>\n`
    + `<p>Feelslike</p>\n`

    + `</div>\n`

    + `<div class="dataObject">\n`

    + `<i class="fa-solid fa-temperature-three-quarters"></i>\n`
    + `<p>${response.current.feelslike_c} °C</p>\n`
    + `<p>Feelslike</p>\n`

    + `</div>\n`

    + `</div>`;
}
