var pointers;
var geocoder;
var map;
var address = "79013-827";
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: -20.4888209, lng: -54.6200872 },
    });

    var outerCoords = [
        { lat: -20.419292, lng: -54.667251 },
        { lat: -20.412089, lng: -54.659816 },
        { lat: -20.412551, lng: -54.655782 },
        { lat: -20.394788, lng: -54.622307 },
        { lat: -20.370956, lng: -54.565413 },
        { lat: -20.377582, lng: -54.537452 },
        { lat: -20.382994, lng: -54.541422 },
        { lat: -20.393717, lng: -54.558202 },
        { lat: -20.432173, lng: -54.592908 },
        { lat: -20.437458, lng: -54.617489 },
        { lat: -20.436849, lng: -54.620845 },
        { lat: -20.433907, lng: -54.627666 },
        { lat: -20.436004, lng: -54.628315 },
        { lat: -20.430830, lng: -54.634919 },
        { lat: -20.428530, lng: -54.645673 },
        { lat: -20.420617, lng: -54.660036 },
    ];


    geocoder = new google.maps.Geocoder();

    var uou = new google.maps.Data.Polygon([outerCoords]);
    map.data.add({ geometry: uou })

    var regiacasa = new google.maps.Polygon({ paths: outerCoords });

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });

            pointers = results[0].access_points[0].location;
            var lat = pointers.lat;
            var long = pointers.long // console.log(pointers.lat);


            console.log(pointers);
            var curPositionB = new google.maps.LatLng(pointers.latitude, pointers.longitude);

            var resultColor = google.maps.geometry.poly.containsLocation(curPositionB, regiacasa);
            console.log(resultColor);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

