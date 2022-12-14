import { Indexpage, Homepage, Loginpage, Brachespage, Contactpage,
  Forgetpage, Registerpage, Aboutpage } from './components/pages'
//import { BrowserRouter as Router, Route, Link, NavLink,Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <Indexpage />
      <Homepage />
      <Loginpage />
      <Brachespage />
      <Forgetpage />
      <Registerpage />
      <Aboutpage />
      <Contactpage />
    </div>
  );
}

export default App;
