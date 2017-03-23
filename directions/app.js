var directionsService, directionsDisplay;

function initMap() {
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 38.9072, lng: -77.0369}
    });
    directionsDisplay.setMap(map);
    
    var search = document.getElementById('search');
    search.onclick = findRoute;


}

function findRoute() {
    directionsService.route({
        origin: document.getElementById('start').value,
        destination: document.getElementById('end').value,
        travelMode: 'TRANSIT',
        transitOptions: {
            modes: ['RAIL']        
        }
    }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
    });
}