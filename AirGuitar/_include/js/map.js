var myCenter = new google.maps.LatLng(1.294692, 103.849824);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("locationMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
        content: "<span style='font-size:large;'><strong><span class='color-text'/>AirGuitar</span></strong> is here at <strong><span class='color-text'>SMU Labs</span></strong>!</span>"
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', initialize);