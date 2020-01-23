const http = new XMLHttpRequest();

const API_URL = "http://localhost:5000/estudiantes";


//GET DATA IN DATABASE
getData = () => {
    http.open('GET', API_URL);
    http.send();
    http.onload = () => {
        if (http.status === 200) {
            console.log("Success"); // So extract data from json and create table
    
            //Extracting data
            var datos = (http.response);
            var obj = JSON.stringify(datos);
            console.log(datos);
    
            //Showing the table inside table
            //document.getElementById("tests").innerHTML = obj;
    
        }
    };
    var mymap = L.map('mapid').setView([78.306, -0.09], 13);
    var marker = L.marker([78.3, 0.09]).addTo(mymap);
    marker.bindPopup("<b{{item.ubicacion}}</b><br>I am a popup.").openPopup();
    

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmx1ZGVtb25zIiwiYSI6ImNrNXI0Zm03bDAwb2Mza3BsMnpkbzc5MjYifQ.eW2_OF2Dvn50Z0f8Puh1eQ', {
		maxZoom: 18,
		id: 'mapbox/streets-v11'
	}).addTo(mymap);
}

http.onerror = () => {
    console.log("error")
};
