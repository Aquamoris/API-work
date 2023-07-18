// Custom view of number to currency

const sum = 123456789;
const f = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
});

// console.log(f.format(sum));

// Work with API

let rates = {};

const requestURL = 'https://api.exchangerate.host/latest?base=USD'

async function fetchRates() {
    let res = await fetch(requestURL);
    res = await res.json();
    console.log(res.rates);
    for(const key in res.rates) {
        console.log(`CURRENCY: ${key} -> PRICE: ${res.rates[key]} $`)
    }
}

fetchRates();

// async function fetchRates () {
//     let res = await fetch(requestURL);
//     res = await res.json();
//     console.log(res.rates.keys);
//     console.log(Object.values(res.rates));
//     // rates = res.rates;
//     // populateOptions();
// }