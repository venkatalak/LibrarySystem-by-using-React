import Indexpage from './files/Index page.js';
import Homepage from './files/Home page';
import Loginpage from './files/Loginpage';
import Aboutpage from './files/About';
import Branchespage from './files/Branches';
import Contactpage from './files/Contactpage';
import Forgetpage from './files/forgetpage';
import Registerpage from './files/registerpage';




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
