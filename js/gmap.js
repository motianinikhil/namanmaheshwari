$(function () {

  function initializeMap () {
    var myLocation = new google.maps.LatLng(30.304685, -97.724931);

    var mapOptions = {
      zoom: 12,
      center: myLocation,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("gmap_canvas"), mapOptions);

    var marker = new google.maps.Marker({map: map, position: myLocation});

    var address = "<strong>Naman Maheshwari</strong>" +
                  "<br>4305, Duval St, Apt 116 " +
                  "<br>Duval Villa Apartments" +
                  "<br>Austin, TX 78751 <br>";

    var infowindow = new google.maps.InfoWindow({content: address, maxWidth: 400});

    infowindow.open(map, marker);
  }

  google.maps.event.addDomListener(window, "load", initializeMap);
});
