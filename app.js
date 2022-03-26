const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

module.exports = {sum};

let oneEuroIs  = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}

const fromDollarToYen = (dollar) => {
    return (dollar / oneEuroIs['USD']) * oneEuroIs['JPY']
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs['USD']
}

const fromYanToPound = (yen) => {
    return (yen / oneEuroIs['JPY']) * oneEuroIs['GBP']
}

module.exports = { sum, fromEuroToDollar }