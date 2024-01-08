var data = [ 
  {
    z: [[64,	64.5,	64.6,	62.78,	62.78,	65.48,	63.5,	62.42,	63.86
    ],
     [64.4,	64,	64.4,	62.6,	62.96,	63.68,	63.14,	62.24,	63.5
     ],
     [64.2,	63.6,	64.8,	62.78,	62.78,	63.68,	62.42,	61.88,	63.68
     ],
     [64.2,	64.4,	64.8,	62.6,	62.78,	63.14,	61.88,	62.42,	63.32
     ],
     [64.8,	64,	65.3,	62.78,	62.6,	64.22,	62.24,	62.78,	63.5
     ],
     [64,	63.3,	64.8,	63.14,	62.42,	62.96,	63.32,	62.78,	64.04
     ],
     [64.3,	64.2,	65.5,	63.14,	62.78,	63.14,	62.96,	62.6,	63.68
     ],
    [67.5,	64.6,	65.5,	63.68,	63.5,	63.32,	62.42,	62.96,	63.32
    ],
    [62.8,	64.4,	65.1,	63.68,	63.68,	64.58,	63.5,	63.14,	64.22
    ]
],
    type: 'contour',
    colorscale: 'Hot',
    line:{
      smoothing: 0.75
    },
    // showscale: false,

    reversescale: true,
    contours: {
        coloring: 'heatmap',
        showlabels: true,
        labelfont: {
          family: 'Raleway',
          size: 18,
          color: 'black',
        }
      },
    xaxis: 'x1',
    yaxis: 'y1'
  }];
  
  var layout = {
    title: 'Temperature Contour Plots on FL-120 (&#176; F)',
    font: {
      family: 'Ubuntu, sans-serif',
      size: 15,
      color: 'black'
    },
    autosize: false,
    width: 450,
    height: 450,
    xaxis:{
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    },
    yaxis:{
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    }
  };
  
  Plotly.newPlot('Tcontour', data, layout);
  