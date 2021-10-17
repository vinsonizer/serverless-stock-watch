const dynamo = require('./utils/dynamo')
const lambda = require('./utils/lambda')

exports.handler = async (event, context) => {
  try {
    const symbol = lambda.param(event, 'symbol')
    const result = await dynamo.get({
      symbol: symbol
    })
    return await lambda.wrapResponse(result)
  } catch (err) {
    console.log(`${JSON.stringify(err, null, 2)}`)
    return await lambda.wrapError(err)
  }
}
