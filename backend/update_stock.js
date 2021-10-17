const dynamo = require('./utils/dynamo')
const lambda = require('./utils/lambda')

exports.handler = async (event, context) => {
  try {
    const input = lambda.getInput(event)

    const stock = {
      symbol: input.symbol,
      limit: input.limit
    }
    await dynamo.put({
      symbol: stock.symbol
    }, stock)
    return await lambda.wrapResponse(stock)
  } catch (err) {
    console.log(`${JSON.stringify(err, null, 2)}`)
    return await lambda.wrapError(err)
  }
}
