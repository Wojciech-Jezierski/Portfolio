import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
         Hello, <br />
         My Name is Wojciech
         
      </SectionTitle>
      <SectionText>
        Welcome To My Personal Portfolio. I'm the beginner web-developer.
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>See Projects</Button>
    </LeftSection>
  </Section>
);

export default Hero;