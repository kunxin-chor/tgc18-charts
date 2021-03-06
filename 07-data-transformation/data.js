const dataPath = 'https://raw.githubusercontent.com/kunxin-chor/sales-data/main/data/sales.json';
async function loadData() {
    let response = await axios.get(dataPath);
    return response.data;
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

function transformData(data) {
    // let earnings = [];
    // for (let dataPoint of data) {
    //     earnings.push({
    //         'amount': dataPoint.payment.amount,
    //         'date': new Date(dataPoint.completed_at)
    //     })
    // }

    let earnings = data.map(function (dataPoint) {
        return {
            'amount': dataPoint.payment.amount,
            'date': new Date(dataPoint.completed_at)
        }
    })

    // filtering
    // let filtered = [];
    // for (let dataPoint of earnings) {
    //     if (dataPoint.date.getFullYear() == 2020) {
    //         filtered.push(dataPoint);
    //     }
    // }

    let filtered = earnings.filter(function (dataPoint) {
        if (dataPoint.date.getFullYear() == 2020) {
            return true;
        }
        return false;
    })

    let byMonths = [];
    for (let dataPoint of filtered) {
        byMonths.push(
            {
                'amount': dataPoint.amount,
                'month': dataPoint.date.getMonth()
            }
        )
    }

    // GROUPING
    // one array for each month
    let buckets = {
        0: [], // month 0 is jan
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [], // month 11 is dec
    
    }

    for (let dataPoint of byMonths) {
        let month = dataPoint.month;
        buckets[month].push(dataPoint);
    }
    
    let series = [];
    for (let monthNumber in buckets) {
        let dataPoints = buckets[monthNumber];
        // let totalAmount = 0;
        // for (let dataPoint of dataPoints) {
        //     totalAmount += dataPoint.amount
        // }
        console.log(dataPoints);
        let totalAmount = dataPoints.reduce(function(accumulated, currentValue){
            return accumulated + currentValue.amount
        }, 0)
        series.push({
            "x": months[monthNumber],
            "y": totalAmount
        })
    }
    return series;
}

