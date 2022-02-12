import React from 'react';
import GithubIcon from './GitHub-Mark-Light-32px.png';
import styled from 'styled-components';
const Footer = () => {
  return (
    <FooterWrapper className="footer">
      <span>Copyright &#169; 2022 arito7</span>
      <Anchor href="https://github.com/arito7/arito7">
        <FooterImg src={GithubIcon}></FooterImg>
      </Anchor>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  color: white;
  display: grid;
  align-items: center;
  margin-top: 1rem;
  display: grid;
  width: 100%;
  background-color: rgb(51, 46, 46);
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  padding: 0.25rem 0;
`;

const Anchor = styled.a`
  display: grid;
  align-items: center;
`;
const FooterImg = styled.img`
  margin-left: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
`;

export default Footer;
