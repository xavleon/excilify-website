import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import SigninPage from "./pages/signin";
import ApproachPage from "./pages/approach";
import MarketingPage from "./pages/marketing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/approach" component={ApproachPage} exact />
        <Route path="/marketing" component={MarketingPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
