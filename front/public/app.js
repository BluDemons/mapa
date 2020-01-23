const http = new XMLHttpRequest();

const API_URL = "http://localhost:5000/api/books";


//GET DATA IN DATABASE
getData = () => {
    http.open('GET', API_URL + "?tabla=tests")

    http.responseType = 'json'

    http.onload = () => {
        var datos = (http.response).datos[0].tests.nombre;
        console.log(datos);
        document.getElementById('tests').innerHTML = datos;
    }

    http.send()
}

const request = new XMLHttpRequest();

request.open('GET', 'http://localhost:5000/api/books');
request.send();

request.onload = () => {
    if (request.status === 200) {
        console.log("Success"); // So extract data from json and create table

        //Extracting data
        var obj = JSON.parse(request.response).tests;

        //Showing the table inside table
        document.getElementById("tests").innerHTML = table;

    }
};

request.onerror = () => {
    console.log("error")
};