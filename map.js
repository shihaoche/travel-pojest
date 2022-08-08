// 地圖基本設定
function initMap() {

  // 基本地圖設定
  const uluru = { lat: 25.0501101, lng: 121.5255337  }; // 給一個初始位置 台北車站的經緯度
  // 地圖設定
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12, //放大的倍率
    center: uluru, //初始化的地圖中心位置
       // maxZoom: 20, // 使用者能縮放地圖的最大比例 
        // minZoom: 3, // 使用者能縮放地圖的最小比例
        // gestureHandling: "auto", //手勢
        streetViewControl: false, // 是否顯示右下角街景小人
        mapTypeControl: false // 使用者能否切換地圖樣式：一般、衛星圖等
  });

  // 標示設定
  const marker = new google.maps.Marker({
    position: uluru, //marker的放置位置
    map: map //這邊的map指的是map變數
  });

//Google MAP 進入時自動定位
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
    // Browser doesn't support Geolocation
    alert("未允許或遭遇錯誤！");
}



// 搜尋設定
  const input = document.getElementById('pac-input');
  const searchBox = new google.maps.places.SearchBox(input);

  map.addListener('bounds_changed', function () {
      searchBox.setBounds(map.getBounds());
  });

  // 搜尋後定位
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();
  
    if (places.length == 0) {
      return;
    }

    let markers = [];
    // 清除舊標記。
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
  
    // 對於每個地點，獲取圖標、名稱和位置。
    const bounds = new google.maps.LatLngBounds();
  
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
  

      // const icon = {  //設定ICON標示圖
      //   url: place.icon,
      //   size: new google.maps.Size(71, 71),
      //   origin: new google.maps.Point(0, 0),
      //   anchor: new google.maps.Point(17, 34),
      //   scaledSize: new google.maps.Size(25, 25),
      // };

  
      // Create a marker for each place.
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





















  
  





      

      
  

  


 




