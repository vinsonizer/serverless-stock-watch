const dynamo = require('./utils/dynamo')
const lambda = require('./utils/lambda')

exports.handler = async (event, context) => {
  try {
    const result = await dynamo.scan()
    return await lambda.wrapResponse(result)
  } catch (err) {
    console.log(`${JSON.stringify(err, null, 2)}`)
    return await lambda.wrapError(err)
  }
}
