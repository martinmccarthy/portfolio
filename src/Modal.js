import { BsGithub } from "react-icons/bs";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import "animate.css/animate.min.css";

function Modal(props) {
    return(
        <div className="modal">
            <div className="overlay">
                <div className="modalContent animate__flipInX">
                    <img src={props.project.projectImage} alt={props.project.projectName + " Cover Photo"} />
                    <h1>{props.project.projectName} {props.project.githubLink &&
                        <a target="_blank" href={props.project.githubLink}>
                            <BsGithub className="modalIcons" />
                        </a>}{props.project.websiteLink.length > 0 && 
                        <a target="_blank" href={props.project.websiteLink}>
                            <FaExternalLinkSquareAlt className="modalIcons"/>
                        </a>}
                    </h1>
                    <p>{props.project.projectDescription}</p>
                    <div className="projectLinks">
                        
                    </div>
                    <button onClick={() => props.closeModal()}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;