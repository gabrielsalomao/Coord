//var pointers;
//var geocoder;
//var map;
//var address = "Av. Eduardo Elias Zahran, 953 - Vila Santa Dorotheia, Campo Grande - MS, 79004-000";
//function initMap() {
//    var map = new google.maps.Map(document.getElementById('map'), {
//        zoom: 12,
//        center: { lat: -20.4888209, lng: -54.6200872 },
//    });

//    var outerCoords = [
//        { lat: -20.419292, lng: -54.667251 },
//        { lat: -20.412089, lng: -54.659816 },
//        { lat: -20.412551, lng: -54.655782 },
//        { lat: -20.394788, lng: -54.622307 },
//        { lat: -20.370956, lng: -54.565413 },
//        { lat: -20.377582, lng: -54.537452 },
//        { lat: -20.382994, lng: -54.541422 },
//        { lat: -20.393717, lng: -54.558202 },
//        { lat: -20.432173, lng: -54.592908 },
//        { lat: -20.437458, lng: -54.617489 },
//        { lat: -20.436849, lng: -54.620845 },
//        { lat: -20.433907, lng: -54.627666 },
//        { lat: -20.436004, lng: -54.628315 },
//        { lat: -20.430830, lng: -54.634919 },
//        { lat: -20.428530, lng: -54.645673 },
//        { lat: -20.420617, lng: -54.660036 },
//    ];

//    geocoder = new google.maps.Geocoder();

//    var uou = new google.maps.Data.Polygon([outerCoords]);
//    map.data.add({ geometry: uou })

//    var regiacasa = new google.maps.Polygon({ paths: outerCoords });

//    geocoder.geocode({ 'address': address }, function (results, status) {
//        if (status === 'OK') {
//            var marker = new google.maps.Marker({
//                map: map,
//                position: results[0].geometry.location
//            });

//            pointers = results[0].access_points[0].location;

//            console.log(pointers);
//            var curPositionB = new google.maps.LatLng(pointers.latitude, pointers.longitude);

//            var resultColor = google.maps.geometry.poly.containsLocation(curPositionB, regiacasa);
//            console.log(resultColor);
//        } else {
//            alert('Geocode was not successful for the following reason: ' + status);
//        }
//    });
//}

