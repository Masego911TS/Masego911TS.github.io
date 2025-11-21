import img3 from '../assets/images/img3.png';
import img2 from '../assets/images/img2.png';
import img1 from '../assets/images/img1.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal and Acedemic Projects </h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Masego911TS/The_International_bank.git" target="_blank" rel="noreferrer"><img src={img1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Masego911TS/The_International_bank.git" target="_blank" rel="noreferrer"><h2>Customer International Payments Portal</h2></a>
                <p>A secure web application that allows customers to make international payments via SWIFT (simulated) and enables bank employees to verify and submit transactions.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Masego911TS/ResearchXMobile.git" target="_blank" rel="noreferrer"><img src={img2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Masego911TS/ResearchXMobile.git" target="_blank" rel="noreferrer"><h2>ResearchX Mobile App</h2></a>
                <p>A mobile application that allows postgraduate students to request and manage research support services.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Masego911TS/REST-API.git" target="_blank" rel="noreferrer"><img src={img3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Masego911TS/REST-API.git" target="_blank" rel="noreferrer"><h2>International Payments REST API</h2></a>
                <p>A backend service that provides secure API endpoints for customer authentication, employee verification, and international payment processing using HTTPS and JSON-based communication.</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;