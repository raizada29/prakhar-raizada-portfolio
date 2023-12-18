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

  return (
    <>
    <header className={navbarCustom}>
      <ul>
        <li>
        
        </li>
        <li>
          01.<span>About</span>
        </li>
        <li>
          02.<span>Experience</span>
        </li>
        <li>
          03.<span>Work</span>
        </li>
        <li>
          04.<span>Contact</span>
        </li>
        <li>
          <button className='resume-btn'>Resume
          </button>
        </li>
      </ul>
    </header>
    </>
  )
  }

export default Navbar
