// Include the AWS SDK module
const AWS = require('aws-sdk')
// Instantiate a DynamoDB document client with the SDK
const dynamodb = new AWS.DynamoDB.DocumentClient()

const params = {
  TableName: process.env.STOCK_TABLE
}

exports.get = async (key) => {
  const idParams = {
    ...params,
    TableName: params.TableName,
    Key: key
  }
  var result = await dynamodb.get(idParams).promise()
  return result.Item
}

exports.scan = async () => {
  var result = await dynamodb.scan(params).promise()
  return result.Items
}

exports.put = async (key, item) => {
  const putParams = {
    ...params,
    TableName: params.TableName,
    Key: key,
    Item: item
  }
  console.log(`params for put is ${JSON.stringify(putParams)}`)
  return await dynamodb.put(putParams).promise()
}
