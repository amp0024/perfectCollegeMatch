var locations = [
    ['Test', '10261 Macedonia St, CO', 'Location 1 URL'],
    ['Location 2 Name', 'Newark, NJ', 'Location 2 URL'],
    ['Location 3 Name', 'Philadelphia, PA', 'Location 3 URL']
];


var styles = [{
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      { visibility: 'on' }  
    ]
  }, {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      { color: '#4a6eff',
        visibility: 'on' }  
    ]
  }, {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      { color: '#c7c7c7',
      	visibility: 'on' }  
    ]
  }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      { color: '#a6a6a6',
      	visibility: 'on' }  
    ]
  }, {
    featureType: 'transit',
    elementType: 'geometry', 
    stylers: [
      { color: '#a6a6a6',
      	visibility: 'on' }  
    ]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      { color: '#404040',
      	visibility: 'on' }  
    ]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      { color: '#ecf0f1',
      	visibility: 'on' }  
    ]
  }];	

var geocoder;
var map;
var bounds = new google.maps.LatLngBounds();

function initialize() {
    map = new google.maps.Map(
    document.getElementById("map_canvas"), {
        center: new google.maps.LatLng(37.4419, -122.1419),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
	    styles: styles
    });
    geocoder = new google.maps.Geocoder();

    for (i = 0; i < locations.length; i++) {


        geocodeAddress(locations, i);
    }
}
google.maps.event.addDomListener(window, "load", initialize);

function geocodeAddress(locations, i) {
    var title = locations[i][0];
    var address = locations[i][1];
    var url = locations[i][2];
    geocoder.geocode({
        'address': locations[i][1]
    },

    function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var marker = new google.maps.Marker({
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
                map: map,
                position: results[0].geometry.location,
                title: title,
                animation: google.maps.Animation.DROP,
                address: address,
                url: url
            });
            infoWindow(marker, map, title, address, url);
            bounds.extend(marker.getPosition());
            map.fitBounds(bounds);
        } else {
            alert("geocode of " + address + " failed:" + status);
        }
    });
}

function infoWindow(marker, map, title, address, url) {
    google.maps.event.addListener(marker, 'click', function () {
        var html = "<div><h3>" + title + "</h3><p>" + address + "<br></div><a href='" + url + "'>View location</a></p></div>";
        iw = new google.maps.InfoWindow({
            content: html,
            maxWidth: 350
        });
        iw.open(map, marker);
    });
}

function createMarker(results) {
    var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
        map: map,
        position: results[0].geometry.location,
        title: title,
        animation: google.maps.Animation.DROP,
        address: address,
        url: url
    });
    bounds.extend(marker.getPosition());
    map.fitBounds(bounds);
    infoWindow(marker, map, title, address, url);
    return marker;
}

