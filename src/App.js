import react from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

class App extends react.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