function initMap() {
    var conteudoDoCardDasRegioes = document.querySelectorAll('h6')
    var enderecos = [];
    var contadorRegiaoSegredo = 0;
    $.get('/Coordenado/ObterEnderecosDosCoordenados', (data) => {
        if (data) {
            enderecos = data;
            var latLong;
            var geocoder;
            var map;
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 11,
                center: { lat: -20.4888209, lng: -54.6200872 },
            });

            var regiaoSegredoCoords = [
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

  
            
            var regiaoCentroCoords = [
                { lat: -20.433966, lng: -54.627593 },
                { lat: -20.452494, lng: -54.633606 },
                { lat: -20.460681, lng: -54.634039 },
                { lat: -20.462921, lng: -54.635067 },
                { lat: -20.463190, lng: -54.635665 },
                { lat: -20.469463, lng: -54.638750 },
                { lat: -20.482826, lng: -54.615051 },
                { lat: -20.476659, lng: -54.591708 },
                { lat: -20.475610, lng: -54.590802 },
                { lat: -20.473800, lng: -54.588604 },
                { lat: -20.472427, lng: -54.589230 },
                { lat: -20.471004, lng: -54.588671 },
                { lat: -20.467821, lng: -54.590656 },
                { lat: -20.445118, lng: -54.595164 },
                { lat: -20.441842, lng: -54.598548 },
                { lat: -20.438320, lng: -54.598312 },
                { lat: -20.432602, lng: -54.593118 },
                { lat: -20.437494, lng: -54.617658 },
                { lat: -20.433963, lng: -54.627606 },
            ];

            var regiaoProsaCoords = [
                { lat: -20.438585, lng: -54.598540 },
                { lat: -20.393968, lng: -54.558568 },
                { lat: -20.382182, lng: -54.540544 },
                { lat: -20.379004, lng: -54.538312 },
                { lat: -20.379848, lng: -54.535737 },
                { lat: -20.383590, lng: -54.538956 },
                { lat: -20.393083, lng: -54.550500 },
                { lat: -20.417900, lng: -54.541144 },
                { lat: -20.418303, lng: -54.523549 },
                { lat: -20.404547, lng: -54.516254 },
                { lat: -20.404064, lng: -54.508915 },
                { lat: -20.444563, lng: -54.504581 },
                { lat: -20.446252, lng: -54.521918 },
                { lat: -20.468608, lng: -54.510245 },
                { lat: -20.468528, lng: -54.534535 },
                { lat: -20.463060, lng: -54.559426 },
                { lat: -20.467483, lng: -54.578052 },
                { lat: -20.470458, lng: -54.581571 },
                { lat: -20.470900, lng: -54.588652 },
                { lat: -20.467483, lng: -54.590755 },
                { lat: -20.445166, lng: -54.595089 },
                { lat: -20.441507, lng: -54.598694 },
                { lat: -20.438585, lng: -54.598540 },
            ];

            var regiaoBandeiraCoords = [
                { lat: -20.468608, lng: -54.510245 },
                { lat: -20.468528, lng: -54.534535 },
                { lat: -20.463060, lng: -54.559426 },
                { lat: -20.467483, lng: -54.578052 },
                { lat: -20.470458, lng: -54.581571 },
                { lat: -20.470900, lng: -54.588652 },
                { lat: -20.472629, lng: -54.589317 },
                { lat: -20.474277, lng: -54.588716 },
                { lat: -20.476810, lng: -54.592407 },
                { lat: -20.482840, lng: -54.615624 },
                { lat: -20.495584, lng: -54.613307 },
                { lat: -20.502578, lng: -54.605711 },
                { lat: -20.583970, lng: -54.583411 },
                { lat: -20.570069, lng: -54.563756 },
                { lat: -20.554559, lng: -54.555860 },
                { lat: -20.522610, lng: -54.569635 },
                { lat: -20.505206, lng: -54.554615 },
                { lat: -20.504121, lng: -54.555173 },
                { lat: -20.486031, lng: -54.545946 },
                { lat: -20.480524, lng: -54.530067 },
                { lat: -20.468824, lng: -54.511485 },
            ]

            var regiaoAnhanduizinhoCoords = [
                { lat: -20.482840, lng: -54.615624 },
                { lat: -20.495584, lng: -54.613307 },
                { lat: -20.502578, lng: -54.605711 },
                { lat: -20.583970, lng: -54.583411 },
                { lat: -20.581953, lng: -54.591463 },
                { lat: -20.568714, lng: -54.597450 },
                { lat: -20.562205, lng: -54.614273 },
                { lat: -20.562205, lng: -54.614273 },
                { lat: -20.552240, lng: -54.669118 },
                { lat: -20.550713, lng: -54.667316 },
                { lat: -20.489547, lng: -54.648287 },
                { lat: -20.472661, lng: -54.634983 },
                { lat: -20.482840, lng: -54.615624 },
            ]

            var regiaoLagoaCoords = [
                { lat: -20.552240, lng: -54.669118 },
                { lat: -20.550713, lng: -54.667316 },
                { lat: -20.489547, lng: -54.648287 },
                { lat: -20.472661, lng: -54.634983 },
                { lat: -20.482840, lng: -54.615624 },
                { lat: -20.466590, lng: -54.646312 },
                { lat: -20.463615, lng: -54.645926 },
                { lat: -20.463414, lng: -54.651248 },
                { lat: -20.455413, lng: -54.677335 },
                { lat: -20.489846, lng: -54.705957 },
                { lat: -20.506970, lng: -54.726556 },
                { lat: -20.541374, lng: -54.696172 },
                { lat: -20.552240, lng: -54.669118 },
            ]

            var regiaoImbirussuCoords = [
                { lat: -20.466590, lng: -54.646312 },
                { lat: -20.463615, lng: -54.645926 },
                { lat: -20.463414, lng: -54.651248 },
                { lat: -20.455413, lng: -54.677335 },
                { lat: -20.489846, lng: -54.705957 },
                { lat: -20.506970, lng: -54.726556 },
                { lat: -20.476660, lng: - 54.770759 },
            ]

            geocoder = new google.maps.Geocoder();

            var regiaoSegredoPoligonoVisual = new google.maps.Data.Polygon([regiaoSegredoCoords]);
            map.data.add({ geometry: regiaoSegredoPoligonoVisual })

            var regiaoSegredoPoligonoLogico = new google.maps.Polygon({ paths: regiaoSegredoCoords });

            var regiaoCentroPoligonoVisual = new google.maps.Data.Polygon([regiaoCentroCoords]);
            map.data.add({ geometry: regiaoCentroPoligonoVisual })

            var regiaoCentroPoligonoLogico = new google.maps.Polygon({ paths: regiaoCentroCoords });

            var regiaoProsaPoligonoVisual = new google.maps.Data.Polygon([regiaoProsaCoords]);
            map.data.add({ geometry: regiaoProsaPoligonoVisual })

            var regiaoProsaPoligonoLogico = new google.maps.Polygon({ paths: regiaoProsaCoords });

            var regiaoBandeiraPoligonoVisual = new google.maps.Data.Polygon([regiaoBandeiraCoords]);
            map.data.add({ geometry: regiaoBandeiraPoligonoVisual })

            var regiaoBandeiraPoligonoLogico = new google.maps.Polygon({ paths: regiaoBandeiraCoords });

            var regiaoAnhanduizinhoPoligonoVisual = new google.maps.Data.Polygon([regiaoAnhanduizinhoCoords]);
            map.data.add({ geometry: regiaoAnhanduizinhoPoligonoVisual })

            var regiaoAnhanduizinhoPoligonoLogico = new google.maps.Polygon({ paths: regiaoAnhanduizinhoCoords });

            var regiaoImbirussuPoligonoVisual = new google.maps.Data.Polygon([regiaoImbirussuCoords]);
            map.data.add({ geometry: regiaoImbirussuPoligonoVisual })

            var regiaoImbirussuPoligonoLogico = new google.maps.Polygon({ paths: regiaoImbirussuCoords });

            enderecos.forEach(item => {
                console.log(item.endereco)
                geocoder.geocode({ 'address': item.endereco }, function (results, status) {
                    if (status === 'OK') {
                        var marker = new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location
                        });

                        //long
                        var longitude = results[0].geometry.viewport.Ua.i;

                        //lat
                        var latitude = results[0].geometry.viewport.Ya.i;


                        //TO - DO quando o endereco nao é exato a api não retorna a latLong.verificar isso
                        //latLong = results[0].access_points[0].location;

                        console.log(results[0]);

                        var latLongObject = new google.maps.LatLng(latitude, longitude);

                        var ehDaRegiaoSegredo = google.maps.geometry.poly.containsLocation(latLongObject, regiaoSegredoPoligonoLogico);

                        if (ehDaRegiaoSegredo) {
                            contadorRegiaoSegredo += 1;
                            conteudoDoCardDasRegioes[0].innerHTML = `Segredo : ${contadorRegiaoSegredo}`;
                        }

                    } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                    }
                });
            });
        } else {
            alert('Nenhum endereço encontrado');
        }
    });
}
