import React from 'react'
import './Projects.css'
function Projects() {
  function redirectNetflix()
  {
    window.open("https://netflix-clone-3fb1f.web.app/");
  }
  return (
    <div className='main-projects' style={{marginTop:'40vh'}}>
        <div className="headingAndLine">
        <span id='aboutMeHead'> <span id='spanGreen'>02.</span>Here are a few recent projects I worked on</span>
        <div className="horizontalLine"></div>
        </div>
        <div className="allProjects">
            <div className="netflix-clone">
            <span id='headDesk-span-pScreens'>Netflix Clone Application</span>
              <div className='head-desc'>
            <span id='headDesk-span-pcScreens'>Netflix Clone Application</span>
                <div className="description-box">
                A web app for visualizing personalized Spotify data. View your top artists, top tracks,
                 recently played tracks, and detailed audio information about each track. Create and save 
                 new playlists of recommended tracks based on your existing playlists and more.
                </div>
                <div className="techUsed"><span>React</span><span>TMDB</span><span>Firebase</span><span>HTML5</span><span>CSS3</span></div>
                <button onClick={redirectNetflix} className='netFlix-redirect'>Let's go</button>
                </div>
                <div className="netflixVideo">
                <video controls loop autoPlay muted src={require('../assets/netflix-clone-vid.mp4')}  width='' 
                ></video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
