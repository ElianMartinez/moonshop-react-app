import "./main.css";
import ProductHome from "./Product-home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductHome} />
          <Route exact path="/product" component={ProductHome} />
        </Switch>
      </Router>
    </>
  );
};

export default Main;
