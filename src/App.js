import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routers from "./component/routes/router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
