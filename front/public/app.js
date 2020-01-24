class Display {
    getData = () => {
        const http = new XMLHttpRequest();
        const API_URL = "http://localhost:5000/estudiantes";

        http.open('GET', API_URL);
        http.send();
        http.onload = () => {
            if (http.status === 200) {    
                const datos = JSON.parse(http.response);
                console.log(datos);
                const quito = [ -0.178810, -78.468893]
                const mymap = L.map('mapid', { zoom: 12, center: quito });
                
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);
            
                datos.forEach( item => {
                    item.estudiante = L.marker([ item.longitud, item.latitud ]).bindPopup( item.descripcion );
                    const ubicaciones = L.layerGroup([ item.estudiante]).addTo(mymap);
                })
                return datos;            
            }
        }
    }
}

const mostrar = new Display();

getData = () => {
    return mostrar.getData();
}
