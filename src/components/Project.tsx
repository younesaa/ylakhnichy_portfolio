import React, { useState } from "react";
import '../assets/styles/Project.scss';

const timelineData = [
  {
    title: "Project 1",
    image_name: "mock01.png", 
    description: "iI did",
    tools: "Kubernetes, Helm, Cloud Native Technologies",
    gitLink: "https://www.credly.com/badges/4876f37d-30e8-473f-8912-82112ef7a30f/public_url"
  }
];

function Project() {
      const [shownElements, setShownElements] = useState(3);
      const hasHiddenElements = timelineData.length > shownElements;
      return (
        <div className="projects-container" id="projects">
            {/* Keep h1 outside of .projects-grid */}
            <h1>Freelance Projects</h1>

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
                            <a href={item.gitLink} target="_blank" rel="noreferrer">
                                <h2>{item.title}</h2>
                            </a>
                        </div>
                        
                        <p>{item.description}</p>
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