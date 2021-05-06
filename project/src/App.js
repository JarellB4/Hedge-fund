import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import SignUp from './screens/Signup';
import ContractorSignUp from './screens/ContractorSignup'
function App() {
  return (
    <Router>
    <Route path= '/' exact component={SignUp} />
    <Route path= '/dashboard'  component={Dashboard} />
    <Route path= '/dashboard/ContractorSignup' component={ ContractorSignUp} />
   



    </Router>
   
  )
}

export default App;
