import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsWeb = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "bcrypt",
    "Axios",
    "HTTPS/TLS",
    "Helmet",
    "CORS",
    ".NET",
    "C#",
    "SQL Server"
];

const labelsMobile = [
    "Kotlin",
    "Firebase",
    "Firestore",
    "Dropbox API",
    "XML",
    "Material Design",
    "Android SDK",
    "Coroutines",
];

const labelsAPI = [
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "bcrypt",
    "REST API",
    "CORS",
    "Helmet",
    "Rate Limiting"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    {/* Web Application Development */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Web Application Development</h3>
                        <p>
                            I have built web applications for school projects using React and Node.js, as well as .NET web apps.
                            My projects focus on functionality, responsive design, and learning best practices in authentication, APIs, and databases.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsWeb.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Mobile App Development */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faAndroid} size="3x" />
                        <h3>Mobile App Development</h3>
                        <p>
                            I have developed Android apps for school projects using Kotlin and Firebase, implementing authentication, real-time databases, and cloud storage.
                            These projects helped me understand mobile development best practices and UI/UX design principles.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsMobile.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* REST API Development */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x"/>
                        <h3>REST API Development</h3>
                        <p>
                            I have built RESTful APIs for school projects using Node.js and Express, focusing on secure authentication, data validation, and database integration.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsAPI.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
