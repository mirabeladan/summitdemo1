import logo from "./logo.svg";
import "./App.css";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import { DataStore } from "@aws-amplify/datastore";
import { Destinations } from "./models";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

await DataStore.save(
  new Destinations({
    name: "Lorem ipsum dolor sit amet",
    date: "1970-01-01Z",
  })
);

export default App;
