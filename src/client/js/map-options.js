(function(window, google, mapster) {
  
  mapster.MAP_OPTIONS = {
    center: {
      lat: 39.7392,
      lng: -104.9903
    },
    zoom: 3,
    disableDefaultUI: false,
    scrollwheel: true,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      style: google.maps.ZoomControlStyle.DEFAULT
    },
    panControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    cluster: true,
    geocoder: true
  };
  
}(window, google, window.Mapster || (window.Mapster = {})))