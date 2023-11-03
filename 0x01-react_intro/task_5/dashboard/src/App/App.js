import logo from "../assets/holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="Logo" />
        <h1 className="App-title">School dashboard</h1>
      </div>
      <div class="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label forhtml="email">Email address: </label>
          <input type="email" name="email"></input>
          <label forhtml="password">Password: </label>
          <input type="password" name="password"></input>
          <button>Ok</button>
        </form>
      </div>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    </div>
  );
}

export default App;
