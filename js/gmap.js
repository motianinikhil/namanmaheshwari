$(function () {

  function initializeMap () {
    var myLocation = new google.maps.LatLng(12.9895798, 77.67079439999998);

    var mapOptions = {
      zoom: 12,
      center: myLocation,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("gmap_canvas"), mapOptions);

    var marker = new google.maps.Marker({map: map, position: myLocation});

    var address = "<strong>Naman Maheshwari</strong>" +
                  "<br>A-208, Krishnageet Shelters " +
                  "<br>16-E Cross, Pai Layout, " +
                  "<br>Bengaluru, Karnataka - 560016 <br>";

    var infowindow = new google.maps.InfoWindow({content: address, maxWidth: 400});

    infowindow.open(map, marker);
  }

  google.maps.event.addDomListener(window, "load", initializeMap);
});
