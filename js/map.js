let map;
function initMap() {
	//location option
	const options = {
		center: { lat: 51.509572, lng: -0.234223 },
		zoom: 19,
		disableDefaultUI: true,
		allowZoomOnScroll: false,
	};
	//marker to shop location
	const marker = {
		location: { lat: 51.509571, lng: -0.234223 },
		content: "<h2 class=\"map-info-windows-header\">Address</h2><p class=\"map-info-windows-text\">Head office in London - 36 Regent St.</p>",
		imageIcon: "https://img.icons8.com/nolan/1x/marker.png",
	};

	//new map
	const map = new google.maps.Map(document.getElementById("map"), options);

	//marker events
	function addMarker(property) {
		const marker = new google.maps.Marker({
			position: property.location,
			icon: property.imageIcon,
			map: map,
		});
		
		const coordInfoWindow = new google.maps.InfoWindow({
			content: property.content,
		});

		marker.addListener("mouseover", () => {
			coordInfoWindow.open(map, marker);
			console.log("clicked marker");
		});
	}

	addMarker(marker);
}



// try to appendChild to map container with JS
//  <div class="w-grid__item w-grid__item--top">
//                 <div class="w-grid__item-inner w-grid__item-panel w-text-center w-panel w-5352774c0eefcf4615cc1d8bc8a3f435 background_3lr background w-state-has-background">
//                     <div class="background-wrapper_RZ2" aria-hidden="true" data-background--hide="false" data-component="background" data-type="color" data-data-loaded="true">
//                         <div class="background_2xT" style="background:#fff" data-role="placeholder"></div>
//                     </div>
//                     <p class="text_1k0 ui-small w-small" data-component="text"><span class="w-text-block" style="display: block;"><span class="w-text-content"><span class="text-ui-brand-color"
//                                     style="color: var(--ui-brand-color);">Contact Us</span></span></span></p>
//                     <h2 class="text_1k0 ui-blockTitle w-title" data-component="text"><span class="w-text-block" style="display: block;"><span class="w-text-content">Contacts.</span></span></h2>
//                     <div class="w-picture-wrapper media-wrapper_3VN">
//                         <picture class="w-picture ui-picture_2i5" style="padding-top:12.8%" data-component="picture"
//                             data-fallbackurl="//res2.weblium.site/res/5fb4fa60d6615a0022f13eb1/5fc64f7b076b31002151536f" data-imagetype="svg"
//                             data-svg="{&quot;width&quot;:85,&quot;height&quot;:25,&quot;x&quot;:&quot;x=\&quot;31px\&quot;&quot;,&quot;y&quot;:&quot;y=\&quot;9px\&quot;&quot;,&quot;extentWidth&quot;:147,&quot;extentHeight&quot;:43}"
//                             data-was-processed="true" data-loaded="true"><img alt="Illustration"
//                                 data-fallback-url="data:image/svg+xml,%3Csvg width='1000' height='1000' viewBox='0 0 1000 1000' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"
//                                 class="w-picture__image ui-image_3aJ" style="object-fit:contain;object-position:50% 50%;font-family:object-fit: contain;50% 50%"
//                                 src="data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='147' height='43' %3E%3Cimage x='31px' y='9px' xlink:href='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCA4NSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTczLjU5OCAxMy4xODdIODMuNTQ5Qzg0LjEwMSAxMy4xODcgODQuNTQ5IDEyLjczOSA4NC41NDkgMTIuMTg2Qzg0LjU0OSAxMS42MzMgODQuMTAxIDExLjE4NiA4My41NDkgMTEuMTg2SDczLjU5OEw3OC4zMjEgNi40NjJDNzguNzEyIDYuMDcxIDc4LjcxMiA1LjQzOSA3OC4zMjEgNS4wNDhDNzcuOTMgNC42NTcgNzcuMjk4IDQuNjU3IDc2LjkwNyA1LjA0OEw3MC43NyAxMS4xODZINjYuNzA4TDc2LjA4NyAxLjgwNkM3Ni40NzggMS40MTUgNzYuNDc4IDAuNzgzMDA1IDc2LjA4NyAwLjM5MjAwNUM3NS42OTYgMC4wMDEwMDQ4NyA3NS4wNjQgMC4wMDEwMDQ4NyA3NC42NzMgMC4zOTIwMDVMNjMuODggMTEuMTg2SDQ0LjY4OEwyMC42NjkgMTEuMTg3TDkuODc2IDAuMzkzMDA0QzkuNDg1IDAuMDAyMDA0MzMgOC44NTMgMC4wMDIwMDQzMyA4LjQ2MiAwLjM5MzAwNEM4LjA3MSAwLjc4NDAwNCA4LjA3MSAxLjQxNiA4LjQ2MiAxLjgwN0wxNy44NDEgMTEuMTg3SDEzLjc3OUw3LjY0MiA1LjA0OUM3LjI1MSA0LjY1OCA2LjYxOSA0LjY1OCA2LjIyOCA1LjA0OUM1LjgzNyA1LjQ0IDUuODM3IDYuMDcyIDYuMjI4IDYuNDYzTDEwLjk1MSAxMS4xODdIMUMwLjQ0OCAxMS4xODcgMCAxMS42MzQgMCAxMi4xODdDMCAxMi43NCAwLjQ0OCAxMy4xODcgMSAxMy4xODdIMTAuOTUxTDYuMjI4IDE3LjkxQzUuODM3IDE4LjMwMSA1LjgzNyAxOC45MzMgNi4yMjggMTkuMzI0QzYuNDIzIDE5LjUxOSA2LjY3OSAxOS42MTcgNi45MzUgMTkuNjE3QzcuMTkxIDE5LjYxNyA3LjQ0NyAxOS41MTkgNy42NDIgMTkuMzI0TDEzLjc3OSAxMy4xODdIMTcuODRMOC40NjEgMjIuNTY2QzguMDcgMjIuOTU3IDguMDcgMjMuNTg5IDguNDYxIDIzLjk4QzguNjU2IDI0LjE3NSA4LjkxMiAyNC4yNzMgOS4xNjggMjQuMjczQzkuNDI0IDI0LjI3MyA5LjY4IDI0LjE3NSA5Ljg3NSAyMy45OEwyMC42NjkgMTMuMTg3SDQ0LjY4OUg2My44OEw3NC42NzMgMjMuOThDNzQuODY4IDI0LjE3NSA3NS4xMjQgMjQuMjczIDc1LjM4IDI0LjI3M0M3NS42MzYgMjQuMjczIDc1Ljg5MiAyNC4xNzUgNzYuMDg3IDIzLjk4Qzc2LjQ3OCAyMy41ODkgNzYuNDc4IDIyLjk1NyA3Ni4wODcgMjIuNTY2TDY2LjcwOCAxMy4xODdINzAuNzdMNzYuOTA3IDE5LjMyNEM3Ny4xMDIgMTkuNTE5IDc3LjM1OCAxOS42MTcgNzcuNjE0IDE5LjYxN0M3Ny44NyAxOS42MTcgNzguMTI2IDE5LjUxOSA3OC4zMjEgMTkuMzI0Qzc4LjcxMiAxOC45MzMgNzguNzEyIDE4LjMwMSA3OC4zMjEgMTcuOTFMNzMuNTk4IDEzLjE4N1oiIGZpbGw9IiNCQjI1MjgiLz4KPC9zdmc+Cg==' height='25' width='85' preserveAspectRatio='xMinYMin meet'/%3E%3C/svg%3E">
//                         </picture>
//                     </div>
//                     <p class="text_1k0 ui-text w-body" data-component="text"><span class="w-text-block" style="display: block;"><span class="w-text-content"><span class="text-ui-dark-accent-color"
//                                     style="color: var(--ui-dark-accent-color);">36 Regent st., London, Great&nbsp;Britain</span></span></span></p>
//                     <p class="text_1k0 ui-text w-body" data-component="text"><span class="w-text-block" style="display: block;"><span class="w-text-content"><a href="tel:+12345678900"
//                                     data-action="phone" class="ui-link"><span class="text-ui-dark-accent-color" style="color: var(--ui-dark-accent-color);">+1 (234) 567 89 00</span></a></span></span>
//                     </p>
//                     <p class="text_1k0 ui-text w-body" data-component="text" data-replace="true"><span class="w-text-block" style="display: block;"><span class="w-text-content"><a
//                                     href="mailto:christmasdecor@email.com" data-action="email" class="ui-link"><span class="text-ui-dark-accent-color"
//                                         style="color: var(--ui-dark-accent-color);">christmasdecor@email.com</span></a></span></span></p>
//                 </div>
//             </div>