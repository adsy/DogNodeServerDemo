
// const rp = require('request-promise');
// const requestOptions = {
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
//   qs: {
//     'symbol': 'BAT,XTZ,LINK'
//   },
//   headers: {
//     'CMC_PRO_API_KEY': 'a9c6f35a-153a-4123-8709-7782164e2e2b'
    
//   },
//   json: true,
//   gzip: true
// };

var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=AUD&CMC_PRO_API_KEY=a9c6f35a-153a-4123-8709-7782164e2e2b'
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    console.log(data);
    return data;
  });
