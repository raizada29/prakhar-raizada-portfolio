import React, {useEffect} from 'react'
import './Projects.css'
function Projects() {
  function redirectNetflix()
  {
    window.open("https://netflix-clone-3fb1f.web.app/");
  }
  useEffect(() => {
    const headingAndLineVar = document.getElementById("headingAndLine-id-projects");
    const netflixVideoVar = document.getElementById("netflixVideo-id");
    const amazonVideoVar = document.getElementById("amazonVideo-id");
    const headDeskTopVar = document.getElementById("head-desc-top-id");
    const headDeskBottomVar = document.getElementById("head-desc-bottom-id");
    const techUsedNetflixVar = document.getElementById('techUsedNetflix');
    const techUsedAmazonVar = document.getElementById('techUsedAmazon');
    const cardDeckVar = document.getElementById('card-deck-id');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    observer.observe(headingAndLineVar);
    observer.observe(netflixVideoVar);
    observer.observe(amazonVideoVar);
    observer.observe(headDeskTopVar);
    observer.observe(headDeskBottomVar);
    observer.observe(techUsedNetflixVar);
    observer.observe(techUsedAmazonVar);
    observer.observe(cardDeckVar);

    // Cleanup function to disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);
  return (
    <div className='main-projects' id='main-projects-id'>
        <div className="headingAndLineProjects" id='headingAndLine-id-projects'>
        <span id='aboutMeHead'> <span id='spanGreen'>03.</span>Here are a few recent projects I worked on</span>
        <div className="horizontalLine"></div>
        </div>
        <div className="allProjects">
            <div className="application-clone">
            {/* <span id='headDesk-span-pScreens'>Netflix Clone Application</span> */}
              <div className='head-desc-top' id='head-desc-top-id'>
            <span id='headDesk-span-pcScreens'>Netflix Clone Application</span>
                <div className="description-box">
                A web app for visualizing personalized Spotify data. View your top artists, top tracks,
                 recently played tracks, and detailed audio information about each track. Create and save 
                 new playlists of recommended tracks based on your existing playlists and more.
                </div>
                <div className="techUsed" id='techUsedNetflix'><span>React</span><span>TMDB</span><span>Firebase</span><span>HTML5</span><span>CSS3</span></div>
                <button onClick={redirectNetflix} className='netFlix-redirect'>Let's go</button>
                </div>
                <div className="netflixVideo" id='netflixVideo-id'>
                <video controls loop autoPlay muted src={require('../assets/netflix-clone-vid.mp4')}  width='' 
                ></video>
                </div>
            </div>

            <div className="application-clone" id='second-application-clone-id'>
            <div className="amazonVideo" id='amazonVideo-id'>
                <video controls loop autoPlay muted src={require('../assets/amazon-clone-vid.mp4')}  width='' 
                ></video>
                </div>
            {/* <span id='headDesk-span-pScreens'>Amazon Clone Application</span> */}
              <div className='head-desc-bottom' id='head-desc-bottom-id'>
            <span id='headDesk-span-pcScreens'>Amazon Clone Application</span>
                <div className="description-box-second">
                A web app for visualizing personalized Spotify data. View your top artists, top tracks,
                 recently played tracks, and detailed audio information about each track. Create and save 
                 new playlists of recommended tracks based on your existing playlists and more.
                </div>
                <div className="techUsed" id='techUsedAmazon'><span>React</span><span>TMDB</span><span>Firebase</span><span>HTML5</span><span>CSS3</span></div>
                <button onClick={redirectNetflix} className='netFlix-redirect'>Let's go</button>
                </div>
            </div>

<div className='sub-projects-container'>
  <div className='miniPorject-headAndLine'>
            <div className="horizontalLine"></div>
            <div className="headingAndLineSubProjects">
        <span className='subProjectHeading' id='subProjectHeading-id'>SOME MORE OF MY PROJECTS</span>
        </div>
        <div className="horizontalLine"></div>
        </div>
        <div className="card-deck" id='card-deck-id'>
  <div className="card" id='card-id'>
    <img className="card-img-top" src={require('../assets/newsMonkeyImg.png')}  alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">News Monkey App</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="techusedText"><small>HTML</small><small>CSS</small><small>React JS</small></small></p>
    </div>
  </div>
  <div className="card" id='card-id'>
    <img className="card-img-top" src={require('../assets/DigitalClockimg.png')} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">Clock/StopWatch/Reminder</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="techusedText"><small>HTML</small><small>CSS</small><small>React JS</small></small></p>
    </div>
  </div>
  <div className="card" id='card-id'>
    <img className="card-img-top" src={require('../assets/TextUtilityAppImg.png')} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">Text Utility Application</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="techusedText"><small>HTML</small><small>CSS</small><small>React JS</small></small></p>
    </div>
  </div>
  <div className="card" id='card-id'>
    <img className="card-img-top" src={require('../assets/clock8Img.png')}  alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">Keeping Notes App</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="techusedText"><small>HTML</small><small>CSS</small><small>React JS</small></small></p>
    </div>
  </div>
</div>
</div>
        </div>
    </div>
  )
}

export default Projects
