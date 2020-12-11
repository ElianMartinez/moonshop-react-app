import react from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
class App extends react.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
          <Route path="/main/register">
              <Register></Register>
              </Route>
            <Route path="/main/login">
              <Login></Login>
              </Route>
              <Route  path="/">
            <Header />
              <Main />
            </Route>
        </Switch>
        </Router>
      </>
    );
  }
}

export default App;
