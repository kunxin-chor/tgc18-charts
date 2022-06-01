// 1. define the options for the chart
let options = {
    'chart':{
        'type': 'pie',
        'height': '100%'
    },
    // only one series for the pie chart
    'series': [21, 23, 22, 27, 45, 64],
    'labels': ['Fishball Noodles', 'Western Food', 'Indian', 'Chinese', 'Drinks', 'Malay'],
    'colors': ['#EC0B43', '#58355E', '#7AE7C7', '#D6FFB7', '#FFF689', '#FFF689']
}
// 2. create the chart and assign
// the options to the newly created chart
let pieContainer = document.querySelector('#pie-chart');
let chart = new ApexCharts(pieContainer, options);
// 3. render the chart
chart.render();