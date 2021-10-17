const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
}

exports.wrapResponse = (result) => {
  console.log(`wrapping ${JSON.stringify(result)}`)
  return { statusCode: 200, headers: headers, body: JSON.stringify(result) }
}

exports.wrapError = (err) => {
  return { statusCode: 500, headers: headers, body: JSON.stringify(err) }
}

exports.param = (input, key) => {
  return input.pathParameters[key]
}

exports.getInput = (event) => {
  return JSON.parse(event.body)
}
