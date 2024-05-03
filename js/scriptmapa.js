let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -36.6174, lng: -64.2928 }, // Coordenadas de Santa Rosa, La Pampa, Argentina
        zoom: 12, // Nivel de zoom
    });

    const input1 = document.getElementById("calle1");
    const autocomplete1 = new google.maps.places.Autocomplete(input1);
    const input2 = document.getElementById("calle2");
    const autocomplete2 = new google.maps.places.Autocomplete(input2);

    function trazarLinea(direccion1, direccion2) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: direccion1 }, function (results1, status1) {
            if (status1 === "OK") {
                const location1 = results1[0].geometry.location;
                geocoder.geocode({ address: direccion2 }, function (results2, status2) {
                    if (status2 === "OK") {
                        const location2 = results2[0].geometry.location;
                        const linea = new google.maps.Polyline({
                            path: [location1, location2],
                            geodesic: true,
                            strokeColor: "#FF0000", // Color de la línea
                            strokeOpacity: 1.0,
                            strokeWeight: 2,
                        });

                        linea.setMap(map);

                        calcularRuta(location1, location2);
                    } else {
                        alert("Geocode was not successful for the following reason: " + status2);
                    }
                });
            } else {
                alert("Geocode was not successful for the following reason: " + status1);
            }
        });
    }

    function calcularRuta(origen, destino) {
        const directionsService = new google.maps.DirectionsService();
        const request = {
            origin: origen,
            destination: destino,
            travelMode: google.maps.TravelMode.DRIVING
        };

        directionsService.route(request, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                const closestPoint = response.routes[0].legs[0].start_location;
                new google.maps.Marker({
                    position: closestPoint,
                    map: map,
                    title: 'Punto más cercano'
                });
            }
        });
    }

    document.getElementById("form").onsubmit = function(event) {
        event.preventDefault();
        const calle1 = input1.value;
        const calle2 = input2.value;
        trazarLinea(calle1 + ", Santa Rosa, La Pampa, Argentina", calle2 + ", Santa Rosa, La Pampa, Argentina");
    };
}