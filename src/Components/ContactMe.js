import React, {useEffect} from 'react'
import './ContactMe.css';
function ContactMe() {
  function redirectMail(){
    window.open("https://netflix-clone-3fb1f.web.app/");
  }
  useEffect(() => {
    const triangLefttVar = document.getElementById("triangle-leftt-id");
    const triangRighttVar = document.getElementById("triangle-rightt-id");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    observer.observe(triangLefttVar);
    observer.observe(triangRighttVar);

    // Cleanup function to disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);
  return (
    <div className='contactMe-main' id='contactMe-main-id'>
    <div id='spanGreen'>04. What’s Next?</div>
    <div id='GITouch-head'>Get In Touch</div>
    <div id='git-para'>Although I’m not currently looking for any new opportunities, my inbox is always open.
    Whether you have a question or just want to say hi, I’ll try my best to get back to you!</div>
    <button type='button' id='sh-btn' onClick={redirectMail}>Say Hello</button>
    <div className="triangle-rightt" id='triangle-rightt-id'></div>
      <div className="triangle-leftt" id='triangle-leftt-id'></div>
    </div>
  )
}

export default ContactMe
