import { ClientProvider } from "./utils/ClientState";
import { ContractorProvider } from "./utils/ContractorState";
import { ContractorJobsProvider } from "./utils/ContractorJobsState";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientSignUp from "./Pages/ClientSignup";
import ContractorSignup from "./Pages/ContractorSignup";
import ContractorSearch from "./Pages/ContractorSearch";
import ContractorQuotes from "./Pages/ContractorQuotes";
import SignIn from "./Pages/SignIn";
import ClientMain from "./Pages/ClientMain";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
     <Router>
       <div>
         <ClientProvider>
           <ContractorProvider>
             <ContractorJobsProvider>
               <Header />
               <Wrapper>
                 <Switch>
                   <Route exact path={["/"]}>
                     <SignIn />
                   </Route>
                   <Route exact path={["/ClientSignUp"]}>
                     <ClientSignUp />
                   </Route>
                   <Route exact path={["/ContractorSignup"]}>
                     <ContractorSignup />
                   </Route>
                   <Route exact path={["/ContractorSearch"]}>
                     <ContractorSearch />
                   </Route>
                   <Route exact path={["/ContractorQuotes"]}>
                     <ContractorQuotes />
                   </Route>
                   <Route exact path={["/ClientMain"]}>
                     <ClientMain />
                   </Route>
                 </Switch>
               </Wrapper>
               <Footer />
             </ContractorJobsProvider>
           </ContractorProvider>
         </ClientProvider>
       </div>
     </Router>
   );
 }

export default App;
