import React from 'react';
import { FooterBase } from './styles';
import LogoFooter from '../../assets/img/logo_footer.png'; 

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="LogoFooter" src={LogoFooter} alt="Logo MutaFlix" />
      </a>
      <p>
        Criado por Ralisson Mattias
      </p>
    </FooterBase>
  );
}

export default Footer;
