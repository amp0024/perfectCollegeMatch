(function(window, google, mapster) {
  
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

  mapster.MAP_OPTIONS = {
    center: {
      lat: 39.7392,
      lng: -104.9903
    },
    zoom: 8,
    disableDefaultUI: false,
    scrollwheel: false,
    draggable: true,
    maxZoom: 13,
    minZoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      style: google.maps.ZoomControlStyle.DEFAULT
    },
    panControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    cluster: true,
    geocoder: true,
    styles: styles
  };
  
}(window, google, window.Mapster || (window.Mapster = {})))