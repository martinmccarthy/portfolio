import './App.css';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { useState } from 'react';
import Modal from './Modal';
import * as descriptions from "./Descriptions";

function Home() {
  const navigate = useNavigate();

  let strings = ['<strong>quality.</strong>', '<strong>creativity.</strong>', '<strong>curiosity.</strong>', '<strong>problem solving.</strong>', '<strong> communication.</strong>', '<strong>teamwork.</strong>', '<strong> accountability.</strong>', '<strong>flexibility.</strong>', '<strong>leadership.</strong>']

  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState({projectName: '', projectDescription: '', websiteLink: '', githubLink: '', projectImage: ''});

  function openModal(details) {
    setModalOpen(true);
    setModalProject({
      projectName: details.projectName,
      projectDescription: details.projectDescription,
      websiteLink: details.websiteLink,
      githubLink: details.githubLink,
      projectImage: details.projectImage
    })
  }
  
  function closeModal() {
    setModalOpen(false);
    setModalProject({projectName: '', projectDescription: '', websiteLink: '', githubLink: ''});
  }

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
    <div className="container">
      <div className='mainInfo'>
        <h1 className='myName'>Martin<br />McCarthy</h1>
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
      <div className="aboutMeLink">
          <p className="button" onClick={() => navigate('/about')}>Learn more about me and my capabilities here.</p>
      </div>
      <div className='myProjects'>
        <h1 className='linksTitle'>Check out my projects!</h1>
        <div className='links'>
          <p className="button" onClick={() => openModal({projectName: "Slasher Roblox", projectDescription: descriptions.slasherDesc, websiteLink: "https://www.roblox.com/games/5982131103/Slasher", projectImage: "/slasher.png"})}>Slasher Roblox</p>
          <p className="button" onClick={() => openModal({projectName: "Dynasty Hockey", projectDescription: descriptions.nhlDesc, githubLink: "https://github.com/martinmccarthy/NHL-Franchise/tree/master/frontend", websiteLink: "https://hockeymanager.co/", projectImage:"/nhlfranchise.png"})}>Dynasty Hockey</p>
          <p className="button" onClick={() => openModal({projectName: "BrainBeats", projectDescription: descriptions.brainBeatsDesc, githubLink: "https://github.com/Brainbeats-v4/BrainBeatsv4/tree/new-frontend", websiteLink: "https://brainbeatz.xyz", projectImage:"/brainbeats.png"})}>BrainBeats</p>
          <p className="button" onClick={() => openModal({projectName: "Intergalactic Delivery Service", projectDescription: descriptions.intergalaticDesc, websiteLink: "https://www.youtube.com/watch?v=YL7B_1RhOIQ", projectImage:"/intergalatic.png"})}>Intergalactic Delivery Service</p>
          <p className="button" onClick={() => openModal({projectName: "Jedi Trainer VR", projectDescription: descriptions.vrDesc, websiteLink:"https://www.youtube.com/watch?v=5e0nU4RbJsI", githubLink: "https://github.com/elegs99/JediTrainer_3DUI_Proj1", projectImage: "/starwars.png"})}>Jedi Trainer VR</p>
        </div>
      </div>

    </div>
      {modalOpen && <Modal project={modalProject} closeModal={closeModal} />  }
    </div>
  );
}

export default Home;
