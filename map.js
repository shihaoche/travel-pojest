function initMap() {

  const uluru = { lat: 25.0501101, lng: 121.5255337  }; 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12, 
    center: uluru,
        streetViewControl: false, 
        mapTypeControl: false
  });
  const marker = new google.maps.Marker({
    position: uluru, 
    map: map 
  });

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        const marker = new google.maps.Marker({
            position: pos,
            map: map
        });
        map.setZoom(17);
        map.setCenter(pos);
    });
} else {
    alert("未允許或遭遇錯誤！");
}

  const input = document.getElementById('pac-input');
  const searchBox = new google.maps.places.SearchBox(input);

  map.addListener('bounds_changed', function () {
      searchBox.setBounds(map.getBounds());
  });

  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();
  
    if (places.length == 0) {
      return;
    }

    let markers = [];
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
  
    const bounds = new google.maps.LatLngBounds();
  
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      markers.push(
        new google.maps.Marker({
          map,
          // icon,
          title: place.name,
          position: place.geometry.location,
        })
      );
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
};
