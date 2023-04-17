
const pieBrowserChartHandler = (req, res) => {
  const data = {
    chart: {
      type: 'pie',
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Browser market shares. January, 2022',
      align: 'left'
    },
    series: [
      {
        name: 'Browsers',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 61.04,
            drilldown: 'Chrome'
          },
          {
            name: 'Safari',
            y: 9.47,
            drilldown: 'Safari'
          },
          {
            name: 'Edge',
            y: 9.32,
            drilldown: 'Edge'
          },
          {
            name: 'Firefox',
            y: 8.15,
            drilldown: 'Firefox'
          },
          {
            name: 'Other',
            y: 11.02,
            drilldown: null
          }
        ]
      }
    ],
    drilldown: {
      series: [
        {
          name: 'Chrome',
          id: 'Chrome',
          data: [
            [
              'v97.0',
              36.89
            ],
            [
              'v96.0',
              18.16
            ],
            [
              'v95.0',
              0.54
            ],
            [
              'v94.0',
              0.7
            ],
            [
              'v93.0',
              0.8
            ],
            [
              'v92.0',
              0.41
            ],
            [
              'v91.0',
              0.31
            ],
            [
              'v90.0',
              0.13
            ],
            [
              'v89.0',
              0.14
            ],
            [
              'v88.0',
              0.1
            ],
            [
              'v87.0',
              0.35
            ],
            [
              'v86.0',
              0.17
            ],
            [
              'v85.0',
              0.18
            ],
            [
              'v84.0',
              0.17
            ],
            [
              'v83.0',
              0.21
            ],
            [
              'v81.0',
              0.1
            ],
            [
              'v80.0',
              0.16
            ],
            [
              'v79.0',
              0.43
            ],
            [
              'v78.0',
              0.11
            ],
            [
              'v76.0',
              0.16
            ],
            [
              'v75.0',
              0.15
            ],
            [
              'v72.0',
              0.14
            ],
            [
              'v70.0',
              0.11
            ],
            [
              'v69.0',
              0.13
            ],
            [
              'v56.0',
              0.12
            ],
            [
              'v49.0',
              0.17
            ]
          ]
        },
        {
          name: 'Safari',
          id: 'Safari',
          data: [
            [
              'v15.3',
              0.1
            ],
            [
              'v15.2',
              2.01
            ],
            [
              'v15.1',
              2.29
            ],
            [
              'v15.0',
              0.49
            ],
            [
              'v14.1',
              2.48
            ],
            [
              'v14.0',
              0.64
            ],
            [
              'v13.1',
              1.17
            ],
            [
              'v13.0',
              0.13
            ],
            [
              'v12.1',
              0.16
            ]
          ]
        },
        {
          name: 'Edge',
          id: 'Edge',
          data: [
            [
              'v97',
              6.62
            ],
            [
              'v96',
              2.55
            ],
            [
              'v95',
              0.15
            ]
          ]
        },
        {
          name: 'Firefox',
          id: 'Firefox',
          data: [
            [
              'v96.0',
              4.17
            ],
            [
              'v95.0',
              3.33
            ],
            [
              'v94.0',
              0.11
            ],
            [
              'v91.0',
              0.23
            ],
            [
              'v78.0',
              0.16
            ],
            [
              'v52.0',
              0.15
            ]
          ]
        }
      ]
    }
  };
  res.json(data);
}

const columnBrowserChartHandler = (req, res) => {
  const data = {
    chart: {
      type: 'bar',
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Browser market shares. January, 2022',
      align: 'left'
    },
    series: [
      {
        name: 'Browsers',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 61.04,
            drilldown: 'Chrome'
          },
          {
            name: 'Safari',
            y: 9.47,
            drilldown: 'Safari'
          },
          {
            name: 'Edge',
            y: 9.32,
            drilldown: 'Edge'
          },
          {
            name: 'Firefox',
            y: 8.15,
            drilldown: 'Firefox'
          },
          {
            name: 'Other',
            y: 11.02,
            drilldown: null
          }
        ]
      }
    ],
    drilldown: {
      series: [
        {
          name: 'Chrome',
          id: 'Chrome',
          data: [
            [
              'v97.0',
              36.89
            ],
            [
              'v96.0',
              18.16
            ],
            [
              'v95.0',
              0.54
            ],
            [
              'v94.0',
              0.7
            ],
            [
              'v93.0',
              0.8
            ],
            [
              'v92.0',
              0.41
            ],
            [
              'v91.0',
              0.31
            ],
            [
              'v90.0',
              0.13
            ],
            [
              'v89.0',
              0.14
            ],
            [
              'v88.0',
              0.1
            ],
            [
              'v87.0',
              0.35
            ],
            [
              'v86.0',
              0.17
            ],
            [
              'v85.0',
              0.18
            ],
            [
              'v84.0',
              0.17
            ],
            [
              'v83.0',
              0.21
            ],
            [
              'v81.0',
              0.1
            ],
            [
              'v80.0',
              0.16
            ],
            [
              'v79.0',
              0.43
            ],
            [
              'v78.0',
              0.11
            ],
            [
              'v76.0',
              0.16
            ],
            [
              'v75.0',
              0.15
            ],
            [
              'v72.0',
              0.14
            ],
            [
              'v70.0',
              0.11
            ],
            [
              'v69.0',
              0.13
            ],
            [
              'v56.0',
              0.12
            ],
            [
              'v49.0',
              0.17
            ]
          ]
        },
        {
          name: 'Safari',
          id: 'Safari',
          data: [
            [
              'v15.3',
              0.1
            ],
            [
              'v15.2',
              2.01
            ],
            [
              'v15.1',
              2.29
            ],
            [
              'v15.0',
              0.49
            ],
            [
              'v14.1',
              2.48
            ],
            [
              'v14.0',
              0.64
            ],
            [
              'v13.1',
              1.17
            ],
            [
              'v13.0',
              0.13
            ],
            [
              'v12.1',
              0.16
            ]
          ]
        },
        {
          name: 'Edge',
          id: 'Edge',
          data: [
            [
              'v97',
              6.62
            ],
            [
              'v96',
              2.55
            ],
            [
              'v95',
              0.15
            ]
          ]
        },
        {
          name: 'Firefox',
          id: 'Firefox',
          data: [
            [
              'v96.0',
              4.17
            ],
            [
              'v95.0',
              3.33
            ],
            [
              'v94.0',
              0.11
            ],
            [
              'v91.0',
              0.23
            ],
            [
              'v78.0',
              0.16
            ],
            [
              'v52.0',
              0.15
            ]
          ]
        }
      ]
    }
  };
  res.json(data);
}

