import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/younesaa?tab=stars" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/younes-lakhnichy-027897133/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p><a href="https://github.com/younesaa?tab=repositories" target="_blank" rel="noreferrer">Copyright© 2025 Younes Lakhnichy. All Rights Reserved </a></p>
    </footer>
  );
}

export default Footer;
