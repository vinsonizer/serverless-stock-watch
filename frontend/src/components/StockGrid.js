import {getApi} from "./../Client"
import StockRow from "./StockRow"
import {useState, useEffect} from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"

const StockGrid = (props) => {

  const [stocks, setStocks] = useState([])

  useEffect(() => {
    getApi('/stocks', (err, data) => {
      if (err)
        throw(err)
      setStocks(data)
    })
  }, [])

  return (<Row>
    <Col>
      <Table striped="striped" bordered="bordered" hover="hover">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Limit</th>
          </tr>
        </thead>
        <tbody>
          {
            stocks.map((stock) => {
              return <StockRow key={stock.symbol} stock={stock}/>
            })
          }
        </tbody>
      </Table>
    </Col>
  </Row>)
}

export default StockGrid;
