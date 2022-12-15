import {
  Indexpage, Homepage, Loginpage, Brachespage, Contactpage,
  Forgetpage, Registerpage, Aboutpage,Librarianpage,LibrarianOperationsPage,AddBooksPage,DeleteBooksPage
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
          <Route path="/" element={<Indexpage />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/branches" element={<Brachespage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/forget" element={<Forgetpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/librarian" element={<Librarianpage/>}/>
          <Route path="/librarianOperationspage" element={<LibrarianOperationsPage/>}/>
          <Route path="/AddBookspage" element={<AddBooksPage/>}/>
          <Route path="/DeleteBookspage" element={<DeleteBooksPage/>}/>
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
