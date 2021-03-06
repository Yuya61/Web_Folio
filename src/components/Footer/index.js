import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaDribbble, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterClose,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterClose>Thank you.</FooterClose>
        </FooterLinksContainer>
        {/* <FooterLinksContainer>
          <FooterClose className="bottom">
            Let's get in touch via and let’s discuss how I can help you.
          </FooterClose>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Yuya
            </SocialLogo>
            {/* <WebsiteRights>dolla © {new Data().getFullYear()}All Right reserved.</WebsiteRights> */}
            <SocialIcons>
              <SocialIconLink
                href="https://dribbble.com/Hashirizaki"
                target="_blank"
                aria-label="dribbble"
              >
                <FaDribbble />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.behance.net/yuyahashirizaki"
                target="_blank"
                aria-label="Instagram"
              >
                <FaBehance />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/Yuya61"
                target="_blank"
                aria-label="github"
              >
                <FiGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/yuya-hashirizaki-9b0065191"
                target="_blank"
                aria-label="linkedIn"
              >
                <FaLinkedinIn />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
