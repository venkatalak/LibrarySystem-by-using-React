import Indexpage from './components/Index page.js';
import Homepage from './components/Home page';
import Loginpage from './components/Loginpage';
import Aboutpage from './components/About';
import Branchespage from './components/Branches';
import Contactpage from './components/Contactpage';
import Forgetpage from './components/forgetpage';
import Registerpage from './components/registerpage';

//import { BrowserRouter as Router, Route, Link, NavLink,Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <Indexpage />
      <Homepage />
      <Loginpage />
      <Branchespage />
      <Forgetpage />
      <Registerpage />
      <Aboutpage />
      <Contactpage />
    </div>
  );
}

export default App;