const areaRainfallChartHandler = (req, res) => {
  const data = {
    chart: {
      type: 'area'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Monthly Rainfall'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Rainfall (mm)'
      }
    },
    series: [{
      name: 'Rainfall',
      data: [47, 41, 46, 48, 52, 59, 76, 66, 56, 53, 56, 48],
      color: "#4fb5e6",
    }]
  };
  res.json(data);
}

const barAgeChartHandler = (req, res) => {
  const data = {
    chart: {
      type: 'bar'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Working Population by Age Group'
    },
    xAxis: {
      categories: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+']
    },
    yAxis: {
      title: {
        text: 'Number of Workers'
      }
    },
    series: [{
      name: 'Male',
      data: [5000000, 12000000, 15000000, 14000000, 8000000, 2000000]
    }, {
      name: 'Female',
      data: [4000000, 11000000, 14000000, 12000000, 7000000, 2500000]
    }]
  };
  res.json(data);
}

const LineFruitChartHandler = (req, res) => {
  const data = {
    chart: {
      type: 'line',
      zoomType: 'yy'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Fruit Chart'
    },
    tooltip: {
      animation: false,
      backgroundColor: 'black',
      borderColor: 'grey',
      borderRadius: 20,
      followPointer: true,
      style: {
        color: 'white',
      },
      formatter() {
        return `X avlue - ${this.x}. Y value - ${this.y}`;
      }
    },
    yAxis: {
      title: {
        text: 'fruits eaten'
      }
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: { enabled: false },
            yAxis: { title: { text: '' } }
          }
        }
      ]
    },
    xAxis: {
      categories: ['Apple', 'banana', 'orange', 'grapes', 'pineapple', 'chickoo', 'mango']
    },
    series: [
      {
        name: 'ak',
        data: [23, 10, 9, 33, 76, 3, 222]
      },
      {
        name: 'sk',
        data: [20, 20, 233, 3, 56, 78, 0]
      }
    ]
  };
  res.json(data);
}

const SplineTempChartHandler = (req, res) => {
  const data = {
    chart: {
      type: 'spline',
      inverted: true
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Atmosphere Temperature by Altitude',
      align: 'left'
    },
    xAxis: {
      reversed: false,
      title: {
        enabled: true,
        text: 'Altitude'
      },
      labels: {
        format: '{value} km'
      },
      accessibility: {
        rangeDescription: 'Range: 0 to 80 km.'
      },
      maxPadding: 0.05,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'Temperature'
      },
      labels: {
        format: '{value}°'
      },
      accessibility: {
        rangeDescription: 'Range: -90°C to 20°C.'
      },
      lineWidth: 2
    },
    legend: {
      enabled: false
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x} km: {point.y}°C'
    },
    plotOptions: {
      spline: {
        marker: {
          enable: false
        }
      }
    },
    series: [{
      name: 'Temperature',
      data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
      [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
    }]
  }
  res.json(data);
}

const StackBarSalesChartHandler = (req, res) => {
  const data = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Product Sales by Month'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Sales'
      }
    },
    legend: {
      reversed: false
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        pointWidth: 10
      }
    },
    series: [{
      name: 'Product A',
      data: [1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300],
      color: '#4fb5e6'
    }, {
      name: 'Product B',
      data: [800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900],
      color: '#f9bc31'
    }, {
      name: 'Product C',
      data: [600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700],
      color: '#e6846f'
    }]
  };
  res.json(data);
}

const ColumnAgeChartHandler = (req, res) => {
  const data = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Working Population by Age Group'
    },
    xAxis: {
      categories: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+']
    },
    yAxis: {
      title: {
        text: 'Number of Workers'
      }
    },
    series: [{
      name: 'Male',
      data: [5000000, 12000000, 15000000, 14000000, 8000000, 2000000]
    }, {
      name: 'Female',
      data: [4000000, 11000000, 14000000, 12000000, 7000000, 2500000]
    }]
  };
  res.json(data);
}

module.exports = {
  ColumnAgeChartHandler,
  pieBrowserChartHandler,
  columnBrowserChartHandler,
  areaRainfallChartHandler,
  barAgeChartHandler,
  LineFruitChartHandler,
  SplineTempChartHandler,
  StackBarSalesChartHandler
}
