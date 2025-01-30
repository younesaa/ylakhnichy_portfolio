import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { SiKubernetes } from 'react-icons/si'; // Import Kubernetes icon from react-icons
import { SiTerraform } from 'react-icons/si';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const timelineData = [
  {
    title: "Certified Kubernetes Administrator (CKA)",
    subtitle: "Linux Foundation",
    date: "2024",
    description: "Kubernetes Administration, Cluster Management, Networking, Security",
    tools: "Kubernetes, Helm, Cloud Native Technologies",
    icon: <SiKubernetes style={{ color: 'white' }} />,  // CoreUI Kubernetes icon
    iconStyle: { background: '#5000ca', color: 'rgb(255, 255, 255)' },
    verifyLink: "https://www.credly.com/badges/4876f37d-30e8-473f-8912-82112ef7a30f/public_url"
  },
  {
    title: "Certified Kubernetes Application Developer (CKAD)",
    subtitle: "Linux Foundation",
    date: "2024",
    description: "Application Deployment, Kubernetes Services, Configurations, Monitoring",
    tools: "Kubernetes, Helm, Docker, Microservices",
    icon: <SiKubernetes style={{ color: 'white' }} />,  // CoreUI Kubernetes icon
    iconStyle: { background: '#5000ca', color: 'rgb(255, 255, 255)' },
    verifyLink: "https://www.credly.com/badges/b048ccf8-5c77-4bef-af71-a82ff6b3e3d4/public_url"
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    subtitle: "HashiCorp",
    date: "2024",
    description: "Infrastructure as Code, Resource Management, Cloud Provisioning",
    tools: "Terraform, AWS, Azure, Vault, terraform Cloud",
    icon: <SiTerraform style={{ color: 'white' }} />,  // CoreUI Kubernetes icon
    iconStyle: { background: '#5000ca', color: 'rgb(255, 255, 255)' },
    verifyLink: "https://www.credly.com/badges/f08c549b-479c-45b0-806d-3aa07d608361/public_url"
  },
  {
    title: "DevOps Foundation",
    subtitle: "DevOps Institute",
    date: "2024",
    description: "DevOps Practices, Continuous Integration and Delivery, Version Control, Testing, Automation, Monitoring",
    tools: "Git, Jenkins, Ansible, Docker, Terraform",
    icon: <FontAwesomeIcon icon={faCertificate} />,  // CoreUI Kubernetes icon
    iconStyle: { background: '#5000ca', color: 'rgb(255, 255, 255)' },
    verifyLink: "https://drive.proton.me/urls/G3Y85T0S0M#MMFG4iNz39zz"
  },
  {
    title: "BootCamp DevOps Training",
    subtitle: "M2I Training Center",
    date: "2024",
    description: "DevOps Culture, Cloud Computing, CI/CD, Automation, IaC, OrchestrationMonitoring",
    tools: "Shell, Python, Jenkins, Nexus, SonarQube, Git, Docker, Kubernetes, Terraform, Ansible, Cloud, Prometheus, Grafana",
    icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: { background: 'rgb(39, 172, 63)', color: 'rgb(39, 40, 34)' }
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    subtitle: "Microsoft",
    date: "2023",
    description: "Cloud Concepts, Azure Services, Pricing and SLA, Cloud Governance",
    tools: "Azure, Cloud Concepts, Azure Portal, Azure CLI, ARM Templates",
    icon: <FontAwesomeIcon icon={faMicrosoft} />,  // CoreUI Kubernetes icon
    iconStyle: { background: '#5000ca', color: 'rgb(255, 255, 255)' },
    verifyLink: "https://www.credly.com/badges/2034b804-19d0-4059-9787-ab4379c5ede8/public_url"
  },
  {
    title: "SAFe® for Teams",
    subtitle: "SAFe SCALED AGILE",
    date: "2023",
    description: "Scaled Agile Framework, Lean-Agile Principles, Collaboration in Agile Teams",
    tools: "SAFe Framework, Agile, Scrum, Kanban",
    icon: <FontAwesomeIcon icon={faCertificate} />,
    iconStyle: { background: '#5000ca', color: 'rgb(255, 255, 255)' },
    verifyLink: "https://drive.proton.me/urls/HES3HRPPJR#VCTqPO2w0Oos"
  }
];

function Certification() {
  const [shownElements, setShownElements] = useState(3);

  const hasHiddenElements = timelineData.length > shownElements;
  return (
<div id="certifications">
    <div className="items-container">
    <h1>Certifications History</h1>
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
            <h4 className="vertical-timeline-element-title-tools">Tools:</h4>
            <p className="vertical-timeline-element-tools">{item.tools}</p>
            <br/>
            {item.icon && item.icon.props.icon !== faSchool  && (
              <>
                <button
                      onClick={() => window.open(item.verifyLink, "_blank")} // Opens link in a new tab
                      style={{
                        marginTop: "10px",
                        padding: "8px 15px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        background: "#5000ca",
                        color: "white",
                        transition: "all 0.3s ease-in-out",
                      }}
                  >
                    Verify Certificate
                  </button>         
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

export default Certification;