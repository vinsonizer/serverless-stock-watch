import {getApi} from "./../Client"
import TickerRow from "./TickerRow"
import {useState, useEffect} from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"

const TickerGrid = (props) => {

  const [tickers, setTickers] = useState([])

  useEffect(() => {
    getApi('/stocks', (err, data) => {
      if (err) 
        throw(err)
      setTickers(data)
    })
  }, [])

  return (<Row>
    <Col>
      <Table striped="striped" bordered="bordered" hover="hover">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Limit</th>
          </tr>
        </thead>
        <tbody>
          {
            tickers.map((tick) => {
              return <TickerRow key={tick.ticker} ticker={tick}/>
            })
          }
        </tbody>
      </Table>
    </Col>
  </Row>)
}

export default TickerGrid;
