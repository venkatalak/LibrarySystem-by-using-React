import React from 'react';
import Footer from './files/common/footerpage';
/**
 * This is the helper function to create branches page for library system
 * @returns 
 */

function Brachespage() {
  return (
    <div>
      <div className="menu">
        <ul>

          <li><a href="Home page.html">Home</a></li>
          <li>CSE
            <div className="submenu1">
              <ul>
                <li><a href="https://www.gutenberg.org/ebooks/729">1. Hackers</a></li>
                <li><a href="https://www.goodreads.com/en/book/show/55801217-the-ascent-of-information">2. The Ascent of
                  Information</a></li>
                <li><a href="https://www.goodreads.com/en/book/show/44151058-daily-coding-problem">3. Daily Coding
                  Problem</a></li>
                <li><a
                  href="https://www.pdfdrive.com/algorithms-to-live-by-the-computer-science-of-human-decisions-e194571588.html">4.
                  Algorithms to Live By</a></li>
              </ul>
            </div>


          </li>
          <li>ECE
            <div className="submenu1">
              <ul>
                <li><a
                  href="https://www.selfstudys.com/gate/electronics-communication-engineering/online/exam/engineering-mathematics/1-calculus">1.Engineering
                  Mathematics</a></li>
                <li><a href="https://testbook.com/gate/general-aptitude-book">General Aptitude</a></li>
                <li><a href="https://mrcet.com/downloads/digital_notes/EEE/Network%20Theory.pdf">Network Theory</a></li>
                <li><a
                  href="https://www.shahucollegelatur.org.in/Department/Studymaterial/sci/it/BCA/FY/digielec.pdf">Digital
                  Electronics</a></li>
              </ul>
            </div>
          </li>
          <li>MECH
            <div className="submenu1">
              <ul>
                <li><a
                  href="https://www.vtc1.org/cms/lib/PA03000913/Centricity/Domain/21/Machinerys%20Handbook%2029th%20Edition.pdf">1.Machinery’s
                  Handbook</a></li>
                <li><a href="http://fma.if.usp.br/~eabdalla/exacta/000m1.pdf">2.Fluid Mechanics</a></li>
                <li><a href="https://uowa.edu.iq/filestorage/file_1551541671.pdf">3.Thermodynamics</a></li>
                <li><a href="https://ahtt.mit.edu/wp-content/uploads/2019/08/AHTTv500.pdf">4.Heat Transfer</a></li>
              </ul>
            </div>
          </li>
          <li>CHEMICAL
            <div className="submenu1">
              <ul>
                <li><a href="https://www.pdfdrive.com/mass-transfer-in-chemical-engineering-processes-e33411684.html">1.Mass
                  Transfer Operations</a></li>
                <li><a href="https://www.bau.edu.jo/UserPortal/UserProfile/PostsAttach/57412_6499_1.pdf">2.Chemical Reaction
                  Engineering</a></li>
                <li><a href="https://www.nitsri.ac.in/Department/Chemical%20Engineering/TP2.pdf">3.Transport Phenomena</a>
                </li>
                <li><a
                  href="https://www.eng.uc.edu/~beaucag/Classes/ChEThermoBeaucage/Books/Bruce%20E.%20Poling,%20John%20M.%20Prausnitz,%20John%20P.%20O%27Connell%20-%20The%20properties%20of%20gases%20and%20liquids-McGraw-Hill%20Professional%20(2000).pdf">4.Properties
                  of Gases and Liquids</a></li>
              </ul>
            </div>
          </li>
          <li>CIVIL
            <div className="submenu1">
              <ul>
                <li><a
                  href="https://akawut.files.wordpress.com/2017/12/530314_structures_or_why_things_2-2560.pdf">1.Structures:
                  Or Why Things Don’t Fall Down</a></li>
                <li><a href="https://www.uceb.eu/DATA/Books/THE%20CIVIL%20ENGINEERING%20HANDBOOK.pdf">2.The Civil
                  Engineering Handbook</a></li>
                <li><a href="https://www.amazon.in/Man-Iron-Telford-Building-Britain/dp/1408837463">3.Man of Iron: Thomas
                  Telford and the Building of Britain</a></li>
                <li><a href="https://dvr1980.files.wordpress.com/2020/09/strength-of-materials-by-khurmi-.pdf">4.Strength of
                  Materials: Mechanics of Solids</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div>< Footer /></div>
    </div>
  )
}
export default Brachespage;