const finnhub = require('finnhub')

const apiKey = finnhub.ApiClient.instance.authentications.api_key
apiKey.apiKey = process.env.API_KEY
const finnhubClient = new finnhub.DefaultApi()

function getAsyncQuote (symbol) {
  return new Promise(function (resolve, reject) {
    finnhubClient.quote(symbol, function (err, data, response) {
      if (err) reject(err)
      else resolve(data, response)
    })
  })
}

exports.lookup = async (symbol) => {
  const quote = await getAsyncQuote(symbol)
  return {
    currentPrice: quote.c,
    change: quote.d,
    percentChange: quote.dp,
    highForDay: quote.h,
    lowForDay: quote.l,
    openForDay: quote.o,
    previousClose: quote.pc
  }
}
