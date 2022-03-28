import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">+48 571 360 043</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="wjezierski23@gmail.com">wjezierski23@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>I'm currently looking for an apprenticeship or internship.</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/Wojciech-Jezierski" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/wojciech-jezierski-2560b220b/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://instagram.com" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
      </SocialContainer>
    </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
