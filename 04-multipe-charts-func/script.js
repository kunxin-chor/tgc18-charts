function generateRandomNumber(number) {
    let n = [];
    for (let i =0; i < number; i++) {
        n.push(Math.floor(Math.random() * 1000 + 100));
    }
    return n;
}

let lineChart = createChart(
    document.querySelector('#line-chart'), // container
    'line', // tpye of chart
    [ 
        {
            "name":"sightings",
            "data": generateRandomNumber(10)
        }
    ], // array of series
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
         'Aug', 'Sept', 'Oct'] // array of categories
)
lineChart.render();

let barSeries = [
    {
        "name":"sightings",
        "data": generateRandomNumber(10)
    }
];

let categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct'];

let barChart = createChart(
    document.querySelector("#bar-chart"), 
    'bar',
    barSeries,
    categories
)
barChart.render();