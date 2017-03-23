var map;

function initMap(){ 
    var myStreetView = new google.maps.StreetViewPanorama(
        document.getElementById('street'), {
            position: {lat: 33.7513573, lng: -84.3894417},
            pov: {heading: 50, pitch: 15},
            motionTrackingControl: false,
            panControl:true,
            zoomControl:true,
            fullscreenControl: true,
            linksControl: true,
            enableCloseButton: true,
            addressControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_CENTER
            },

        }
    );
    map.setStreetView(myStreetView);
}