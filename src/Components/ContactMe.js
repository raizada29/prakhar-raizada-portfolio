import React from 'react'
import './ContactMe.css';
function ContactMe() {
  function redirectMail(){
    window.open("https://netflix-clone-3fb1f.web.app/");
  }
  return (
    <div className='contactMe-main' style={{marginTop:'40vh'}}>
    <div id='spanGreen'>04. What’s Next?</div>
    <div id='GITouch-head'>Get In Touch</div>
    <div id='git-para'>Although I’m not currently looking for any new opportunities, my inbox is always open.
    Whether you have a question or just want to say hi, I’ll try my best to get back to you!</div>
    <button type='button' id='sh-btn' onClick={redirectMail}>Say Hello</button>
    <div className="triangle-rightt"></div>
      <div className="triangle-leftt"></div>
    </div>
  )
}

export default ContactMe
