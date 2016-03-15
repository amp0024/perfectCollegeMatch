(function(window, mapster) {

	// map options
	var options = mapster.MAP_OPTIONS,
	element = document.getElementById('map-canvas'),
	// map
	map = mapster.create(element, options);

	// map._on('click', function(e){
	// 	alert('click');
	// 	console.log(e);
	// 	console.log(this);
	// });
	
	// var marker = map.addMarker({
	// 	lat: 39.7392,
	// 	lng: 104.9903,
	// 	visible: true,
	// 	id: 1,
	// 	content: '<div style="color: red;">I like food</div>'
	// });

	var marker2 = map.addMarker({
		lat: 40,
		lng: 104.9903,
		visible: true,
		id: 2,
		content: '<div style="color: red;">I like food</div>'
	});

	for (var i = 0; i < 40; i++){
		map.addMarker({
			lat: 40 + Math.random(),
			lng: 104.9903 + Math.random(),
			visible: true,
			id: 2,
			content: '<div style="color: red;">I like food</div>'
		});

		var marker = map.addMarker({
			lat: 40 + Math.random(),
			lng: 104.9903 + Math.random(),
			visible: true,
			content: '<div style="color: red;">I like food</div>'
		});
	}
	// var found = map.findby(function(marker){
	// 	return marker.id === 2;
	// });

	map.removeBy(function(marker){
		if (marker.id === 2){
			console.log(marker);
		}
		return marker.id === 2;
	});


	// var marker = new google.maps.Marker({
	// 	position: {
	// 		lat: 39.7392,
	// 		lng: 104.9903
	// 	},
	// 	map: map.gMap
	// });

}(window, window.Mapster));