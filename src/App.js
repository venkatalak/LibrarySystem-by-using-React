import Indexpage from './components/pages/index/Index page.js';
import Homepage from './components/pages/home/Home page';
import Loginpage from './components/pages/login/Loginpage';
import Branchespage from './components/pages/branches/Branches';
import Contactpage from './components/pages/contact/Contactpage';
import Forgetpage from './components/pages/forget/forgetpage';
import Registerpage from './components/pages/register/registerpage';
import Aboutpage from './components/pages/about/About';

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
