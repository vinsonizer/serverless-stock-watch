import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'
import {getApi} from "../Client"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const StockDetail = (props) => {

  const {symbol} = useParams()
  const [stock, setStock] = useState({"symbol": "", "limit": 0, "currentValue": 0})

  useEffect((stock) => {
    if (symbol) {
      getApi('/stocks/' + symbol, (err, data) => {
        if (err)
          throw(err)
        setStock({
          ...stock,
          symbol: data.symbol,
          limit: data.limit,
          currentValue: data.currentValue
        })
      })
    }
  }, [symbol])

  const submitHandler = () => {}

  return (<Container>
    <h1>{symbol}</h1>
    <Container>
      <Form onSubmit={submitHandler}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="gridSymbol">
            <Form.Label>Symbol</Form.Label>
            <Form.Control placeholder="Enter Symbol" value={stock.symbol}/>
          </Form.Group>
          <Form.Group as={Col} controlId="gridLimit">
            <Form.Label>Limit</Form.Label>
            <Form.Control placeholder="Enter Limit" value={stock.limit}/>
          </Form.Group>
        </Row>

        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  </Container>);

}

export default StockDetail;
