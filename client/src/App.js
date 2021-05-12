// import logo from './logo.svg';
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SignUp from "./Screens/Signup";
import ContractorSignUp from "./Screens/ContractorSignup";
import ContractorDashboard from "./Screens/ContractorDashboard";
import SignIn from "./Screens/SignIn";
import ContractorSignIn from "./Screens/ContractorSignIn";
import Main from "./Screens/Main";
import Header from './components/Header'
import Footer from './components/Footer'
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Wrapper>
        <Switch>
        <Route path exact path {["/"} />
        <Route path="/SignUp" exact {SignUp} />
        <Route path="/ContractorSignup" {ContractorSignUp} />
        <Route path="/ContractorDashboard" {ContractorDashboard} />
        <Route path="/ContractorSignIn" {ContractorSignIn} />
        <Route path="/Main" {Main} />
        </Switch>
        </Wrapper>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
