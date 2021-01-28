var type = localStorage.getItem("materialChoice");
var width = localStorage.getItem("width");
var thick = localStorage.getItem("plateThickness");

function initMap() {
  //const HAFab= { lat: 41.77940390613934, lng:-111.84216570289617 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 41.78030741605723, lng:-111.84108913001909},
    mapTypeId: "roadmap",
  });
  
  const rectangleA = new google.maps.Rectangle({
    strokeColor: "#454773",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#5A58A6",
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
    strokeColor: "#454773",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#5A58A6",
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
    strokeColor: "#025959",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#027368",
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
    strokeColor: "#025959",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#027368",
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
    strokeColor: "#024873",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0455BF",
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
    strokeColor: "#024873",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0455BF",
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
    strokeColor: "#024873",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0455BF",
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
    strokeColor: "#024873",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0455BF",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 41.78074,
      south: 41.78014,
      east: -111.84240,
      west: -111.84245,
    },
  });

if(type == "Tubing" && width == "3"){
  const marker1 = new google.maps.Marker({
    position: { lat: 41.78064, lng: -111.84167 },
    map: map,
    title: "A1",
    });
  const marker2 = new google.maps.Marker({
      position: { lat: 41.78044, lng: -111.84167 },
      map: map,
      title: "A2",
      });
  $("#location").text("Found in A1/A2");
}

else if(type == "Tubing" && width == "4"){
  const marker1 = new google.maps.Marker({
    position: { lat: 41.78024, lng: -111.84167 },
    map: map,
    title: "A3",
    });
   
  const marker2 = new google.maps.Marker({
      position: { lat: 41.78024, lng: -111.84182 },
      map: map,
      title: "B3",
      });
  $("#location").text("Found in A3/B3");
}


//make a marker
/*const marker = new google.maps.Marker({
  position: { lat: 41.78074, lng: -111.84170 },
  map: map,
  title: "A1",
  });
//}
*/
}