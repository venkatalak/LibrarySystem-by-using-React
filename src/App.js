import { Indexpage, Homepage, Loginpage, Brachespage, Contactpage,
  Forgetpage, Registerpage, Aboutpage } from './components/pages'
  import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
  function App() {
  return (
    <div>
      {/* <Indexpage />
      
      <Loginpage />
      <Brachespage />
      <Forgetpage />
      <Registerpage />
      <Aboutpage />
      
      
      <Navbar /> */}
      
      <Router>
      
        <Routes>
         <Route path="/Home" element={<Homepage/>}/>
         <Route path="/branches" element={<Brachespage/>}/>
         <Route path="/about" element={<Aboutpage/>}/>
         <Route path="/contactpage"   element={<Contactpage />}/>
         {/* <Route path="/angular"  element={<Angular_fun/>}/> */}
         {/* <Route path="/node"  element={<Node_fun/>}/> */}
         </Routes>
      </Router>
    </div>
  );
}

export default App;
