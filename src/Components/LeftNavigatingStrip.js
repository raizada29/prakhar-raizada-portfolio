import React from 'react'
import './LeftNavigatingStrip.css'
export default function LeftNavigatingStrip() {
  const githubRedirect =()=>{
    window.open('https://github.com/raizada29');
  }
  const instaRedirect =()=>{
    window.open('https://www.instagram.com/_r_a_i_z_a_d_a_/');
  }
  const linkedinRedirect =()=>{
    window.open('https://www.linkedin.com/in/prakharraizada');
  }
  const twitterRedirect =()=>
  {
    window.open('https://twitter.com/raizada_prakhar');
  }
  return (
    <div className='main-left-navigator'>
      <ul>
        <li>
        <i class="bi bi-github" onClick={githubRedirect}></i>
        </li>
        <li>
        <i class="bi bi-instagram" onClick={instaRedirect}></i>
        </li>
        <li>
        <i class="bi bi-linkedin" onClick={linkedinRedirect}></i>
        </li>
        <li>
        <i class="bi bi-twitter" onClick={twitterRedirect}></i>
        </li>
        <li>
        <i class="bi bi-code-slash"></i>
        </li>
      </ul>
      <div className="center-line">
      </div>
    </div>
  )
}
