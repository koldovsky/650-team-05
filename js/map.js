let map;

function initMap() {
	//map option
	let options = {
		center: { lat: 51.509572, lng: -0.234223 },
		zoom: 19,
		activeMarker: "2aceeb6f-623c-41f8-b0d3-6f0f085e8e48",
		disableDefaultUI: true,
		allowZoomOnScroll: false,
	};
	//new map
	map = new google.maps.Map(document.getElementById("map"), options);
}

// info about map from weblium
// let obj = {
// 	className: "map__1YTJZ",
// 	value: {
// 		preset: "silver",
// 		height: "100%",
// 		center: { lat: 51.509572, lng: -0.234223 },
// 		zoom: 19,
// 		activeMarker: "2aceeb6f-623c-41f8-b0d3-6f0f085e8e48",
// 		disableDefaultUI: true,
// 		allowZoomOnScroll: false,
// 		markers: [
// 			{
// 				position: { lat: 51.509572, lng: -0.134223 },
// 				name: "Address",
// 				description: "This is marker description",
// 				address: "Head office in London - 36 Regent St.",
// 				id: "2aceeb6f-623c-41f8-b0d3-6f0f085e8e48",
// 			},
// 		],
// 		apiKey: "AIzaSyBrp8atDpxn3Hsf7jytunkbDimAZyGmjno",
// 	},
// 	offset: {},
// 	blockId: "61811765e7a5980022125f8c",
// };
