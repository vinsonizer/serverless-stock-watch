import "./App.css"
import Header from "./Header"
import TickerGrid from "./TickerGrid"
import TickerDetail from "./TickerDetail"
import Container from "react-bootstrap/Container"
import {Route, Switch, BrowserRouter} from "react-router-dom"

const App = (props) => {

  return (<Container className="p-5">
    <Header/>
    <BrowserRouter>
      <Switch>
        <Route path="/ticker/:tickerId">
          <TickerDetail/>
        </Route>
        <Route path="*">
          <TickerGrid/>
        </Route>
      </Switch>
    </BrowserRouter>
  </Container>);
}

export default App;
