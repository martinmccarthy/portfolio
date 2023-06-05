import { FaJava, FaSalesforce, FaReact, FaUnity, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiPython, SiC, SiMongodb, SiMysql, SiHaskell, SiTypescript, SiPhp, SiExpress, SiPrisma } from "react-icons/si";
import { IoIosSchool, IoMdArrowBack } from 'react-icons/io';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { GiBrain } from 'react-icons/gi'
import {TbBrandCSharp} from 'react-icons/tb'
import { useState, useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect';
import { useNavigate } from "react-router-dom";
import useCollapse from 'react-collapsed';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import './About.css'
import 'react-toastify/dist/ReactToastify.css';
import "animate.css/animate.min.css";

function About() {
    const navigate = useNavigate();
    const componentRef = useRef(null);
    const formRef = useRef();
    const [animatedClass, setAnimatedClass] = useState("animate__animated animate__jackInTheBox");
    const [scrolled, setScrolled] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     const { scrollTop } = componentRef.current;
    //     if (scrollTop > 0) {
    //       setScrolled(true);
    //     } else {
    //       setScrolled(false);
    //     }
    //   };
  
    //   const componentElement = componentRef.current;
    //   componentElement.addEventListener('scroll', handleScroll);
    //   return () => {
    //     componentElement.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);

    const handleNameChange = (e) => {setName(e.target.value);};
    const handleEmailChange = (e) => {setEmail(e.target.value);};
    const handleMessageChange = (e) => {setMessage(e.target.value);};
    const handleSubmit = (e) => {
        console.log(formRef.current);
        e.preventDefault();
        emailjs.sendForm('service_twottgs', 'template_eyr9p1i', formRef.current, process.env.PUBLIC_KEY)
            .then((res) => {
                toast.success('Thanks for reaching out! I will get back to you soon!');
                setName('');
                setEmail('');
                setMessage('');        
            }).catch((err) => {
                toast.error('There was some trouble processing your message, please try again later.');
                setName('');
                setEmail('');
                setMessage('');        
            })
        };


    function Expertise(expertiseBool) {
        const [expertiseShowing, setExpertiseShowing] = useState(false);
        const [finishedTypingExpertise, setFinishedTypingExpertise] = useState(false);
        const { getCollapseProps, getToggleProps } = useCollapse({autoReset: false});

        const handleToggle = () => {
            if (expertiseShowing) {
              setFinishedTypingExpertise(false);
            }
            setExpertiseShowing(!expertiseShowing);
        };

        useEffect(() => {
            return () => {
                setExpertiseShowing(expertiseBool)
            };
          }, [expertiseBool]);

        return(
            <div className={"infoDiv " + animatedClass} onAnimationEnd={()=> {setAnimatedClass('')}}>
                <div className="titleContainer" {...getToggleProps({onClick: handleToggle})}>
                    <GiBrain className="titleIcon" />
                    <h1 className="title"> Expertise</h1>
                </div>
                <div className="dataContainer" {...getCollapseProps({isExpanded: expertiseShowing})}>
                    <div className="data" >
                        {expertiseShowing && <Typewriter options={{wrapperClassName: 'infoType', cursorClassName: 'infoCursor'}} onInit={typewriter => {
                            typewriter.changeDelay(50)
                            .typeString('Experienced programmer in functional and object oriented programming languages.')
                            .callFunction(() => {
                                setFinishedTypingExpertise(true);
                            })
                            .start()
                        }} />}
                    {finishedTypingExpertise && <div className="iconContainer">
                            <div className="icons">
                                <SiJavascript className="icons"/>
                            </div>
                            <div className="icons">
                                <SiPython className="icons" />
                            </div>
                            <div className="icons">
                                <SiC className="icons" />
                            </div>
                            <div className="icons">
                                <FaJava className="icons"/>
                            </div>
                            <div className="icons">
                                <TbBrandCSharp className="icons" />
                            </div>
                            <div className="icons">
                                <SiHaskell className="icons" />
                            </div>
                            <div className="icons">
                                <SiTypescript className="icons" />
                            </div>
                            <div className="icons">
                                <SiPhp className="icons" />
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }

    function Development() {
        const [developmentShowing, setDevelopmentShowing] = useState(false);
        const [finishedTypingDevelopment, setFinishedTypingDevelopment] = useState(false);
        const { getCollapseProps, getToggleProps } = useCollapse({developmentShowing, autoResetExpanded: false});

        return(<div className={"infoDiv " + animatedClass} onAnimationEnd={()=> {setAnimatedClass('')}}>
            <div className="titleContainer" {...getToggleProps({developmentShowing,
                onClick: () => {
                    if(developmentShowing === true) {
                        setFinishedTypingDevelopment(false);
                    }
                    setDevelopmentShowing(!developmentShowing);
                }
            })}>
                <HiOutlineDesktopComputer className="titleIcon"/>
                <h1 className="title"> Development</h1>
            </div>
            <div className="dataContainer" {...getCollapseProps({developmentShowing})}>
                <div className="data">
                {developmentShowing && <Typewriter options={{wrapperClassName: 'infoType', cursorClassName: 'infoCursor'}} wrapperClassName="infoType" onInit={typewriter => {
                    typewriter.changeDelay(50)
                    .typeString('Developer in many technologies, including frontend and backend development, databases and game engines.')
                    .callFunction(() => {
                        setFinishedTypingDevelopment(true);
                    })
                    .start()
                    
                }} />}
                {finishedTypingDevelopment && <div className="iconContainer">
                        <div className="icons">
                            <FaSalesforce className="icons"/>
                        </div>
                        <div className="icons">
                            <FaReact className="icons"/>
                        </div>
                        <div className="icons">
                            <SiMongodb className="icons" />
                        </div>
                        <div className="icons">
                            <SiMysql className="icons" />
                        </div>
                        <div className="icons">
                            <FaUnity className="icons" />
                        </div>
                        <div className="icons">
                            <FaNodeJs className="icons" />
                        </div>
                        <div className="icons">
                            <SiExpress className="icons" />
                        </div>
                        <div className="icons">
                            <SiPrisma className="icons" />
                        </div>
                    </div>}
                </div>
            </div>
        </div>)
    }

    function Education() {
        const [educationShowing, setEducationShowing] = useState(false);
        const [finishedTypingEducation, setFinishedTypingEducation] = useState(false);    
        const { getCollapseProps, getToggleProps } = useCollapse({educationShowing});

        return( 
        <div className={"infoDiv " + animatedClass} onAnimationEnd={()=> {setAnimatedClass('')}}>
            <div className="titleContainer" {...getToggleProps({educationShowing,
                onClick: () => {
                    if(educationShowing === true) {
                        setFinishedTypingEducation(false);
                    }
                    setEducationShowing(!educationShowing);
                }
            })}>
                <IoIosSchool className="titleIcon"/>
                <h1 className="title"> Education</h1>
            </div>
            <div className="dataContainer" {...getCollapseProps({educationShowing})}>
                <div className="data">
                    {educationShowing && <Typewriter options={{wrapperClassName: 'infoType', cursorClassName: 'infoCursor'}} onInit={typewriter => {
                        typewriter.changeDelay(50)
                        .typeString('Bachelors in computer science from the University of Central Florida. Currently pursuing a masters at UCF.')
                        .callFunction(() => {
                            setFinishedTypingEducation(true);
                        })
                        .start()
                    }} />}
                    {finishedTypingEducation && <div className="iconContainer">
                        <div className="ucfLogo">
                            <img className="ucfLogo" alt="UCF CECS Logo" src="https://www.cecs.ucf.edu/web/wp-content/uploads/2020/03/UILinternal_KGrgb_College-of-Engineering-and-Computer-Science-300dpi.png"/>
                        </div>
                    </div>}
                </div>
            </div>
        </div>)
    }

    return(
        <div>
            <div className="aboutMeContainer">
                <div className="aboutMePage" ref={componentRef}>
                    <div className="returnHome">
                        <div className={`returnWrapper ${scrolled ? 'scrolled' : ''}`} onClick={() => {
                            navigate('/');
                        }}>
                            <IoMdArrowBack/>
                        </div>
                    </div>    
                    <div className="aboutMe">
                        <div className="imgBorder">
                            <img src="/profile.jpg" alt="me"/>
                        </div>
                        <div className="text">
                            <h1 className="aboutMeHeading">Who Am I?</h1>
                            <p>Hi! I'm Martin, an accomplished computer science student and full stack developer at the University of Central Florida pursuing a Masters. With work experience as a software engineering intern and a teaching assistant for artificial intelligence, I am committed to leveraging my skills to create impactful solutions that promote sustainability and elevate user experiences.</p>
                        </div>
                    </div>
                    <div className="mainContainer">
                        <Expertise />
                        <Development />
                        <Education />
                    </div>      
                    <div>
                        <form ref={formRef} onSubmit={handleSubmit} className="form">
                            <h1 className="formHeader">Interested in reaching out?</h1>
                            <label htmlFor="name">Name:</label><br />
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                            <label htmlFor="email">Email:</label><br />
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            <label htmlFor="message">Message:</label><br />
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={handleMessageChange}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>   
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default About;