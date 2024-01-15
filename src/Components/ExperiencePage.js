import React, {useEffect} from 'react'
import './ExperiencePage.css'

const ExperiencePage = () => {
    useEffect(() => {
        const headingAndLineVar = document.getElementById("headingAndLine-expPage-id");
        const mainTabVar = document.getElementById("mainExperience-tab-id");
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 }); 
    
        observer.observe(headingAndLineVar);
        observer.observe(mainTabVar);
        return () => observer.disconnect();
      }, []);

  return (
    <div className='Experience-page-main-class' id='Experience-page-main-class-id' data-spy="scroll" data-target="#myScrollspy" data-offset="20">
    <div className="headingAndLine-expPage" id='headingAndLine-expPage-id'>
    <span id='aboutMeHead-expPage'> <span id='spanGreen'>02.</span>Work Experience</span>
    <div className="horizontalLine"></div>
</div>
<div className='mainExperience-tab-class' id='mainExperience-tab-id'>
    <nav className='lefthandside-nav' id="myScrollspy">
    <ul id='ul-list-id'>
      <li>
        <li id='primary-list-item'>
        <a href="#section1"> Accenture India, Bengaluru</a>
            </li>
            <li id='secondary-list-item'><a href="#section11">Roles & Responsibilities</a></li>
            <li id='secondary-list-item'><a href="#section12">What Did I Learn ?</a></li>
            </li>
            <li>
        <li id='primary-list-item'>
        <a href="#section2">WedAmor Pvt.Ltd., Noida</a>
            </li>
            <li id='secondary-list-item'><a href="#section21">Roles & Responsibilities</a></li>
            <li id='secondary-list-item'><a href="#section22">What Did I Learn ?</a></li>
            </li>
    </ul>
    </nav>
    <div className='righthandside-nav'>
        <div className='comapany-name-heading-first' id='section1'>Accenture India, Bengaluru</div>
        <div>
        <div className='sub-heading' id='section11'>Roles & Responsibilities</div>
        <p id='para'>
        As a Web Developer at Accenture, my role involves collaborating with diverse clients to understand their business requirements and objectives, actively participating in cross-functional teams to design and develop web applications using technologies such as React JS, Typescript, Material UI, Javascript, React Testing Library, and Redux Toolkit. I contribute to problem-solving by identifying and addressing complex issues within web development projects. Engaging in regular code reviews and adhering to best practices, I write clean and modular code, ensuring its quality, maintainability, and scalability. Version control using GitHub is integral to managing the codebase. Thorough testing, including unit testing with React Testing Library, and collaboration with quality assurance teams ensure the reliability of applications. Embracing a continuous learning approach, I stay updated on industry trends and emerging technologies to deliver innovative solutions that meet or exceed client expectations, contributing to the overall success of projects.
        </p>
        <div className='sub-heading' id='section12'>What Did I Learn ?</div>
        <p id='para'>
        Working at Accenture as a Web Developer has been an invaluable learning experience that has enriched my professional journey. The dynamic nature of collaborating with diverse clients has honed my ability to comprehend and address unique business challenges. Engaging in cross-functional teams has not only enhanced my technical skills but has also fostered effective communication and teamwork. The utilization of a sophisticated tech stack, including React JS, Typescript, Material UI, Javascript, React Testing Library, and Redux Toolkit, has expanded my expertise in modern web development. Regular code reviews and adherence to best practices have instilled a disciplined approach to writing clean, modular, and scalable code. Managing version control with GitHub has underscored the importance of maintaining a well-organized codebase. The emphasis on testing methodologies, especially with React Testing Library, has deepened my commitment to delivering robust and reliable solutions. Moreover, the culture of continuous learning has encouraged me to stay abreast of industry trends and emerging technologies, fostering a proactive mindset towards personal and professional development. Overall, my tenure at Accenture has not only equipped me with technical proficiency but has also nurtured a holistic understanding of client-centric development, effective collaboration, and a commitment to excellence.
        </p>
        </div>
        <div className='comapany-name-heading-second' id='section2'>WedAmor Pvt.Ltd., Noida</div>
        <div>
        <div className='sub-heading' id='section21'>Roles & Responsibilities</div>
        <p id='para'>
        During my internship at Wedamor, I had the opportunity to delve into the world of web development, marking the inception of my journey in this dynamic field. Working closely with a collaborative team, I actively contributed to the creation of dynamic web pages, gaining hands-on experience in utilizing technologies such as HTML, CSS, Javascript, and Bootstrap. My responsibilities involved translating design concepts into functional and visually appealing web interfaces. Through this role, I not only enhanced my technical skills but also gained valuable insights into the practical aspects of web development. The exposure to diverse technologies and the supportive team environment at Wedamor played a pivotal role in shaping my foundational understanding of web development, providing a springboard for my future endeavors in the field.
        </p>
        <div className='sub-heading' id='section22'>What Did I Learn ?</div>
        <p id='para'>
        Working at Wedamor as an intern was an enriching experience that significantly contributed to my growth in the field of web development. One of the most valuable lessons was gaining hands-on experience in creating dynamic web pages, allowing me to apply theoretical knowledge to practical scenarios. The exposure to technologies like HTML, CSS, Javascript, and Bootstrap was instrumental in broadening my skill set and providing a solid foundation in web development. Collaborating with a team of professionals taught me the importance of effective communication, teamwork, and how collective efforts contribute to project success. This internship served as a stepping stone, opening my eyes to the intricacies of the industry and sparking a keen interest in further exploration and learning within the realm of web development. Overall, the experience at Wedamor not only equipped me with technical proficiency but also instilled a sense of curiosity and enthusiasm for continuous growth in my career.
        </p>
        </div>
    </div>
</div>
</div>
  )
}

export default ExperiencePage