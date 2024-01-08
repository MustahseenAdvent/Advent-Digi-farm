d3.csv("https://raw.githubusercontent.com/Mustahseen/AdventDigifarm/main/EC_T.csv",
  function(err, rows){function unpack(rows, key) {return rows.map(function(row){ return row[key];
})};

var data = [{
  lon: unpack(rows, 'Longitude'), lat: unpack(rows, 'Latitude'), radius:60,
  z: unpack(rows, 'EC'), type: "densitymapbox", coloraxis: 'coloraxis',
  hoverinfo: 'skip'}];

var layout = {
    mapbox: {center: {lon: -81.3980514, lat: 29.41841559999999}, style: "satellite", zoom: 14},
    coloraxis: {colorscale: "Jet"},
    width: 600, height: 400, margin: {t: 30, b: 0}};

var config = {mapboxAccessToken: "pk.eyJ1IjoibXVzdGFoc2VlbiIsImEiOiJjbGdsMms5eWswMjY4M2dwaHByN3JzdnBkIn0.SiEKKThwKQyoP5GbaJ-4Ug"};

Plotly.newPlot("map", data, layout, config);
})
