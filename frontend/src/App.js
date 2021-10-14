import {getApi} from "./Client"
import "./App.css"
import TickerRow from "./TickerRow"
import {useState, useEffect} from "react"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

const App = (props) => {

  const [tickers, setTickers] = useState([])

  useEffect(() => {
      getApi('/stocks', (err, data) => {
        if(err) throw(err)
        setTickers(data.tickers);
      })
  }, [])

  return (
    <Container className="p-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Limit</th>
          </tr>
        </thead>
        <tbody>
          { tickers.map((tick) => {
            return <TickerRow key={tick.ticker} ticker={tick}/>
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
