const apiKey = "3199961a1db6540d9bb6d68370f2cde6";
const userId = "642f15efff8d760007133151";
// const polyId = "64302d80176fe647b64424ce";
// const polyId = "656e02c193997d4983bfd6c7"; //Entire Titan Farm
const polyId = "658efe5c6352a366372cd5e4"; //Entire Rawl Farm Bunnell FL
// const polyId = "656e02c193997d4983bfd6c7"; // Green Onion Rawl Farm

const apiKey_OW = `7647b0013bcbde6e4dd409d68ca0f70f`;
// Import necessary libraries
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

// const mapboxgl = require("mapbox-gl");
// const axios = require("axios");

const lat = -81.3980514;
const lon = 29.41841559999999;

const startDate = "1500336000";
const endDate = "1508976000";
const city = "Ridge Spring";

// const NDVI_start_date = "1515560400"; // Jan 10, 2018
// const NDVI_start_date = "1660521600"; // Aug 15, 2022
const NDVI_start_date = "1702962000"; // Dec 17, 2023
// const NDVI_end_date = "1661227200"; // Aug 23, 2022
const NDVI_end_date = "1703044800"; // Aug 19, 2023
const stateCode = "US-SC";

const usgsToken = `8PeLxIxGMZhIZiMTXTD51l3hZsmoB6mArY_gHJfewmU6z!AE1EGerHMkRfusCIov`;
// NDVI Data
const ndvi_API = `https://api.agromonitoring.com/agro/1.0/ndvi/history?polyid=${polyId}&start=1515626647&end=1661293447&appid=${apiKey}&units=imperial`;
// Sat Image Data

const openWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey_OW}`;
const apiUrl = `https://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
const pgApiUrl = `https://api.agromonitoring.com/agro/1.0/polygons?user_id=${userId}&appid=${apiKey}`;
const ndviAPI = `https://api.agromonitoring.com/agro/1.0/ndvi/history?start=${NDVI_start_date}&end=${NDVI_end_date}&polyid=${polyId}&appid=${apiKey}`;
const satImageApiUrl = `https://api.agromonitoring.com/agro/1.0/image/search?start=${NDVI_start_date}&end=${NDVI_end_date}&&polyid=${polyId}&appid=${apiKey}`;

mapboxgl.accessToken =
  "pk.eyJ1IjoibXVzdGFoc2VlbiIsImEiOiJjbGdsMms5eWswMjY4M2dwaHByN3JzdnBkIn0.SiEKKThwKQyoP5GbaJ-4Ug";

// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//   style: "mapbox://styles/mapbox/satellite-v9", // style URL
//   center: [lat, lon], // starting position [lng, lat]
//   pitch: 40,
//   // bearing: 61,
//   zoom: 15, // starting zoom
// });

// map.on("load", () => {
//   map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

//   map.addSource("dot-point", {
//     type: "geojson",
//     data: {
//       type: "FeatureCollection",
//       features: [
//         {
//           type: "Feature",
//           geometry: {
//             type: "Point",
//             coordinates: [lat, lon], // icon position [lng, lat]
//           },
//           properties: {
//             title: "Advent Digi-Node",
//           },
//         },
//       ],
//     },
//   });
//   map.addLayer({
//     id: "layer-with-pulsing-dot",
//     type: "symbol",
//     source: "dot-point",
//     layout: {
//       "icon-image": "pulsing-dot",
//     },
//   });

//   // Add a data source containing GeoJSON data.
//   map.addSource("RawlBunnellFL", {
//     type: "geojson",
//     data: {
//       type: "Feature",
//       geometry: {
//         type: "Polygon",
//         // These coordinates outline titan-farm.
//         coordinates: [
//           [
//             [-81.400612, 29.419804],
//             [-81.400581, 29.416275],
//             [-81.396221, 29.416361],
//             [-81.396251, 29.419783],
//             [-81.396592, 29.419855],
//             [-81.400612, 29.419804]
//           ],
//         ],
//       },
//     },
//   });

