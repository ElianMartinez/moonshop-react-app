import "./main.css";
import ProductHome from "./Product-home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ViewProduct from "./ViewProduct";

const Main = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductHome} />
          <Route path="/ViewProduct" component={ViewProduct} />
        </Switch>
      </Router>
    </>
  );
};

export default Main;
