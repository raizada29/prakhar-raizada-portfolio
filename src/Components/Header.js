import React, {useState, useEffect} from 'react'
import './Header.css';
  

function Navbar() {

  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 
  useEffect(()=> {
      const handleScroll = () => {
         let moving = window.pageYOffset
         setVisible(position>moving);
         setPosition(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
         window.removeEventListener("scroll", handleScroll);
      })
  })
let navbarCustom;

if(window.pageYOffset===0)
{
navbarCustom ="hidden-border";
}
else
{
   navbarCustom = visible ? "visible" : "hidden";
}

  const scrollToSection = () => {
    // Find the target section by its ID
    const targetSection = document.getElementById('headingAndLine-id');
    // Scroll to the target section
    const offset = targetSection ? targetSection.getBoundingClientRect().top - 100 : 0;
    if (targetSection) {
      window.scrollTo({
        top: window.scrollY + offset,
        behavior: 'smooth',
      });
      // targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToSection2 = () => {
    // Find the target section by its ID
    const targetSection2 = document.getElementById('main-projects-id');
    const offset = targetSection2 ? targetSection2.getBoundingClientRect().top - 100 : 0;
    // Scroll to the target section
    if (targetSection2) {
      window.scrollTo({
        top: window.scrollY + offset,
        behavior: 'smooth',
      });
    }
  };
  const scrollToSection3 = () => {
    // Find the target section by its ID
    const targetSection3 = document.getElementById('contactMe-main-id');
    const offset = targetSection3 ? targetSection3.getBoundingClientRect().top - 0 : 0;
    // Scroll to the target section
    if (targetSection3) {
      window.scrollTo({
        top: window.scrollY + offset,
        behavior: 'smooth',
      });
  };
}
const scrollToSection4 = () => {
  // Find the target section by its ID
  const targetSection4 = document.getElementById('Experience-page-main-class-id');
  const offset = targetSection4 ? targetSection4.getBoundingClientRect().top - 100 : 0;
  // Scroll to the target section
  if (targetSection4) {
    window.scrollTo({
      top: window.scrollY + offset,
      behavior: 'smooth',
    });
  }
};
const resumeDownload =()=>
{
 window.open('https://drive.google.com/drive/folders/1GDpd-vHv-YYT1AbJ-7T6xVsXEqJ7ioNM?usp=drive_link');
}

  return (
    <>
    <header className={navbarCustom}>
      <ul>
        <li>
          01.<span onClick={scrollToSection}>About</span>
        </li>
        <li>
          02.<span onClick={scrollToSection4}>Experience</span>
        </li>
        <li>
          03.<span onClick={scrollToSection2}>Work</span>
        </li>
        <li>
          04.<span onClick={scrollToSection3}>Contact</span>
        </li>
        <li>
          <button className='resume-btn' onClick={resumeDownload}>Resume
          </button>
        </li>
      </ul>
    </header>
    </>
  )
  }

export default Navbar
