import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Olá!<br />Eu sou o Leonardo
      </SectionTitle>
      <SectionText>
        Tenho 22 anos, sou desenvolvedor web e aqui estão alguns dos meus projetos
      </SectionText>
      <Button onClick={props.handleClick}>Saiba mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;