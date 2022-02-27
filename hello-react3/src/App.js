import { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent.js";

class App extends Component {
  render() {
    const name = "react";
    return (
      <div className="react">
        {name}
        <MyComponent name="vue">react</MyComponent>
      </div>
    );
  }
}

export default App;
