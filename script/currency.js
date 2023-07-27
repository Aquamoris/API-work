const resultSum = document.querySelector('.target__result');
const allCurrencies = document.querySelector('#target__currency');

const requestURL = 'https://api.exchangerate.host/latest?base=USD&date=now';

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

    console.log(result);

    return result.rates;
}

currenciesParseAndAdd().then( currencies => {
    allCurrencies.addEventListener('change', () => {
        let currencyValue = allCurrencies.value;

        if (currencyValue != 'None') {
            let currencyPrice = currencies[currencyValue];
            resultSum.innerHTML = `&nbsp;${currencyPrice.toFixed(2)}&nbsp;`;
        } else {
            resultSum.innerHTML = `&nbsp;Choose the currency&nbsp;`;
        }
    })
    }
);