//   //   // Add a new layer to visualize the polygon.
//   map.addLayer({
//     id: "RawlBunnellFL",
//     type: "fill",
//     source: "RawlBunnellFL", // reference the data source
//     layout: {},
//     paint: {
//       "fill-color": "#0080ff", // blue color fill
//       "fill-opacity": 0.5,
//     },
//   });
//   // Add a black outline around the polygon.
//   map.addLayer({
//     id: "outline",
//     type: "line",
//     source: "RawlBunnellFL",
//     layout: {},
//     paint: {
//       "line-color": "#000",
//       "line-width": 3,
//     },
//   });
// });

function fetchSatImage() {
  fetch(satImageApiUrl)
    .then((response) => response.json())
    .then((data) => {
      // const imageSection = document.querySelector("#image");
      console.log(data);
      // const imageUrl = data[90].tile;
      // const dswiData = data[0].data.dswi;
      // const sunAzimuth = data[0].sun.azimuth;

      // const satelliteImage = document.getElementById("satellite-image");

      // satelliteImage.src = imageUrl;
      // satelliteImage.alt = "Satellite Image";

      // const html = `
      //   <h2>DSWI</h2>
      //   <p>${dswiData}</p>
      //   <p>${sunAzimuth}</p>
      // `;
      // imageSection.innerHTML = html;

      // console.log("Image URL:", imageUrl);

      // const ndviTiles = data[0].tile.ndvi;
      
      const imageUrl = data[0].image.nri;
      const cloudCover = data[0].tile.nri;
      const acquisitionDate = data[0].type;
      const ndviImg = data[100].dc;

      const satelliteImage = document.getElementById("satellite-image");
      satelliteImage.textContent = imageUrl;
      // satelliteImage.src = imageUrl;
      // satelliteImage.src = ndviImg;
      // satelliteImage.alt = "Satellite Image";

      const cloudCoverElement = document.getElementById("cloud-cover");
      cloudCoverElement.textContent = cloudCover;

      const acquisitionDateElement =
        document.getElementById("acquisition-date");
      acquisitionDateElement.textContent = acquisitionDate;

      // const ndviTileData =
      // document.getElementById("ndvi-tile");
      // ndviTileData.textContent = ndviTiles;

    })
    .catch((error) => {
      console.error("Error fetching satellite imagery data", error);
    });
}

fetchSatImage();


const map = new mapboxgl.Map({
  container: 'map', // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
  center: [lat, lon], // starting position
  zoom: 12// starting zoom
});

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
.setLngLat([lat, lon])
.addTo(map);

d3.csv("https://raw.githubusercontent.com/Mustahseen/AdventDigifarm/66a95fa52d1f005ba99ae912782cf9ffd625a2db/EC_T.csv",
function(err, rows){function unpack(rows, key) {return rows.map(function(row){ return row[key];
})};

// scl = [[0, 'rgb(150,0,90)'],[0.05, 'rgb(0, 0, 200)'],[0.1,'rgb(0, 25, 255)'],[0.15,'rgb(0, 152, 255)'],[0.20,'rgb(44, 255, 150)'],[0.25,'rgb(151, 255, 0)'],[0.3,'rgb(255, 234, 0)'],[0.35,'rgb(255, 111, 0)'],[0.44,'rgb(255, 0, 0)']];


var data = [{
  lon: unpack(rows, 'Longitude'), 
  lat: unpack(rows, 'Latitude'), 
  radius:60,
  z: unpack(rows, 'EC'), 
  type: "scattermapbox", 
  mode: 'markers',
  zmin: 0, 
  zmax: 0.44, 
  coloraxis: 'coloraxis', 
  text: unpack(rows, 'EC'),
  hoverinfo: 'text',

marker: {
  // symbol: "square",
  color: unpack(rows, 'EC'),
  colorscale: 'Jet',
  cmin: 0,
  cmax: 0.44,
  // symbol: ["square"],
  // reversescale: true,
  opacity: 0.3,
  size: 35,
  colorbar:{
    thickness: 30,
    titleside: 'right',
    outlinecolor: 'rgba(68,68,68,0)',
    ticks: 'outside',
    ticklen: 3,
    shoticksuffix: 'last',
    dtick: 0.1
  }
},

}];

var layout = {
  mapbox: {center: {lon: -81.397507, lat: 29.419244}, style: "satellite", zoom: 12},
  coloraxis: {colorscale: "Jet"},autosize: true, margin: { r: 0, t: 0, b: 0, l: 0 }};

var config = {mapboxAccessToken: "pk.eyJ1IjoibXVzdGFoc2VlbiIsImEiOiJjbGdsMms5eWswMjY4M2dwaHByN3JzdnBkIn0.SiEKKThwKQyoP5GbaJ-4Ug"};

Plotly.newPlot("ECmap", data, layout, config);
})

