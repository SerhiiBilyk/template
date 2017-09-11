function initMap() {
     var uluru = {lat: -27.112723, lng:  -109.3496865};
     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 10,
       center: uluru
     });
     var marker = new google.maps.Marker({
       position: uluru,
       map: map
     });
   }
