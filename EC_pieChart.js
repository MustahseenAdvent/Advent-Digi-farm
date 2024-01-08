const ctx_1 = document.getElementById("ECchart");

new Chart(ctx_1, {
  type: "polarArea",
  data: {
    labels: [
      "EC(max)",
      "EC(mean)",
      "EC(min)",
      "Threshold Ideal EC",
    ],
    datasets: [
      {
        label: ["Electricla Conductivity of FL-120"],
        data: [0.437, 0.156, 0.037, 0.12],
        borderWidth: 1,
        backgroundColor: [
          "rgba(255, 0, 0, 0.5)",
          "rgba(0, 255, 0, 0.5)",
          "rgba(0, 0, 255, 0.5)",
          "rgba(0, 153, 0, 0.9)",
        ],
        hoverBorderWidth: 2.5,
        hoverBackgroundColor: [
          "rgba(255, 0, 0, 0.9)",
          "rgba(0, 255, 0, 0.9)",
          "rgba(0, 0, 255, 0.9)",
          "rgba(0, 153, 0, 1)",
        ],
        hoverBorderColor: "rgb(0, 0, 0)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      r: {
        ticks: {
          font: {
            size: 16,
          },
          color:"white",
          backdropColor: "black"
        }
      },
    },
    animation: {
      animateRotate: false
    },
    plugins: {
      legend: {
        align: "center",
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 16,
            weight: 400,
          },
        },
      },
    },
    elements: {
      arc: {
        angle: 180,
        borderColor: "black"
      }
    }
  },
});
