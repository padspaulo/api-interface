import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./styled";
  
const Footer = () => {
  return (
    <Box>
      
      <Container>
        <Row>
          <Column>
            <Heading>Sobre Mim</Heading>
            <FooterLink href="#">Nome</FooterLink>
            <FooterLink href="#">Cidade</FooterLink>
            <FooterLink href="#">País</FooterLink>
          </Column>
          <Column>
            <Heading>Serviços</Heading>
            <FooterLink href="#">Html</FooterLink>
            <FooterLink href="#">Css</FooterLink>
            <FooterLink href="#">Php</FooterLink>
            <FooterLink href="#">Javascript</FooterLink>
          </Column>
          <Column>
            <Heading>Contatos</Heading>
            <FooterLink href="#">Telefone</FooterLink>
            <FooterLink href="#">Linkedin</FooterLink>
            <FooterLink href="#">Github</FooterLink>
            <FooterLink href="#">Email</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <span style={{ color: "white" }}>Nota: Os elementos de header e footer usados apenas como exemplo</span>
        <span style={{ color: "white" }}>Links não definidos</span>
      </Container>
    </Box>
  );
};
export default Footer;