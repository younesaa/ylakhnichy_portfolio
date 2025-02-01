import React, { useState } from "react";
import '../assets/styles/Project.scss';

const timelineData = [
  {
    title: "Blog APP Deployment",
    image_name: "project4.png", 
    description: "Production Level Blog APP Deployment using EKS, Nexus, SonarQube, Trivy with Monitoring Tools Prometheus / Grafana",
    tools: "Tools: Jenkins, Terraform, Trivy, sonarQube, Nexus, Docker, Kubernetes, Grafana, Prometheus",
    gitLink: "https://github.com/younesaa/Blog_APP_Deployment"
  },
  {
    title: "Full End to end CI/CD pipeline",
    image_name: "project1.PNG", 
    description: "End to end pipeline on Jenkins for java cloud application to run on Azure provider",
    tools: "Tools: maven, Java, Jenkins, SonarQube, Docker, PosgreSQL database, terraform, Microsoft Azure Cloud Provider, WSL",
    gitLink: "https://github.com/younesaa/m2i_DevOpsfull_CICD_Project"
  },
  {
    title: " Reddit app Deploy",
    image_name: "projects3.PNG", 
    description: "Deploy Reddit App to Amazon Elastic Kubernetes Service (EKS) using ArgoCD and monitor its performance Prometheus / Grafana",
    tools: "Tools: docker, jenkins, Github, sonarqube, trivy, Kubernetes, ArgoCD, Prometheus, Grafana, AWS EKS",
    gitLink: "https://github.com/younesaa/Reddit_Project_Deploy"
  },
  {
    title: "DockerCoins App orchestration",
    image_name: "project2.PNG", 
    description: "Deployment and orchestration of Mining application Kubernetes orchestration",
    tools: "Tools: Kubernetes, Docker, Helm",
    gitLink: "https://github.com/younesaa/DockerCoins_App"
  }
];

function Project() {
      const [shownElements, setShownElements] = useState(4);
      const hasHiddenElements = timelineData.length > shownElements;
      return (
        <div className="projects-container" id="projects">
            {/* Keep h1 outside of .projects-grid */}
            <h1>Projects</h1>

            <div className="projects-grid">
                {timelineData.slice(0, shownElements).map((item, index) => (
                    <div className="project" key={index}>
                        <a href={item.gitLink} target="_blank" rel="noreferrer">
                            <img 
                                src={require(`../assets/images/${item.image_name}`)} 
                                className="zoom" 
                                alt="thumbnail" 
                                width="100%"
                            />
                        </a>

                        {/* Title below the video */}
                        <div className="project-title">
                                <h2>{item.title}</h2>
                        </div>
                        <p>{item.description}</p>
                        <p>{item.tools}</p>
                        <button onClick={() => window.open(item.gitLink, "_blank")} // Opens link in a new tab
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
                          Github
                          </button>
                    </div>
                ))}
            </div>
    
          {/* View More Button */}
          {hasHiddenElements && (
            <button
              onClick={() => setShownElements(shownElements + 3)} // Show two more elements
              style={{
                display: "block",  // Ensure the button behaves as a block element
                margin: "20px auto",  // Automatically center the button by applying margin left and right      
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
      );
    }
export default Project;