//Use this proxy URL to avoid Same-Origin-Policy.
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const COIN_API = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=AUD&CMC_PRO_API_KEY=a9c6f35a-153a-4123-8709-7782164e2e2b";

let coin_prices = new Array();

const xtz_amt = 'XXX';
const bat_amt = 'XXX';
const link_amt = 'XXX';

const COIN_promise = fetch(proxyUrl + COIN_API)

COIN_promise.then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
})
    .then(function (processedResponse) {
        for (let i = 0; i < processedResponse.data.length; i++) {

            if (processedResponse.data[i].symbol === "XTZ") {
                document.getElementById("xtz").textContent += "$" + parseFloat(processedResponse.data[i].quote.AUD.price).toFixed(2);
                coin_prices.push(parseFloat(processedResponse.data[i].quote.AUD.price).toFixed(2));
            }
            else if (processedResponse.data[i].symbol === "LINK") {
                document.getElementById("link").textContent += "$" + parseFloat(processedResponse.data[i].quote.AUD.price).toFixed(2);
                coin_prices.push(parseFloat(processedResponse.data[i].quote.AUD.price).toFixed(2));
            }
            else if (processedResponse.data[i].symbol === "BAT") {
                document.getElementById("bat").textContent += "$" + parseFloat(processedResponse.data[i].quote.AUD.price).toFixed(2);
                coin_prices.push(parseFloat(processedResponse.data[i].quote.AUD.price).toFixed(2));
            }
        }

        for (let i = 0; i < coin_prices.length; i++) {
            console.log(coin_prices[i]);
        }


        document.getElementById("total").textContent += "$" + parseFloat((coin_prices[0] * xtz_amt) + (coin_prices[1] * link_amt) + (coin_prices[2] * bat_amt)).toFixed(2);


    }
    );


