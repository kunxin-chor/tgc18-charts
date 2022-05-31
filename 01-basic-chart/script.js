// this object stores the options for the chart
const options = {
    'chart':{
        'type':'line', // type of chart
        'height':'100%' // 100% of the parent height
    },
    // the data for the chart (i.e, series)
    'series':[
        {
            'name':'sightings',
            'data':[10, 13, 15, 22, 34, 55, 78, 44]
        },
        {
            'name':'temperature',
            'data':[33,21,22,24,26,25,26,21,31,44,]
        }
    ],
    'xaxis':{
        'categories':['Jan', 'Feb', 'Mar', 'Apr', 'May',
             'Jun', 'Jul','Aug', 'Sept', 'Oct']
    }
}

// use the options to create the chart
// call the `new ApexCharts` function to create a new ApexChart object
const chart = new ApexCharts(
    document.querySelector('#chart'),
    options
);

chart.render(); // draw the chart