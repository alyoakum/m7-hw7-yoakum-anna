var mainSection = document.getElementById('main-body');
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);
console.log( apiResult);

        //API Code
        var sectionOne = document.getElementById('header');
        var addName = document.createElement('h3');
        sectionOne.appendChild(addName);
        var text= document.createTextNode(apiResult.name);
        addName.appendChild(text);

        var sectionTwo = document.getElementById('main');
        var addWeather = document.createElement('h3');
        sectionTwo.appendChild(addWeather);
        var text1= document.createTextNode(apiResult.weather[0].description);
        addWeather.appendChild(text1);

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=39208,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
