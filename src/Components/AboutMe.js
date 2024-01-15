import React, { useEffect } from 'react'
import './AboutMe.css';

function AboutMe() {
  useEffect(() => {
    const targetImg = document.getElementById("target-img");
    const headingAndLineVar = document.getElementById("headingAndLine-id");
    const allTechVar = document.getElementById("allTech-id");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    observer.observe(targetImg);
    observer.observe(headingAndLineVar);
    observer.observe(allTechVar);

    // Cleanup function to disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);
  return (
    <div className='main-aboutMe' style={{marginTop:'50vh'}}>
        <div className="headingAndLine" id='headingAndLine-id'>
        <span id='aboutMeHead'> <span id='spanGreen'>01.</span> About Me</span>
        <div className="horizontalLine"></div>
        </div>
      <div className="aboutMeTextArea">
        <div className="aboutMeText">
        Hello! My name is Prakhar and I enjoy creating things that live on the internet.
        My interest in web development started back in 2019 when I decided to do an intership in webDev.
        Turned out teaching me a lot about HTML & CSS!
        Fast-forward to today, and Ive had the privilege of working at a mutli national service-based corporation.
        My main focus these days is building accessible,
        inclusive products and digital experiences at Accenture for a variety of clients.
        <span id='allTech-head'>Here are a few technologies I've been working with recently:</span>
        <div className = "allTech" id='allTech-id'>
          <span>JavaScript</span>(ES6+)
        <span>TypeScript</span>
        <span>React</span>
        <span>Eleventy</span>
        <span>Node.js</span>
        <span>WordPress</span>
        <span>CSS3</span>
        </div>
        </div>
        <img 
        className="animated-img"
        id="target-img"
          src={require('../assets/myPic1.jpg')} 
          alt="logo" 
        />
        <div className="img-frame"></div>
        </div>
    </div>
  )
}

export default AboutMe
