let campaigns = [3,5,1,8,4,10];
let reach = [5000, 17000, 2400, 25000, 14000, 55000];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
'Jun', 'Jul','Aug', 'Sept', 'Oct'];

// this object stores the options for the chart
const campaginOptions = {
    'chart':{
        'id':'campaign-chart', // unique name for the chart, NOT RELATED TO HTML IDs
        'type':'line', // type of chart
        'height':'100%', // 100% of the parent height
        'group':'marketing'
    },
    // the data for the chart (i.e, series)
    'series':[
        {
            'name':'reach',
            'data': campaigns
        },
    ],
    'xaxis':{
        'categories':months
    },
    'yaxis':{
        'labels':{
            'minWidth': 40
        }
    }
}

const campaginChart = new ApexCharts(
    document.querySelector('#campaign-chart'),
    campaginOptions
);

campaginChart.render(); // draw the chart

/// REACH
const reachOptions = {
    'chart':{
        'id':'reach-chart',
        'type':'line', // type of chart
        'height':'100%', // 100% of the parent height
        'group':'marketing'
    },
    // the data for the chart (i.e, series)
    'series':[
        {
            'name':'reach',
            'data': reach
        },
    ],
    'xaxis':{
        'categories':months
    },
    'yaxis':{
        'labels':{
            'minWidth': 40
        }
    }
}

let reachChart = new ApexCharts(document.querySelector('#reach-chart'), reachOptions);
reachChart.render();