var ndvi_dataset = [
  0.16, 0.18, 0.15, 0.04, 0.06, 0.66,
  0.52
];

// var evi_dataset = [
//   0.239283323, 0.057809594, 0.038028885, 0.30418994, 0.331356185, 0.357695985,
//   0.03068585, 0.191833873,
// ];

// var dswi_dataset = [
//   0.520830252, 0.338300724, 0.288031326, 0.492641088, 0.368869269, 0.239283323,
//   0.057809594, 0.038028885,
// ];

// var ndwi_dataset = [
//   0.104453521, 0.302369076, 0.239283323, 0.057809594, 0.038028885, 0.357695985,
//   0.03068585, 0.191833873,
// ];

var chart_labels = [
  "12/28/2023",
  "11/28/2023",
  "10/29/2023",
  "09/29/2023",
  "08/29/2023",
  "07/28/2023",
  "06/26/2023"
];

// var ctx = document.getElementById("mixedChart");

// var config = {
//   type: "bar",
//   data: {
//     labels: chart_labels,
//     datasets: [
//       {
//         label: "Mean NDVI Indices (2020-2022)",
//         data: ndvi_dataset,
//         backgroundColor: "#ea335d",
//         borderWidth: 1,
//         type: "bar",
//         order: 2,
//       },
//     ],
//     options: {
//       responsive: true,
//     },
//   },
//   options: {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//         stacked: true,
//         ticks: {
//           font: {
//             size: 6,
//           },
//         },
//       },
//       y: {
//         grid: {
//           display: false,
//         },
//         beginAtZero: true,
//         stacked: true,
//         ticks: {
//           font: {
//             size: 14,
//           },
//         },
//       },
//     },
//   },
// };

// var ndvi_chart = new Chart(ctx, config);

// $("#ndvi-btn").click(function () {
//   var data = ndvi_chart.config.data;
//   data.datasets[0].data = ndvi_dataset;
//   data.labels = chart_labels;
//   ndvi_chart.update();
// });

// $("#evi-btn").click(function () {
//   var data = ndvi_chart.config.data;
//   data.datasets[0].data = evi_dataset;
//   data.labels = chart_labels;
//   ndvi_chart.update();
// });

// $("#dswi-btn").click(function () {
//   var data = ndvi_chart.config.data;
//   data.datasets[0].data = dswi_dataset;
//   data.labels = chart_labels;
//   ndvi_chart.update();
// });

// $("#ndwi-btn").click(function () {
//   var data = ndvi_chart.config.data;
//   data.datasets[0].data = ndwi_dataset;
//   data.labels = chart_labels;
//   ndvi_chart.update();
// });

const ctx = document.getElementById("forecast");

// var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
// purple_orange_gradient.addColorStop(0, 'orange');
// purple_orange_gradient.addColorStop(1, 'purple');

const forecast = new Chart(ctx, {
  
  data: {
    labels: chart_labels,
    datasets: [
      {
        
        type: "bar",
        data: ndvi_dataset,
        borderWidth: 1,
        backgroundColor: "rgba(115, 29, 132, 0.4)",
        // backgroundColor: purple_orange_gradient,
				// hoverBackgroundColor: purple_orange_gradient,
				// hoverBorderWidth: 2,
				// hoverBorderColor: 'purple'
        borderColor: "rgb(0,0,0)",
      },
      {
        type: "line",
        
        data: ndvi_dataset,
        borderWidth: 1,
        backgroundColor: "rgba(115, 29, 132, 0.4)",
        borderColor: "rgb(0,0,0)",
      }
      // {
      //   label: "EVI",
      //   data: evi_dataset,
      //   borderWidth: 1,
      //   backgroundColor: "rgba(145, 69, 142, 0.4)",
      //   borderColor: "rgb(0,0,0)",
      // },
      // {
      //   label: "DSWI",
      //   data: dswi_dataset,
      //   borderWidth: 1,
      //   backgroundColor: "rgba(175, 109, 152, 0.4)",
      //   borderColor: "rgb(0,0,0)",
      // },
      // {
      //   label: "NDWI",
      //   data: ndwi_dataset,
      //   borderWidth: 1,
      //   backgroundColor: "rgba(205, 149, 162, 0.4)",
      //   borderColor: "rgb(0,0,0)",
      // },
    ],
    options: {
      responsive: true,
    },
  },
  options: {
    scales: {
      x: {
        title: {
          font: {
            size: 19,
            weight: "bold"
          },
          color: 'black'
        },

        ticks: {
          font: {
            size: 20,
            weight: "bold"
          },
          color: 'black',
        },

        grid: {
          display: false
        }
      },
      y: {
        title: {
          font: {
            size: 19,
            weight: "bold"
          },
          color: 'black'
        },

        ticks: {
          beginAtZero: true,
          font: {
            size: 19,
            weight: "bold"
          },
          color: 'black'
        },
        grid: {
          display: false
        }
      }},
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   },
    // },
    plugins: {
      title: {
        display: true,
        text: 'NDVI for the past 6 months of FL-120',
        font: {
              size: 18,
              weight: 400,
            },
      },
      legend: {
        display: false
        // labels: {
        //   // This more specific font property overrides the global property
        //   font: {
        //     size: 18,
        //     weight: 600,
        //   },
        // },
      },
      tooltips: {
        enabled: false
      }
    },
  },
});

// function toggleData(value) {
//   const showValue = forecast.isDatasetVisible(value);
//   if (showValue === true) {
//     forecast.hide(value);
//   }
//   if (showValue === false) {
//     forecast.show(value);
//   }
// }

// $("#ndvi-btn").click(function toggleData() {
//   const data = forecast.config.data;
//   data.datasets[0].data = ndvi_dataset;
//   data.labels = chart_labels;
//   forecast.update();
// });

// $("#evi-btn").click(function toggleData() {
//   const data = forecast.config.data;
//   data.datasets[1].data = evi_dataset;
//   data.labels = chart_labels;
//   forecast.update();
// });

// $("#dswi-btn").click(function toggleData() {
//   const data = forecast.config.data;
//   data.datasets[2].data = dswi_dataset;
//   data.labels = chart_labels;
//   forecast.update();
// });

// $("#ndwi-btn").click(function toggleData() {
//   const data = forecast.config.data;
//   data.datasets[3].data = ndwi_dataset;
//   data.labels = chart_labels;
//   forecast.update();
// });
