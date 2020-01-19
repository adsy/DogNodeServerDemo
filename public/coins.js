const COIN_API = "https://coinlib.io/api/v1/coinlist?key=cf4bb8c07a196138&pref=AUD&page=1&order=volume_desc";

let coin_prices = new Array(3);

const COIN_promise = fetch(COIN_API);
COIN_promise.then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
})
    .then(function (processedResponse) {
        for (let i = 0; i < processedResponse.coins.length; i++) {
            if (processedResponse.coins[i].symbol === "XTZ") {
                document.getElementById("xtz").textContent += "$" + parseFloat(processedResponse.coins[i].price).toFixed(2);
            }
            else if (processedResponse.coins[i].symbol === "LINK") {
                document.getElementById("link").textContent += "$" + parseFloat(processedResponse.coins[i].price).toFixed(2);
            }
            else if (processedResponse.coins[i].symbol === "BAT") {
                document.getElementById("bat").textContent += "$" + parseFloat(processedResponse.coins[i].price).toFixed(2);
            }
        }
        }
    );