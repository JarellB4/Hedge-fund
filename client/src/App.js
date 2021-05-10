// import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Screens/Dashboard'
import SignUp from './Screens/Signup';
import ContractorSignUp from './Screens/ContractorSignup'
import ContractorDashboard from './Screens/ContractorDashboard'
import SignIn from './Screens/SignIn'
import ContractorSignIn from './Screens/ContractorSignIn'
function App() {
  return (
    <Router>
    <Route path= '/' exact component={SignIn} />
    <Route path= '/SignUp' exact component={SignUp} />
    <Route path= '/Dashboard'  component={Dashboard} />
    <Route path= '/ContractorSignup'  component={ ContractorSignUp} />
    <Route path= '/ContractorDashboard'  component={ContractorDashboard} />
    <Route path= '/ContractorSignIn'  component={ ContractorSignIn} />
   



    </Router>
   
  )
}

export default App;
