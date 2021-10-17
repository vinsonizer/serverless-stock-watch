const finnhub = require('finnhub')

exports.lookup = (stock) => {
  const api_key = finnhub.ApiClient.instance.authentications['api_key']
  api_key.apiKey = 'c5lim32ad3if1qn1katg'
  const finnhubClient = new finnhub.DefaultApi()
  console.log(`finnhubClient is ${finnhubClient}`)

  finnhubClient.quote(stock.symbol, (error, data, response) => {
    console.log('inside quote function')
    if (error) {
      console.log(error)
    }
    console.log(data)
  })
}
