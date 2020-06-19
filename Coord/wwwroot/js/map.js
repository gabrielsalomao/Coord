var tituloModal = document.getElementById("exampleModalLabel");
var listaCorpoElement = document.getElementById('listaCorpo');

function initMap() {
    var enderecos = [];
    var codigoDosCoordSegredo = [];
    var codigoDosCoordProsa = [];
    var codigoDosCoordBandeira = [];
    var codigoDosCoordImbirussu = [];
    var codigoDosCoordAnhanduizinho = [];
    var codigoDosCoordCentro = [];
    var codigoDosCoordLagoa = [];

    $.get('/Coordenado/ObterEnderecosDosCoordenados', (data) => {
        if (data) {
            enderecos = data;

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 11,
                center: { lat: -20.4888209, lng: -54.6200872 },
            });

            var geocoder = new google.maps.Geocoder();

            map.data.setStyle(function (feature) {
                var color = 'gray';
                if (feature.getProperty('isColorful')) {
                    color = feature.getProperty('color');
                }
                return /** @type {!google.maps.Data.StyleOptions} */({
                    fillColor: color,
                    strokeColor: color,
                    strokeWeight: 0
                });
            });

            map.data.addListener('click', function (event) {
                var regiao = event.feature.getProperty('NOME');

                var codigosDaRegiao = null;

                switch (regiao) {
                    case "SEGREDO":
                        codigosDaRegiao = codigoDosCoordSegredo;
                        break;
                    case "CENTRO":
                        codigosDaRegiao = codigoDosCoordCentro;
                        break;
                    case "PROSA":
                        codigosDaRegiao = codigoDosCoordProsa;
                        break;
                    case "IMBIRUSSU":
                        codigosDaRegiao = codigoDosCoordImbirussu;
                        break;
                    case "ANHANDUIZINHO":
                        codigosDaRegiao = codigoDosCoordAnhanduizinho;
                        break;
                    case "BANDEIRA":
                        codigosDaRegiao = codigoDosCoordBandeira;
                        break;
                    case "LAGOA":
                        codigosDaRegiao = codigoDosCoordLagoa;
                        break;
                }

                $('#exampleModalLabel').html('Segredo');

                $("#exampleModal").modal();

                obterCoodenadosPorRegiao(codigosDaRegiao);

                tituloModal.innerHTML = `Coordenados - ${regiao}`;
            });

            map.data.addListener('mouseover', function (event) {
                map.data.revertStyle();
                map.data.overrideStyle(event.feature, { strokeWeight: 5 });
            });

            map.data.loadGeoJson(
                'js/coordinatesInfo.json');

            $.getJSON("js/coordinatesInfo.json", function (json) {
                var vetorCoordCentro = [];
                var vetorCoordSegredo = [];
                var vetorCoordProsa = [];
                var vetorCoordBandeira = [];
                var vetorCoordAnhanduizinho = [];
                var vetorCoordLagoa = [];
                var vetorCoordImbirussu = [];

                for (var i = 0; i < json.features.length; i++) {
                    json.features[i].geometry.coordinates[0][0].map(item => {
                        var novaCoord = {
                            lat: item[1],
                            lng: item[0]
                        }

                        switch (json.features[i].properties.NOME) {
                            case "CENTRO":
                                vetorCoordCentro.push(novaCoord);
                                break;
                            case "SEGREDO":
                                vetorCoordSegredo.push(novaCoord);
                                break;
                            case "PROSA":
                                vetorCoordProsa.push(novaCoord);
                                break;
                            case "BANDEIRA":
                                vetorCoordBandeira.push(novaCoord);
                                break;
                            case "ANHANDUIZINHO":
                                vetorCoordAnhanduizinho.push(novaCoord);
                                break;
                            case "LAGOA":
                                vetorCoordLagoa.push(novaCoord);
                                break;
                            case "IMBIRUSSU":
                                vetorCoordImbirussu.push(novaCoord);
                                break;
                        }
                    });
                }

                var regiaoSegredoPoligonoLogico = new google.maps.Polygon({ paths: vetorCoordSegredo });
                var regiaoLagoaPoligonoLogico = new google.maps.Polygon({ paths: vetorCoordLagoa });
                var regiaoProsaPoligonoLogico = new google.maps.Polygon({ paths: vetorCoordProsa });
                var regiaoImbirussuPoligonoLogico = new google.maps.Polygon({ paths: vetorCoordImbirussu });
                var regiaoCentroPoligonoLogico = new google.maps.Polygon({ paths: vetorCoordCentro });
                var regiaoAnhanduizinhoPoligonoLogico = new google.maps.Polygon({ paths: vetorCoordAnhanduizinho });
                var regiaoBandeiraPoligonoLogico = new google.maps.Polygon({ paths: vetorCoordBandeira });

                var count = 0;
                var timer;

                timedCount();

                function timedCount() {
                    if (count == enderecos.length)
                        stopCount();

                    var item = enderecos[count];
                    geocoder.geocode({ 'address': item.endereco }, function (results, status) {
                        if (status === 'OK') {
                            var marker = new google.maps.Marker({
                                map: map,
                                position: results[0].geometry.location
                            });

                            //long
                            var longitude = results[0].geometry.viewport.Ua.j;

                            //lat
                            var latitude = results[0].geometry.viewport.Ya.j;

                            var latLongObject = new google.maps.LatLng(latitude, longitude);

                            var ehDaRegiaoSegredo = google.maps.geometry.poly.containsLocation(latLongObject, regiaoSegredoPoligonoLogico);
                            var ehDaRegiaoCentro = google.maps.geometry.poly.containsLocation(latLongObject, regiaoCentroPoligonoLogico);
                            var ehDaRegiaoLagoa = google.maps.geometry.poly.containsLocation(latLongObject, regiaoLagoaPoligonoLogico);
                            var ehDaRegiaoProsa = google.maps.geometry.poly.containsLocation(latLongObject, regiaoProsaPoligonoLogico);
                            var ehDaRegiaoImbirussu = google.maps.geometry.poly.containsLocation(latLongObject, regiaoImbirussuPoligonoLogico);
                            var ehDaRegiaoAnhanduizinho = google.maps.geometry.poly.containsLocation(latLongObject, regiaoAnhanduizinhoPoligonoLogico);
                            var ehDaRegiaoBandeira = google.maps.geometry.poly.containsLocation(latLongObject, regiaoBandeiraPoligonoLogico);

                            if (ehDaRegiaoSegredo) {
                                codigoDosCoordSegredo.push(item.codigo);
                            } else if (ehDaRegiaoImbirussu) {
                                codigoDosCoordImbirussu.push(item.codigo);
                            } else if (ehDaRegiaoBandeira) {
                                codigoDosCoordBandeira.push(item.codigo);
                            } else if (ehDaRegiaoCentro) {
                                codigoDosCoordCentro.push(item.codigo);
                            } else if (ehDaRegiaoLagoa) {
                                codigoDosCoordLagoa.push(item.codigo);
                            } else if (ehDaRegiaoProsa) {
                                codigoDosCoordProsa.push(item.codigo);
                            } else if (ehDaRegiaoAnhanduizinho) {
                                codigoDosCoordAnhanduizinho.push(item.codigo);
                            }
                        }
                        else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                            alert()
                        }
                        else {
                            alert('Geocode was not successful for the following reason: ' + status);
                        }
                    });

                    count++;

                    timer = setTimeout(function () {
                        timedCount()
                    }, 100);
                }
            });

        } else {
            alert('Nenhum endere�o encontrado');
        }
    });
}

function obterCoodenadosPorRegiao(arrayComCodigos) {
    $.post('/Coordenado/ObterCoordenadosPorCodigo',
        data = { codigos: arrayComCodigos.join(',') }, (data) => {
            montarTabelaDosCoordenados(data);
        });
}

function montarTabelaDosCoordenados(listaCoordenados) {

    var bodyElement = "";

    for (var i of listaCoordenados) {
        bodyElement += ` <li class="list-group-item d-flex justify-content-between align-items-center">
            <strong>${i.nome}</strong> ${i.telefone}
         <span class="badge badge-primary badge-pill">14</span> <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
        </li>`
    }

    listaCorpoElement.innerHTML = bodyElement;
};