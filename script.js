//Popular Currency Values
let EUR,GBP,JPY,INR

//Get The Popular Rates Item
let us_eu = document.getElementById("us/eu")
let us_en = document.getElementById("us/en")
let us_jp = document.getElementById("us/jp")
let us_in = document.getElementById("us/in")

//Get The Rate Values Box
let rate_box = document.querySelectorAll(".rate")
rate_box.forEach(rate_box => {
    rate_box.innerHTML = `<img src="loader.svg" alt="loading">`
});

//Get The Form Section
let fromCurrency = document.getElementById('from-currency');
let toCurrency = document.getElementById('to-currency');
let converterForm = document.getElementById('converter-form');
let resultValue = document.getElementById('result');

// Populate currency dropdowns
const currencies = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BCH', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTG', 'BWP', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNH', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DASH', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'EOS', 'ETB', 'ETH', 'EUR', 'FJD', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTC', 'LYD', 'MAD', 'MDL', 'MKD', 'MMK', 'MOP', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SLL', 'SOS', 'SRD', 'SVC', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VND', 'XAF', 'XAG', 'XAU', 'XCD', 'XLM', 'XOF', 'XRP', 'YER', 'ZAR', 'ZMW'];

currencies.forEach(currency => {
    const option1 = new Option(currency, currency);
    const option2 = new Option(currency, currency);
    fromCurrency.add(option1);
    toCurrency.add(option2);
});

// Set default values
fromCurrency.value = 'INR';
toCurrency.value = 'USD';


//Rate Fetching Function
(async () => {

const url = 'https://currencyapi-net.p.rapidapi.com/rates?output=JSON&base=USD';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c7b08594ddmshb6d28f10bdc4e40p1e1865jsn376af869347d',
		'x-rapidapi-host': 'currencyapi-net.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result)
    us_eu.innerHTML = result.rates.EUR.toFixed(2)
    us_en.innerHTML = result.rates.GBP.toFixed(2)
    us_jp.innerHTML = result.rates.JPY.toFixed(2)
    us_in.innerHTML = result.rates.INR.toFixed(2)

}catch (error) {
	console.error(error);
}
})()


//Currency Convert Function
let converCurrency = async (from , to , amount) => {
	const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c7b08594ddmshb6d28f10bdc4e40p1e1865jsn376af869347d',
		'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);
    resultValue.innerHTML = `Result : ${amount} ${from} = ${data.result.toFixed(2)} ${to}`
} catch (error) {
	console.error(error);
}
}


//Submit Button Function
converterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const from = fromCurrency.value;
    const to = toCurrency.value;
    converCurrency(from , to , amount);
});


//copyright year change---------------------------------------------------------
let currentyear = document.getElementById("copyYear")
let actualYera = new Date()
currentyear.innerHTML = actualYera.getFullYear()