map.on('load', () => {
  
//   // Add a data source containing GeoJSON data.
//   // fetch(satImageApiUrl)
//   //   .then((response) => response.json())
//   //   .then((data) => {
//   //     const ndviTiles = data[0].tile.ndvi;
//   //     console.log(ndviTiles)
//   //   });


    map.addSource('Dec 18,2023', {
      type: 'raster',
      tiles: ['http://api.agromonitoring.com/tile/1.0/{z}/{x}/{y}/1206580dd00/658efe5c6352a366372cd5e4?appid=3199961a1db6540d9bb6d68370f2cde6'], //Dec 18, 2023
      tileSize: 256
    });

    map.addLayer({
      id: 'Dec 18,2023',
      type: 'raster',
      source: 'Dec 18,2023',
      'layout': {
        // Make the layer visible by default.
        'visibility': 'visible'
      },
      paint: {
        'raster-opacity': 0.9,
        'raster-hue-rotate': 0,
        'raster-brightness-min': 0,
        'raster-brightness-max': 1,
        'raster-saturation': 0,
        'raster-contrast': 0
      }
    });

  
    map.addSource('Feb 6, 2023', {
      type: 'raster',
      tiles: ['http://api.agromonitoring.com/tile/1.0/{z}/{x}/{y}/12063e19480/658efe5c6352a366372cd5e4?appid=3199961a1db6540d9bb6d68370f2cde6'], //Feb 6,2023
      tileSize: 256
    });

    map.addLayer({
      id: 'Feb 6, 2023',
      type: 'raster',
      source: 'Feb 6, 2023',
      'source-layer': 'Feb 6, 2023',
      'layout': {
        // Make the layer visible by default.
        'visibility': 'visible',
    },
      paint: {
        'raster-opacity': 0.9,
        'raster-hue-rotate': 0,
        'raster-brightness-min': 0,
        'raster-brightness-max': 1,
        'raster-saturation': 0,
        'raster-contrast': 0
      }
    });

    map.addSource('maine', {
      'type': 'geojson',
      'data': {
          'type': 'Feature',
          'geometry': {
              'type': 'Polygon',
              // These coordinates outline Maine.
              'coordinates': [
                  [
                    [-81.400612, 29.419804],
                    [-81.400581, 29.416275],
                    [-81.396221, 29.416361],
                    [-81.396251, 29.419783],
                    [-81.396592, 29.419855],
                    [-81.400612, 29.419804]
                  ]
              ]
          }
      }
    });

  // Add a new layer to visualize the polygon.
    map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#0080ff', // blue color fill
            'fill-opacity': 0
        }
    });

    // Add a black outline around the polygon.
    map.addLayer({
      'id': 'outline',
      'type': 'line',
      'source': 'maine',
      'layout': {},
      'paint': {
          'line-color': '#000',
          'line-width': 3
      }
  });

// //   // map.addSource('maine', {
// //   //     'type': 'geojson',
// //   //     'data': {
// //   //         'type': 'Feature',
// //   //         'geometry': {
// //   //             'type': 'Polygon',
// //   //             // These coordinates outline Maine.
// //   //             'coordinates': [
// //   //                 [
// //   //                   [-81.400612, 29.419804],
// //   //                   [-81.400581, 29.416275],
// //   //                   [-81.396221, 29.416361],
// //   //                   [-81.396251, 29.419783],
// //   //                   [-81.396592, 29.419855],
// //   //                   [-81.400612, 29.419804]
// //   //                 ]
// //   //             ]
// //   //         }
// //   //     }
// //   // },
  

