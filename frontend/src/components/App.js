import "./App.css"
import Header from "./Header"
import StockGrid from "./StockGrid"
import StockDetail from "./StockDetail"
import Container from "react-bootstrap/Container"
import {Route, Switch, BrowserRouter} from "react-router-dom"

const App = (props) => {

  return (<Container className="p-5">
    <Header/>
    <BrowserRouter>
      <Switch>
        <Route path="/stocks/:symbol">
          <StockDetail/>
        </Route>
        <Route path="*">
          <StockGrid/>
        </Route>
      </Switch>
    </BrowserRouter>
  </Container>);
}

export default App;
