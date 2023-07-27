const courseUSD = document.getElementById('USD');
const courseEUR = document.getElementById('EUR');
const courseGBP = document.getElementById('GBP');
const courseCNY = document.getElementById('CNY');
const courseAED = document.getElementById('AED');

const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

async function currFetch() {
    const result = await fetch(url);
    return result.json();
}

currFetch().then(data => {
    courseUSD.innerHTML += data.Valute['USD'].Value.toFixed(2);
    courseEUR.innerHTML += data.Valute['EUR'].Value.toFixed(2);
    courseGBP.innerHTML += data.Valute['GBP'].Value.toFixed(2);
    courseCNY.innerHTML += data.Valute['CNY'].Value.toFixed(2);
    courseAED.innerHTML += data.Valute['AED'].Value.toFixed(2);

    console.log(data.Valute['EUR'].Value);
});

setInterval(currFetch, 1000);