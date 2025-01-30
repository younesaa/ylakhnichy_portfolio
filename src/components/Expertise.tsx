import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const labelsFirst = [
    "Linux",
    "Shell Scripting",
    "CI/CD Pipelines",
    "Azure",
    "GCP",
    "Git",
    "AWS",
    "Jenkins",
    "Gitlab CI/CD",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
];

const labelsSecond = [
    "Java",
    "Python",
    "C/C++",
    "JS",
    "Spring framework",
    "Microservices",
    "EDA/IDA",
    "REST API",
    "RabbitMQ",
    "Kafka",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "ReactJS",
    "AngularJS",
];



const labelsThird = [
    "Agile Methodology",
    "DevOps Practices",
    "Infrastructure as Code",
    "Automation",
    "System Monitoring",
    "Incident Resolution",
    "Cloud Security"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I have extensive experience in setting up CI/CD pipelines, automating infrastructure provisioning, and managing cloud environments using tools like Docker, Kubernetes, Ansible and Terraform.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Backend & Cloud Development</h3>
                    <p>I specialize in designing and developing scalable backend systems and cloud-based solutions using modern technologies like Java, Spring Boot, and Microservices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Cloud & Infrastructure</h3>
                    <p>I help organizations optimize their cloud infrastructure, implement security best practices, and ensure high availability and scalability of their systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
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