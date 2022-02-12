import React from 'react';
import GithubIcon from './GitHub-Mark-Light-32px.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <span>Copyright &#169; 2022 arito7</span>
      <a href="https://github.com/arito7/arito7">
        <img src={GithubIcon} alt="github icon" />
      </a>
    </div>
  );
};

export default Footer;