// //   // Add a new layer to visualize the polygon.
// //   // map.addLayer({
// //   //     'id': 'maine',
// //   //     'type': 'fill',
// //   //     'source': 'maine', // reference the data source
// //   //     'layout': {},
// //   //     'paint': {
// //   //         'fill-color': '#0080ff', // blue color fill
// //   //         'fill-opacity': 0.2
// //   //     }
// //   // });
// //   // Add a black outline around the polygon.
// //   // map.addLayer({
// //   //     'id': 'outline',
// //   //     'type': 'line',
// //   //     'source': 'maine',
// //   //     'layout': {},
// //   //     'paint': {
// //   //         'line-color': '#000',
// //   //         'line-width': 1
// //   //     }
// //   // });

        map.addSource('marker1', {
          // This GeoJSON contains features that include an "icon"
          // property. The value of the "icon" property corresponds
          // to an image in the Mapbox Streets style's sprite.
          'type': 'geojson',
          'data': {
              'type': 'FeatureCollection',
              'features': [
                  {
                      'type': 'Feature',
                      'properties': {
                          'description':
                              '<strong>FL-120</strong>',
                          'icon': 'theatre'
                      },
                      'geometry': {
                          'type': 'Point',
                          'coordinates': [lon, lat]
                      }
                  }
              ]
          }
        });
        // Add a layer showing the places.
        map.addLayer({
          'id': 'marker1',
          'type': 'symbol',
          'source': 'marker1',
          'layout': {
              'icon-image': ['get', 'icon'],
              'icon-allow-overlap': true
          }
        });

// When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.
        map.on('click', 'places', (e) => {
          // Copy coordinates array.
          const coordinates = e.features[0].geometry.coordinates.slice();
          const description = e.features[0].properties.description;

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(description)
              .addTo(map);
          });

      // Change the cursor to a pointer when the mouse is over the places layer.
          map.on('mouseenter', 'places', () => {
              map.getCanvas().style.cursor = 'pointer';
          });

          // Change it back to a pointer when it leaves.
          map.on('mouseleave', 'places', () => {
              map.getCanvas().style.cursor = '';
          }); 
});

map.on('idle', () => {
  // If these two layers were not added to the map, abort
  if (!map.getLayer('Dec 18,2023') || !map.getLayer('Feb 6, 2023')) {
      return;
  }

  // Enumerate ids of the layers.
  const toggleableLayerIds = ['Feb 6, 2023','Dec 18,2023'];

  // Set up the corresponding toggle button for each layer.
  for (const id of toggleableLayerIds) {
      // Skip layers that already have a button set up.
      if (document.getElementById(id)) {
          continue;
      }

      // Create a link.
      const link = document.createElement('a');
      link.id = id;
      link.href = '#';
      link.textContent = id;
      link.className = 'active';

      // Show or hide layer when the toggle is clicked.
      link.onclick = function (e) {
          const clickedLayer = this.textContent;
          e.preventDefault();
          e.stopPropagation();

          const visibility = map.getLayoutProperty(
              clickedLayer,
              'visibility'
          );

          // Toggle layer visibility by changing the layout object's visibility property.
          if (visibility === 'visible') {
              map.setLayoutProperty(clickedLayer, 'visibility', 'none');
              this.className = '';
          } else {
              this.className = 'active';
              map.setLayoutProperty(
                  clickedLayer,
                  'visibility',
                  'visible'
              );
          }
      };

      const layers = document.getElementById('map-menu');
      layers.appendChild(link);
  }
});

map.on('idle',function(){
  map.resize()
  })


////////////////////NDVI Map Contour////////////////////////

// function fetchNDVI_ImageData() {
//   fetch(satImageApiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data);
//       // const NDVImapSection = document.querySelector("#map");
//       // const currentNdviImageURL = data[3].image.ndwi;
//       //   const html = `
//       //   <p>${currentNdviImageURL}</p>
//       // `;

//       //   NDVImapSection.innerHTML = html;

