var map;

function initMap(){ 
    var myLatlng = new google.maps.LatLng(40.6892,-74.0445);
    var mapOptions = {
        zoom: 18,
        center: myLatlng,
        styles: [
            {elementType: 'geometry.fill', stylers: [{color: '#121a10'}]},
            {elementType: 'geometry.stroke', stylers: [{color: '#21f03a'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#ffffff'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#df251b'}]},
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#3eb1c9'}]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#f7f916'}]
            },
            {
                featureType: 'landscape',
                elementType: 'geometry.fill',
                stylers: [{color: '#9f641a'}]
            },
            {
                featureType: 'landscape',
                elementType: 'geometry.stroke',
                stylers: [{color: '#ebf637'}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry.fill',
                stylers: [{color: '#0e9f59'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#f1f4f9'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.fill',
                stylers: [{color: '#416fae'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry.stroke',
                stylers: [{color: '#40f907'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry.fill',
                stylers: [{color: '#f2d107'}]
            }
        ]
    };
    map = new google.maps.Map(document.getElementById('map'),mapOptions);
    
    var circle = new google.maps.Circle();
        
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'LADY LIBERTY!'
    });
    
    map.addListener('zoom_changed', function() {
        circle.setOptions ({
            strokeColor: '#e9eb12',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#30f816',
            fillOpacity: 0.35,
            map: map,
            center: myLatlng,
            radius: 100
        });
    });
}

var satButton = document.getElementById('satellite');
var roadButton = document.getElementById('roadmap');
var hybridButton = document.getElementById('hybrid');
var terrainButton = document.getElementById('terrain');

satButton.onclick = function(){
    map.setMapTypeId('satellite');
}

roadButton.onclick = function(){
    map.setMapTypeId('roadmap');
}

hybridButton.onclick = function(){
    map.setMapTypeId('hybrid');
}

terrainButton.onclick = function(){
    map.setMapTypeId('terrain');
}
