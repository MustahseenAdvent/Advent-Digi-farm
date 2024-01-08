// d3.csv('EC_sample_data.csv', function(err, rows){

//     function unpack(rows, key) {
//         return rows.map(function(row) { return row[key]; });
//     }

//     var allCountryNames = unpack(rows, 'country'),
//         allYear = unpack(rows, 'year'),
//         allGdp = unpack(rows, 'gdpPercap'),
//         listofCountries = [],
//         currentCountry,
//         currentGdp = [],
//         currentYear = [];

//         allSensorNames = unpack(rows, 'DigiNode'),
//         Bed1 = unpack(rows, '2'),
//         Bed2 = unpack(rows, '3'),
//         Bed3 = unpack(rows, '4'),
//         Bed4 = unpack(rows, '5'),
//         Bed5 = unpack(rows, '6'),
//         listofSensors = [];
//         currentBed,
//         bedEC = [];


//     for (var i = 0; i < allSensorNames.length; i++ ){
//         if (listofSensors.indexOf(allSensorNames[i]) === -1 ){
//             listofSensors.push(allSensorNames[i]);
//         }
//     }

//     function getBedData(chosenBed) {
//         currentGdp = [];
//         currentYear = [];
//         bedEC = [];
//         for (var i = 0 ; i < allSensorNames.length ; i++){
//             if ( allSensorNames[i] === chosenBed ) {
//                 currentGdp.push(allGdp[i]);
//                 currentYear.push(allYear[i]);
//             }
//         }
//     };

//     // Default Country Data
//     setBubblePlot('Bed1');

//     function setBubblePlot(chosenCountry) {
//         getCountryData(chosenCountry);

//         var trace1 = {
//             x: currentYear,
//             y: currentGdp,
//             mode: 'lines+markers',
//             marker: {
//                 size: 12,
//                 opacity: 0.5
//             }
//         };

//         var data = [trace1];

//         var layout = {
//             title:'Line and Scatter Plot',
//             height: 400,
//             width: 480
//         };

//         Plotly.newPlot('EClinePlot', data, layout);
//     };

//     var innerContainer = document.querySelector('[data-num="0"'),
//         plotEl = innerContainer.querySelector('.plot'),
//         countrySelector = innerContainer.querySelector('.countrydata');

//     function assignOptions(textArray, selector) {
//         for (var i = 0; i < textArray.length;  i++) {
//             var currentOption = document.createElement('option');
//             currentOption.text = textArray[i];
//             selector.appendChild(currentOption);
//         }
//     }

//     assignOptions(listofCountries, countrySelector);

//     function updateCountry(){
//         setBubblePlot(countrySelector.value);
//     }

//     countrySelector.addEventListener('change', updateCountry, false);
// });


var Bed1 = {
    x: [1,	2,	3,	4,	5,	6,	7,	8,	9],
    y: [0.27,
      0.22,
      0.23,
      0.153333333,
      0.226666667,
      0.206666667,
      0.29,
      0.196666667,
      0.243333333],
    fill: 'tozeroy',
    type: 'scatter',
    name: 'Bed-1',
    mode: 'lines+markers'
  };
  
  var Bed5 = {
    x: [1,	2,	3,	4,	5,	6,	7,	8,	9],
    y: [0.056666667,
      0.063333333,
      0.086666667,
      0.22,
      0.05,
      0.083333333,
      0.07,
      0.073333333,
      0.06],
    fill: 'tonexty',
    type: 'scatter',
    name: 'Bed-5',
    mode: 'lines+markers'
  };
  
  var data = [Bed5, Bed1];

  var layout = {
    title: 'EC profile across width of Bed-1 and Bed-5',
    xaxis: {
        title: 'Sensor 1- 25 across the bed',
    },
    yaxis: {
      
      title: 'EC values (mS/m)',
        showgrid: false,
        zeroline: false
    }
  }
  
  Plotly.newPlot('EClinePlot', data, layout);