import {
  Indexpage, Homepage, Loginpage, Brachespage, Contactpage,
  Forgetpage, Registerpage, Aboutpage
} from './components/pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * This is helper function to display the all pages
 * @returns 
 */
function App() {
  return (
    <div>

      <Router>

        <Routes>
          <Route path="/index" element={<Indexpage />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/branches" element={<Brachespage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/forget" element={<Forgetpage />} />
          <Route path="/register" element={<Registerpage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
