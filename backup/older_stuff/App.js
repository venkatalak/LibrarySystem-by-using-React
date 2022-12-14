import Indexpage from './files/Index page.js';
import Homepage from './files/Home page';
import './files/Home page.css'
import './files/App.css';
import Loginpage from './files/Loginpage';
import './files/Loginpage.css';
import Aboutpage from './files/About';
import './files/About.css';
import Branchespage from './files/Branches';
import './files/Branches.css';
import Contactpage from './files/Contactpage';
import './files/Contactpage.css';
import Footer from './files/common/footerpage.js';

//import { BrowserRouter as Router, Route, Link, NavLink,Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <Indexpage />
      <Homepage />
      <Loginpage />
      <Aboutpage />
      <Branchespage />
      <Contactpage />
      <Footer />

    </div>
  );
}

export default App;
