const lambda = require('./utils/lambda')
const finnhub = require('./utils/finnhub')

exports.handler = async (event, context) => {
  try {
    const symbol = lambda.param(event, 'symbol')
    const result = await finnhub.lookup(symbol)
    return await lambda.wrapResponse(result)
  } catch (err) {
    console.log(`${JSON.stringify(err, null, 2)}`)
    return await lambda.wrapError(err)
  }
}
