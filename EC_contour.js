var data = [ {
    z: [
     [0.243333333,	0.27,	0.266666667,	0.123333333,	0.06,	0.093333333,	0.13,	0.186666667,	0.183333333],
     [0.196666667,	0.233333333,	0.17,	0.14,	0.073333333,	0.12,	0.136666667,	0.153333333,	0.206666667],
     [0.29,	0.14,	0.113333333,	0.153333333,	0.07,	0.066666667,	0.13,	0.183333333,	0.133333333,],
     [0.206666667,	0.143333333,	0.25,	0.11,	0.083333333,	0.066666667,	0.11,	0.063333333,	0.24],
     [0.226666667,	0.17,	0.123333333,	0.18,	0.05,	0.063333333,	0.073333333,	0.11,	0.29],
     [0.153333333,	0.12,	0.113333333,	0.133333333,	0.22,	0.07,	0.036666667,	0.153333333,	0.436666667],
     [0.23,	0.143333333,	0.126666667,	0.106666667,	0.086666667,	0.093333333,	0.04,	0.376666667,	0.14333333],
     [0.22,	0.196666667,	0.15,	0.18,	0.063333333,	0.076666667,	0.043333333,	0.153333333,	0.183333333],
     [0.27,	0.136666667,	0.41,	0.236666667,	0.056666667,	0.22,	0.126666667,	0.083333333,	0.226666667]],
    type: 'contour',
    line:{
      smoothing: 0.75
    },
    // showscale: false,
    contours: {
        coloring: 'heatmap',
        showlabels: true,
        labelfont: {
          family: 'Raleway',
          size: 18,
          color: 'white',
        }
      },
    xaxis: 'x1',
    yaxis: 'y1'
  }
  ];
  
  var layout = {
    title: 'EC Contour Plots on FL-120 (dS/m)',
    font: {
      family: 'Ubuntu, sans-serif',
      size: 15,
      weight: 400,
      color: 'black'
    },

    autosize: false,
    width: 450,
    height: 450,
    grid: true,
    xaxis:{
        showgrid: true,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    },
    yaxis:{
        showgrid: true,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    }
    
  };
  
  Plotly.newPlot('myDiv', data, layout);
  