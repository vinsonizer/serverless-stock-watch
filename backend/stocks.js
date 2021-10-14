"use strict";

// Include the AWS SDK module
const AWS = require('aws-sdk')
// Instantiate a DynamoDB document client with the SDK
const dynamodb = new AWS.DynamoDB.DocumentClient()


exports.get_all = async (event, context) => {

  const params = {
    TableName: process.env.TICKER_TABLE,
  }
  const result = await dynamodb.scan(params).promise()

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      tickers: result.Items
    })
  }
  return response
}

exports.get_ticker = async (event, context) => {
  const params = {
    TableName: process.env.TICKER_TABLE,
    Key: {
      ticker: event.pathParameters.ticker
    }
  }

  const result = await dynamodb.get(params).promise()
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(result.Item, null, 2)
  }
  return response
}

exports.update_ticker = async (event, context) => {
  console.log(`event is ${JSON.stringify(event)}`)

  const input = JSON.parse(event.body)

  const ticker = {
    ticker: input.ticker,
    limit: input.limit
  }

  const params = {
    TableName: process.env.TICKER_TABLE,
    Key: {
      ticker: ticker.ticker
    },
    Item: ticker
  }

  const response = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
  }
  try {
    await dynamodb.put(params).promise()
    response.statusCode = 200
    response.body = JSON.stringify({
      ticker: ticker
    })
  } catch (err) {
    response.statusCode = 500
    response.body = JSON.stringify(err)
  }
  return response
}