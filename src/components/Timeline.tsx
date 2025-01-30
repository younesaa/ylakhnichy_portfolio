import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const timelineData = [
  {
    title: "DevOps Engineer",
    subtitle: "Nelixair - Toulon, France",
    date: "2024 - present",
    description: "DevOps, Cloud Computing, CI/CD, Automation, IaC, Orchestration",
    tools: "Shell, Python, Docker, Kubernetes, Jenkins, Terraform, Ansible, Azure",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: '#5000ca', color: 'rgb(39, 40, 34)' }
  },
  {
    title: "Cloud & Backend Software Engineer",
    subtitle: "Renault Group - Nice, France",
    date: "2022 - 2024",
    description: "Cloud Computing, Business Intelligence ,Backend Development, Microservices, EDA, DBs, CI/CD, Automation ",
    tools: "Java, Python, Spring, RabbitMQ, Azur, Docker, Jenkins, Terraform, PostgreSQL, Blob Storage, SQL",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: '#5000ca', color: 'rgb(39, 40, 34)' }
  },
  {
    title: "Master degree in software engineering",
    subtitle: "IOT & Cloud Computing - Montpellier, France",
    date: "2021 - 2022",
    description: "IOT, Cloud Computing, Business Intelligence, Data Science, Infrastructure, Security",
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    iconStyle: { background: 'rgb(39, 172, 63)', color: 'rgb(39, 40, 34)' }
  },
  {
    title: "Software Engineer",
    subtitle: "Lear Corporation - Rabat, Morocco",
    date: "2018 - 2020",
    description: "Emebdded Systems, IoT, Cloud Computing, Automation, Hardware Design, Software Development",
    tools: "Linux, C/C++, Python, Autosar, NAD, Jenkins, CAN, MQTT, I2C, SPI",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: '#5000ca', color: 'rgb(39, 40, 34)' }
  },
  {
    title: "Engineer degree in software engineering",
    subtitle: "Embedded Systems - Tangier, Morocco",
    date: "2018 - 2013",
    description: "IOT, Cloud Computing, Business Intelligence, Data Science, Infrastructure, Security",
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    iconStyle: { background: 'rgb(39, 172, 63)', color: 'rgb(39, 40, 34)' }
  }
];

function Timeline() {
  const [shownElements, setShownElements] = useState(2);

  const hasHiddenElements = timelineData.length > shownElements;
  return (
<div id="history">
    <div className="items-container">
    <h1>Career History</h1>
    <div className="timeline-container">
      <VerticalTimeline>
        {timelineData.slice(0, shownElements).map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date={item.date}
            iconStyle={item.iconStyle}
            icon={item.icon}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
            <br/>
            <h4 className="vertical-timeline-element-title-tools">Practices:</h4>
            <p className="vertical-timeline-element-tools">{item.description}</p>
            <br/>  
            {item.icon && item.icon.props.icon === faBriefcase  && (
              <>
                          <h4 className="vertical-timeline-element-title-tools">Tools:</h4>
                          <p className="vertical-timeline-element-tools">{item.tools}</p>
                          <br/>
              </>  
              )}           
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {hasHiddenElements && (
        <button
          onClick={() => setShownElements(shownElements + 2)} // Show one more element
          style={{
            display: "block",  // Ensure the button behaves as a block element
            margin: "20px auto",  // Automatically centers the button by applying margin left and right      
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: "#5000ca",
            color: "white",
            transition: "all 0.3s ease-in-out",
            
          }}
        >
          View More
        </button>
      )}
    </div>
  </div>
</div>
  );
}

export default Timeline;