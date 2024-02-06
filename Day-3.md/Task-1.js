let XMLHttpRequest = require ('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://restcountries.com/v3.1/all');
xhr.send(); 
xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    for (i=0; i<=countries.length; i++){
    console.log(countries[i].flag);
    }
}