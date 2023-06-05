import './App.css';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import { BsLinkedin, BsGithub } from "react-icons/bs"

function Home() {
  const navigate = useNavigate();

  let strings = ['<strong>quality.</strong>', '<strong>creativity.</strong>', '<strong>curiosity.</strong>', '<strong>problem solving.</strong>', '<strong> communication.</strong>', '<strong>teamwork.</strong>', '<strong> accountability.</strong>', '<strong>flexibility.</strong>', '<strong>leadership.</strong>']
  
  return (
    <div className="App">
      <div className="socials">
        <a target="_blank" href="https://github.com/martinmccarthy/">
          <BsGithub className="socialIcons" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/martinmccarthy2/">
          <BsLinkedin className="socialIcons" />
        </a>
      </div>
     <div className="container"><div className='mainInfo'>
        <h1 className='myName' onClick={() => navigate('/about')}>Martin<br />McCarthy</h1>
        {/* <h1 className='foregroundName'>Martin<br />McCarthy</h1> */}
        <h1 className='backgroundName'>Martin<br />McCarthy</h1>
        <div className="commitment">
          <p>Commited to </p>
          <Typewriter
          options={{
            strings: strings,
            autoStart: true,
            loop: true,
            skipAddStyles: true
          }}/>
        </div>
      </div>
      </div>
      <div className='myProjects'>
        <h1 className='linksTitle'>Learn more about some of my projects here:</h1>
        <div className='links'>
          <a className="button" target="_blank" href="https://github.com/martinmccarthy/MakeADate">Make-A-Date</a>
          <a className="button" target="_blank" href="https://hockeymanager.co">NHL Franchise Mode</a>
          <a className="button" target="_blank" href="https://github.com/martinmccarthy/skatle">Skatle</a>
          <a className="button" target="_blank" href="https://brainbeatz.xyz">BrainBeats</a>
          <a className="button" target="_blank" href="https://www.youtube.com/playlist?list=PLpUbIdgRdlCVoo5bi7l-MxecuUBXy9HSj">VR Application</a>
        </div>
      </div>        
    </div>
  );
}

export default Home;
