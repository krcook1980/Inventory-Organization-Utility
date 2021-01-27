
function initMap() {
  //const HAFab= { lat: 41.77940390613934, lng:-111.84216570289617 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 41.78030741605723, lng:-111.84108913001909},
    mapTypeId: "roadmap",
  });
  
  const rectangleA = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 41.78074,
      south: 41.78014,
      east: -111.84165,
      west: -111.84170,
    },
  });
  const rectangleB = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 41.78074,
      south: 41.78014,
      east: -111.84180,
      west: -111.84185,
    },
  });
  const rectangleC = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 41.78074,
      south: 41.78014,
      east: -111.84185,
      west: -111.84190,
    },
  });

  const rectangleD = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 41.78074,
      south: 41.78014,
      east: -111.84200,
      west: -111.84205,
    },
  });

  const rectangleE = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 41.78074,
      south: 41.78014,
      east: -111.84205,
      west: -111.84210,
    },
  });

  const rectangleF = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 41.78074,
      south: 41.78014,
      east: -111.84220,
      west: -111.84225,
    },
  });

  const rectangleG = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 41.78074,
      south: 41.78014,
      east: -111.84225,
      west: -111.84230,
    },
  });

  const rectangleH = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 41.78074,
      south: 41.78014,
      east: -111.84240,
      west: -111.84245,
    },
  });
}




// //make a marker
//   const marker = new google.maps.Marker({
//     position: { lat: 41.78055, lng: -111.84000 },
//     map: map,
//     title: "A1",
//   });
  
//   }
 