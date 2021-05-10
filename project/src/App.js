import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import SignUp from './screens/Signup';
import ContractorSignUp from './screens/ContractorSignup'
import ContractorDashboard from './screens/ContractorDashboard'
import SignIn from './screens/SignIn'
import ContractorSignIn from './screens/ContractorSignIn'
function App() {
  return (
    <Router>
    <Route path= '/' exact component={SignUp} />
    <Route path= '/SignIn' exact component={SignIn} />
    <Route path= '/dashboard'  component={Dashboard} />
    <Route path= '/ContractorSignup'  component={ ContractorSignUp} />
    <Route path= '/ContractorDashboard'  component={ ContractorDashboard} />
    <Route path= '/ContractorSignIn'  component={ ContractorSignIn} />
   



    </Router>
   
  )
}

export default App;
