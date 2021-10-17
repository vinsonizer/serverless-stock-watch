import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'
import {getApi} from "../Client"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TickerDetail = (props) => {

  const {tickerId} = useParams()
  const [ticker, setTicker] = useState({"ticker": "", "limit": 0, "currentValue": 0})

  useEffect(() => {
    if (tickerId) {
      getApi('/stocks/' + tickerId, (err, data) => {
        alert(JSON.stringify(data))
        if (err) 
          throw(err)
        setTicker({
          ...ticker,
          ticker: data.ticker,
          limit: data.limit,
          currentValue: data.currentValue
        })
      })
    }
  }, [])

  const submitHandler = () => {}

  return (<Container>
    <h1>{tickerId}</h1>
    <Container>
      <Form onSubmit={submitHandler}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="gridTicker">
            <Form.Label>Ticker</Form.Label>
            <Form.Control placeholder="Enter Ticker" value={ticker.ticker}/>
          </Form.Group>
          <Form.Group as={Col} controlId="gridLimit">
            <Form.Label>Limit</Form.Label>
            <Form.Control placeholder="Enter Limit" value={ticker.limit}/>
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

export default TickerDetail;
