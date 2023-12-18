import React from 'react'
import './MainPortFolio.css';
import $ from 'jquery';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';
export default function MainPortFolio() {
  (function () {
    var words = ["MAKE","PRODUCE","FORM","ASSEMBLE","CONSTRUCT","MANUFACTURE","FABRICATE","CREATE","SHAPE","MODEL"],
    i = 0;
    setInterval(function(){ $('#MWL').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 2000)
  })();
  return (
    <>
    <div className='main-portfolio'>
      <span id='HI'>
        Hi, my name is
      </span>
      <span id='myName'>
        Prakhar Raizada.
      </span>
      <span className= 'changingText'>
        I <span id="MWL">BUILD</span>
      </span>
      <span className='third-line'>things for the web.</span>
      <span className="para">
        I'm a software engineer specializing in building
        and ocasionally designing exceptional digital
        experiences. Currently, I'm focused on building
        accessible, human-centered products at <span id='accenture'>Accenture</span>
      </span>
      <div className="triangle-right"></div>
      <div className="triangle-left"></div>
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
    </>
  )
}
