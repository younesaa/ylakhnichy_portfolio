import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/younesaa?tab=stars&user_lists_direction=desc&user_lists_sort=created_at" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/younes-lakhnichy-027897133/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>2025 Younes Lakhnichy</p>
    </footer>
  );
}

export default Footer;
