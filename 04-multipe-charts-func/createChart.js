// 1. find variables that are not declared locally or part of the arguments --> don't have
// 2. find hard-coded values that we want to customize
/**
 * container - DOM element where the chart will be in
 * chartType - either 'line' or 'bar',
 * series - an array of objects, each object has a `name` key (string) a
 *          and has an array of data points stored in `data` key
 * categories - array of strings for the x-axis
 */
function createChart(container, chartType, series, categories) {
    let options = {
        "chart":{
            "type": chartType,
            "height":"100%"  // takes 100% of the parent height
        },
        "series":series,
        "xaxis": {
            'categories': categories
        }
    }
    
    let chart = new ApexCharts(container, options);
    return chart;
}