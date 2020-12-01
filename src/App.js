import react from "react";
import AddProduct from "./addproduct";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

class App extends react.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <AddProduct />
      </>
    );
  }
}

export default App;
