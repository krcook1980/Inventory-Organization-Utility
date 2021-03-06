var type = localStorage.getItem("materialChoice");
var width = localStorage.getItem("width");
var thick = localStorage.getItem("plateThickness");
var l = "";

//this is the function that makes the map
function initMap() {

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 41.78030741605723, lng:-111.84108913001909},
    mapTypeId: "roadmap",
  });
  
  //code for each individual rack
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

  //logic statements that control where the markers are created.
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
  $("#location").text(type + " found in A1/A2");
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
  $("#location").text(type + " found in A3/B3");
}
else if(type == "Tubing" && width == "6"){
  const marker1 = new google.maps.Marker({
    position: { lat: 41.78064, lng: -111.84182 },
    map: map,
    title: "B1",
    });
   
  const marker2 = new google.maps.Marker({
      position: { lat: 41.78044, lng: -111.84182 },
      map: map,
      title: "B2",
      });
  $("#location").text(type + " found in B1/B2");
}

else if(type == "Angle" && width == "3"){
  const marker1 = new google.maps.Marker({
    position: { lat: 41.78064, lng: -111.84187, },
    map: map,
    title: "C1",
    });
   
  const marker2 = new google.maps.Marker({
      position: { lat: 41.78044, lng: -111.84187, },
      map: map,
      title: "C2",
      });
  $("#location").text(type + " found in C1/C2");
}
else if(type == "Angle" && width == "4"){
  const marker1 = new google.maps.Marker({
    position: { lat: 41.78024, lng: -111.84187, },
    map: map,
    title: "C3",
    });
   
  const marker2 = new google.maps.Marker({
      position: { lat: 41.78024, lng: -111.84203, },
      map: map,
      title: "D3",
      });
  $("#location").text(type + " found in C3/D3");
}
else if(type == "Angle" && width == "4"){
  const marker1 = new google.maps.Marker({
    position: { lat: 41.78064, lng: -111.84203, },
    map: map,
    title: "D1",
    });
   
  const marker2 = new google.maps.Marker({
      position: { lat: 41.78044, lng: -111.84203, },
      map: map,
      title: "D2",
      });
  $("#location").text(type + " found in D1/D2");
}

else if(type=="Plate" && width=="5"){
  
  if(thick==".25"){
    l = "E1";
    const marker1 = new google.maps.Marker({
      position: { lat: 41.78064, lng: -111.84208, },
      map: map,
      title: "E1",
      });

  }
  if(thick==".5"){
    l = "E2";
    const marker1 = new google.maps.Marker({
      position: { lat: 41.78044, lng: -111.84208, },
      map: map,
      title: "E2",
      });
  }
  if(thick==".75"){
    l = "E3";
    const marker1 = new google.maps.Marker({
      position: { lat: 41.78024, lng: -111.84208, },
      map: map,
      title: "E3",
      });
  }
  $("#location").text(type + " found in " + l);
}

else if(type=="Plate" && width=="6"){
  if(thick==".25"){
    l = "F1";
    const marker1 = new google.maps.Marker({
      position: { lat: 41.78064, lng: -111.84223, },
      map: map,
      title: "F1",
      });

  }
  if(thick==".5"){
    l = "F2";
    const marker1 = new google.maps.Marker({
      position: { lat: 41.78044, lng: -111.84223, },
      map: map,
      title: "F2",
      });
  }
  if(thick==".75"){
    l = "F3";
    const marker1 = new google.maps.Marker({
      position: { lat: 41.78024, lng: -111.84223, },
      map: map,
      title: "F3",
      });
  }
  $("#location").text(type + " found in " + l);
}

else if(type=="Plate" && width=="8"){
  if(thick==".25"){
    l = "G1";
    const marker1 = new google.maps.Marker({
      position: { lat: 41.78064, lng: -111.84228, },
      map: map,
      title: "G1",
      });

  }
  if(thick==".5"){
    l = "G2";
    const marker1 = new google.maps.Marker({
      position: { lat: 41.78044, lng: -111.84228, },
      map: map,
      title: "G2",
      });
  }
  if(thick==".75"){
    l = "G3";
    const marker1 = new google.maps.Marker({
      position: { lat: 41.78024, lng: -111.84228, },
      map: map,
      title: "G3",
      });
  }
  $("#location").text(type + " found in " + l);
}

else if(type=="Plate" && width=="12"){
  if(thick==".25"){
    l = "H1";
    const marker1 = new google.maps.Marker({
      position: { lat: 41.78064, lng: -111.84243, },
      map: map,
      title: "H1",
      });

  }
  if(thick==".5"){
    l = "H2";
    const marker1 = new google.maps.Marker({
      position: { lat: 41.78044, lng: -111.84243, },
      map: map,
      title: "H2",
      });
  }
  if(thick==".75"){
    l = "H3";
    const marker1 = new google.maps.Marker({
      position: { lat: 41.78024, lng: -111.84243, },
      map: map,
      title: "H3",
      });
  }
  $("#location").text(type + " found in " + l);
}
else{
  $("#location").text("No location found");
}

}