//       map.on("load", () => {
//         map.addSource("image", {
//           type: "Polygon",
//           url: data[0].image.ndwi,
//           coordinates: [
//             [-81.697676, 33.856626],
//             [-81.729906, 33.861003],
//             [-81.729568, 33.832439],
//             [-81.69396, 33.83272],
//             [-81.697676, 33.856626],
//           ],
//         });
//         map.addLayer({
//           id: "radar-layer",
//           type: "raster",
//           source: "image",
//           paint: {
//             "raster-fade-duration": 0,
//           },
//         });
//       });

      // NDVImapSection.innerHTML = image;
      // createNDVIPlot(data);

      // // Process the NDVI data and create contours
      // const contours = processNDVIData(data);

      // // Add the contour data as a GeoJSON source
      // map.addSource("ndvi-contours", {
      //   type: "geojson",
      //   data: contours,
      // });

      // // Add a contour layer to the map
      // map.addLayer({
      //   id: "ndvi-contours",
      //   type: "line",
      //   source: "ndvi-contours",
      //   paint: {
      //     "line-color": "red", // Adjust the contour line color
      //     "line-width": 2, // Adjust the contour line width
      //   },
//       // });
//     })
//     .catch((error) => {
//       console.error("Error loading NDVI data:", error);
//     });
// }

// fetchNDVI_ImageData();

// map.on("load", () => {
//   map.addSource("radar", {
//     type: "image",
//     url: currentNdviImageURL,
//     coordinates: [
//       [
//         [-81.729952, 33.849036],
//         [-81.718941, 33.83701],
//         [-81.706834, 33.835292],
//         [-81.69095, 33.841593],
//         [-81.68667, 33.852416],
//         [-81.703981, 33.863581],
//         [-81.733528, 33.861957],
//         [-81.729952, 33.849036],
//       ],
//     ],
//   });
//   map.addLayer({
//     id: "radar-layer",
//     type: "raster",
//     source: "radar",
//     paint: {
//       "raster-fade-duration": 0,
//     },
//   });
// });

// Function to process NDVI data (customize this as needed)
// function processNDVIData(data) {
//   // Process and transform the data into GeoJSON format
//   // Customize this function to match the structure of the Agromonitoring data.
//   // You may need to extract coordinates and NDVI values from the response.
//   const features = data.map((item) => ({
//     type: "Feature",
//     geometry: {
//       type: "Point",
//       coordinates: [item.lon, item.lat], // Replace with the correct coordinates
//     },
//     properties: {
//       ndvi: item.ndvi, // Replace with the NDVI property from your data
//     },
//   }));

//   return {
//     type: "FeatureCollection",
//     features: features,
//   };
// }

// Function to create the NDVI plot on the map
// function createNDVIPlot(data) {
//   // Loop through the NDVI data and create map markers or custom visualization
//   data.forEach((item) => {
//     // Replace with your custom logic to visualize NDVI data on the map
//     const marker = new mapboxgl.Marker({
//       color: getColorForNDVI(item.ndvi), // Customize this function to map NDVI values to colors
//     })
//       .setLngLat([item.lon, item.lat])
//       .addTo(map);
//   });
// }

// Function to map NDVI values to colors (customize as needed)
// function getColorForNDVI(ndvi) {
//   // Replace this logic with your own color mapping
//   if (ndvi >= 0.8) return "green";
//   if (ndvi >= 0.6) return "yellow";
//   if (ndvi >= 0.4) return "orange";
//   return "red";
// }

///////////////////////////////////////////////////

// Fetch temperature data from OpenWeather API (replace with your desired location and parameters)
// fetch(openWeatherAPI)
//   .then((response) => response.json())
//   .then((data) => {
//     // Process temperature data and create contours
//     console.log(data);

//     const temperature = data.main.temp;

//     // Create a GeoJSON feature for temperature data
//     const temperatureFeature = {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [data.coord.lon, data.coord.lat],
//       },
//       properties: {
//         temperature: temperature,
//       },
//     };

//     // Add the temperature data as a GeoJSON source
//     map.addSource("temperature-data", {
//       type: "geojson",
//       data: temperatureFeature,
//     });

//     // Add a contour layer to the map
//     map.addLayer({
//       id: "temperature-contours",
//       type: "line",
//       source: "temperature-data",
//       paint: {
//         "line-color": "red", // Customize the contour line color
//         "line-width": 20, // Customize the contour line width
//       },
//     });
//   })
//   .catch((error) => {
//     console.error("Error loading temperature data:", error);
//   });
