(function(window, mapster) {

	// map options
	var options = mapster.MAP_OPTIONS,
	element = document.getElementById('map-canvas'),
	// map
	map = mapster.create(element, options);


	var marker2 = map.addMarker({
		lat: 40,
		lng: 104.9903,
		visible: true,
		event: {
			name: 'click',
			callback: function(){
				alert('clicked');
			}
		},
		content: '<div style="color: red;">I like food</div>'
	});


}(window, window.Mapster));