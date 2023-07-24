const resultSum = document.querySelector('.target__result');
const allCurrencies = document.querySelector('#target__currency');

const requestURL = 'https://api.exchangerate.host/latest?base=USD';

const usdFormat = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
});

let optionsCurrencies = ``;
async function currenciesParseAndAdd() {
    let result = await fetch(requestURL);
    result = await result.json();

    for(const key in result.rates) {
        let newOption = new Option(`${key}`, `${key}`);
        allCurrencies.append(newOption);
    }

    return result.rates;
}

let exchangeRates;

currenciesParseAndAdd().then( currencies => {
    exchangeRates = currencies;
    console.log(currencies);
    console.log(exchangeRates);
    }
);

console.log(exchangeRates)


