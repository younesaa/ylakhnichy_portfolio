import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myImage from '../assets/images/yns-removebg-preview.png';
import resumePDF from '../assets/images/resume-younes-lakhnichy.pdf';

function Main() {

  const handleDownloadResume = () => {

    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "resume-younes-lakhnichy.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    // Function to scroll to contact section
    const handleScrollToContact = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <div className="container">
      <div className="about-section">
        <div className="about-me-section">
          <div className="image-wrapper">
            <img src={ myImage } alt="Avatar" />
          </div>
          <div className="content">
            <h1>Younes Lakhnichy</h1>
            <p>DevOps & Software Engineer</p>
            <div className="buttons">
              <button className="resume-button" onClick={handleDownloadResume}>Download Resume</button>
              <button className="contact-button" onClick={handleScrollToContact}>Contact Me</button>
            </div>
            <div className="social_icons">
              <a href="https://github.com/younesaa?tab=repositories" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/younes-lakhnichy-027897133/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
            <div className="mobile_social_icons">
              <a href="https://github.com/younesaa?tab=repositories" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/younes-lakhnichy-027897133/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
          </div>
        </div>
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Skilled and experienced engineer with 2 years as an IT DevOps/Software Engineer and over 2 years in Embedded Systems within IT and the Automotive 
            Industries. I specialize in designing, developing, and implementing cutting-edge software solutions.  
            <br />
            My Agile mindset ensures adaptability and collaboration in fast-paced environments. I hold certifications in various DevOps and Cloud technologies, 
            demonstrating my expertise in optimizing workflows, implementing CI/CD pipelines, and automating infrastructure provisioning.
          </p>
          <div className="certifications">
              <div>🔹 <strong>2× Azure Certified</strong></div>
              <div>🔹 <strong>2× Kubernetes Certified</strong></div>
              <div>🔹 <strong>1× Terraform Certified</strong></div>
              <div>🔹 <strong>1× SAFe Practitionner Certified</strong></div>
              <div>🔹 <strong>1× DevOps Fondation Certified</strong></div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Main;