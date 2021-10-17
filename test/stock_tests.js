/* eslint-env mocha */
const assert = require('assert')
const awsMock = require('aws-sdk-mock')

const testStock1 = {
  symbol: 'NICE',
  limit: 280
}

const testStock2 = {
  symbol: 'AAPL',
  limit: 280
}

const stockList = [testStock1, testStock2]

awsMock.mock('DynamoDB.DocumentClient', 'get', function (params, callback) {
  callback(null, {
    Item: testStock1
  })
})

awsMock.mock('DynamoDB.DocumentClient', 'scan', function (params, callback) {
  callback(null, {
    Items: stockList
  })
})

awsMock.mock('DynamoDB.DocumentClient', 'put', function (params, callback) {
  callback(null, {})
})

describe('Stocks', function () {
  describe('#getStock', function () {
    it('should return test stock when requested', async function () {
      const getStock = require('../backend/get_stock')
      const input = {
        pathParameters: {
          symbol: 'NICE'
        }

      }
      var result = await getStock.handler(input)
      assert.strictEqual(result.body, JSON.stringify(testStock1))
    })
  })
  describe('#getAllStocks', function () {
    it('should return stockList when requested', async function () {
      const getAllStocks = require('../backend/get_all_stocks')
      const input = { }
      var result = await getAllStocks.handler(input)
      assert.strictEqual(result.body, JSON.stringify(stockList))
    })
  })
  describe('#updateStock', function () {
    it('should return updatedStock when requested', async function () {
      const updateStock = require('../backend/update_stock')
      const updatedStock = {
        symbol: 'NICE',
        limit: 300
      }
      const input = {
        body: JSON.stringify(updatedStock)
      }
      var result = await updateStock.handler(input)
      assert.strictEqual(result.body, JSON.stringify(updatedStock))
    })
  })
})
