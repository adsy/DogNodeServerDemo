//Grabs information from CoinMarketCap API on 3 coins and adds when page loads.
//Use proxy website to get around CORS policy.
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const COIN_API = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=AUD&CMC_PRO_API_KEY=a9c6f35a-153a-4123-8709-7782164e2e2b";

const COIN_promise = fetch(proxyUrl + COIN_API)

COIN_promise.then(function (response) {

    const processingPromise = response.json();

    return processingPromise;
})
    .then(function (processedResponse) {

        for (let i = 0; i < processedResponse.data.length; i++) {

            if (processedResponse.data[i].symbol === "XTZ") {

                document.getElementById("xtz").textContent += "$" + parseFloat(processedResponse.data[i].quote.AUD.price).toFixed(2);

            }
            else if (processedResponse.data[i].symbol === "LINK") {

                document.getElementById("link").textContent += "$" + parseFloat(processedResponse.data[i].quote.AUD.price).toFixed(2);

            }
            else if (processedResponse.data[i].symbol === "BAT") {

                document.getElementById("bat").textContent += "$" + parseFloat(processedResponse.data[i].quote.AUD.price).toFixed(2);

            }
        }


    }
    );



//Function created to allow user of website to search for Crypto if they know the code of the coin.
function searchCrypto() {

    let searchCode;
    let searchCurrency;
    let key = 'a9c6f35a-153a-4123-8709-7782164e2e2b';
    let cmc_api = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?"

    searchCode = (document.getElementById("code").value);
    searchCode = searchCode.toUpperCase();
    
    
    cmc_api += "symbol=" + searchCode + "&CMC_PRO_API_KEY=" + key;

    const CMC_promise = fetch(proxyUrl + cmc_api)

    CMC_promise.then(function (response) {

        const processingPromise = response.json();

        return processingPromise;
    })
        .then(function (processedResponse) {
            const priceP = document.querySelector(".cryptoPrice");
            const idP = document.querySelector(".cryptoID");
            const symbolP = document.querySelector(".cryptoSymbol");
            const rankP = document.querySelector(".cmcRank");
            const info = document.querySelector(".cryptoInfo");
            let cmc_rank, id, name, price, symbol;
            let coin = processedResponse.data;


            if (processedResponse.status.error_code === 400) {
                console.error('Error')
                info.innerText = "Incorrect Crypto Code - Try Again"
                priceP.innerText = "";
                idP.innerText = "";
                symbolP.innerText = "";
                rankP.innerText = "";
            } else {
                



                for (var key in coin) {
                    cmc_rank = coin[key].cmc_rank;
                    id = coin[key].id;
                    price = coin[key].quote.USD.price;
                    symbol = coin[key].symbol;
                    name = coin[key].name;

                }

                info.innerText = name;

                
                priceP.innerText = "Price: $" + parseFloat(price).toFixed(2);
                idP.innerText = "ID: " + id;
                symbolP.innerText = "Symbol: " + symbol;
                rankP.innerText = "Rank: " + cmc_rank;

            }


        }
        );
}