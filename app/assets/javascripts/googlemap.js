function initialize() {
  var myLatlng = new google.maps.LatLng(38.00409, -84.42154);
  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
