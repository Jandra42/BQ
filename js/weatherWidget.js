let dailyTemps = [31, 26, 27, 18.1, 32, 32.1, 31];
let tempLimits = [0.0, 15.0, 20.0, 25.0, 60.0];
let offerList = ["Today we warm up your heart with a cup of hot chocolate!",
    "It is a good day to ... have a cup of premium tea!",
    "Today will be a piece of cake - 'cause You get one for free!",
    "A free ice-cream for You - ice-cream is happiness <3",
    "Stay cool - today You get a cold ice-tea!"];


let offerListHU = [
        "*|Mai ajándékunk egy pohár melengető forró csoki!|*",
        "*|Mai ajándékunk egy pohár meleg tea!|*",
        "*|Ma egy finom sütivel dobjuk fel a napod! |*",
        "*|Mai ajándékunk: fagyi - maga a szeretet! <3|*",
        "*|Ma egy jeges teával hűtünk le - hogy ne főjön a fejed!|*"
    ]

function showTemperature() {
    let d = document.querySelector('#dayofweek').value;
    let showTemp = document.querySelector('#show-temp');
    let offer = document.querySelector('#offer-text');
    showTemp.innerHTML = dailyTemps[d] + '&deg; C';
    for (let i = 0; i < tempLimits.length; i++) {
        if (dailyTemps[d] <= tempLimits[i]) {
            offer.innerHTML = offerList[i];
            break;
        }
    }
}



function showMinTemp() {
    let db = dailyTemps.length;
    let min = (db != 0) ? dailyTemps[0] : 0;
    for (let i = 0; i < db; i++) {
        if (dailyTemps[i] < min) {
            min = dailyTemps[i];
        }
    }
    document.querySelector('#min').innerHTML = 'min: ' + min + '&deg; C';
};
showMinTemp();

function showMaxTemp() {
    let db = dailyTemps.length;
    let max = (db != 0) ? dailyTemps[0] : 0;
    for (let i = 0; i < db; i++) {
        if (dailyTemps[i] > max) {
            max = dailyTemps[i];
        }
    }
    document.querySelector('#max').innerHTML = 'max: ' + max + '&deg; C';
};
showMaxTemp();

let db = dailyTemps.length;
function showAvgTemp() {
    let avgTemp = document.querySelector('#avg');
    let sum = 0;
    let  avg = db != 0 ? dailyTemps[0] : 0;
    for (let i = 0; i < db; i++) {
        sum += dailyTemps[i];
    }
    avg = sum/db;
    avgTemp.innerHTML = 'avg: ' + avg.toFixed(1) + '&deg; C';
}
showAvgTemp();