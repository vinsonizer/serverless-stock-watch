import {getApi} from "./Client"

const App = (props) => {

  const getServiceEndpoint = () => {
    console.log("ServiceEndpoint: " + process.env.REACT_APP_ENDPOINT)
    getApi("/stocks/NICE", (err, data) => {
      if(err) console.log(err)
      console.log(data)
    })
    return "Hi";
  }

  return (
    <div>
      <h1>{getServiceEndpoint()}</h1>
    </div>
  );
}

export default App;
