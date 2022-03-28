import React from 'react';
import { DiFirebase, DiReact, DiZend, DiHtml5, DiCss3, DiJavascript1, DiGit, DiBootstrap} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      The technologies I was learning
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="7rem" />
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
          <ListParagraph>
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="7rem" />
        <ListContainer>
          <ListTitle>CSS3</ListTitle>
          <ListParagraph>
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript1 size="7rem" />
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="7rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBootstrap size="7rem" />
        <ListContainer>
          <ListTitle>Bootstrap5</ListTitle>
          <ListParagraph>
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="7rem" />
        <ListContainer>
          <ListTitle>GIT</ListTitle>
          <ListParagraph>
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
