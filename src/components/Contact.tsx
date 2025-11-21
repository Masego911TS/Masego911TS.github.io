import React from 'react';
import '../assets/styles/Contact.scss';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          
          <div className="contact-info">
            <div className="contact-item">
              <MailIcon />
              <a href="mailto:your-email@example.com">
                masegomashego00@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <PhoneIcon />
              <a href="tel:+27 71 885 1548">
              +27 71 885 1548
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
