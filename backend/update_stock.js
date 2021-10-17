const dynamo = require('./utils/dynamo')
const lambda = require('./utils/lambda')

exports.handler = async (event, context) => {
  try {
    const input = lambda.getInput(event)

    const stock = {
      symbol: input.symbol,
      limit: input.limit
    }
    console.log(`stock is ${JSON.stringify(stock)}`)
    const result = await dynamo.put({
      symbol: stock.symbol
    }, stock)
    console.log(`put result is ${JSON.stringify(result)}`)
    return await lambda.wrapResponse(stock)
  } catch (err) {
    console.log(err)
    return await lambda.wrapError(err)
  }
}
