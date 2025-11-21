import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          
          {/* Bachelor Degree */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Mar 2023 - Dec 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Computer and Information Sciences in Application Development</h3>
            <h4 className="vertical-timeline-element-subtitle">IIE Varsity College</h4>
            <p>Expected Graduation: 2026</p>
          </VerticalTimelineElement>

          {/* Higher Certificate */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Mar 2022 - Dec 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Higher Certificate in Mobile Application and Web Development</h3>
            <h4 className="vertical-timeline-element-subtitle">IIE Varsity College</h4>
          </VerticalTimelineElement>

          {/* High School */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2020"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">National Senior Certificate</h3>
            <h4 className="vertical-timeline-element-subtitle">Sandtonview Combined School</h4>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
