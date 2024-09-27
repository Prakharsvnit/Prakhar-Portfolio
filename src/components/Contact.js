import React from 'react';
import styled from 'styled-components';
import { 
  FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaBlog,
  FaJs, FaNode, FaReact, FaAws, FaDocker, FaGit, FaCode, FaExchangeAlt,
  FaDatabase, FaHtml5, FaCss3Alt, FaSass, FaBootstrap
} from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiRedis, SiRedux, SiTailwindcss, SiGooglecloud } from 'react-icons/si';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
  width: 100%;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  font-size: 2.5rem;
  color: #0077b5;
  transition: color 0.3s ease;

  &:hover {
    color: #005582;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ContactItem = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: #444;
`;

const ResumeButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #0077b5;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005582;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SkillIcon = styled.div`
  font-size: 2.5rem; // Increased to match contact icons
  color: #0077b5;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-size: 0.9rem;
  color: #444;
`;

function Contact() {
  const skills = [
    { name: 'JavaScript', icon: FaJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: FaNode },
    { name: 'Express.js', icon: SiExpress },
    { name: 'React', icon: FaReact },
    { name: 'Redux', icon: SiRedux },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Redis', icon: SiRedis },
    { name: 'AWS', icon: FaAws },
    { name: 'GCP', icon: SiGooglecloud },
    { name: 'Docker', icon: FaDocker },
    { name: 'Git', icon: FaGit },
    { name: 'OOP', icon: FaCode },
    { name: 'RESTful APIs', icon: FaExchangeAlt },
    { name: 'PostgreSQL', icon: FaDatabase },
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'Sass', icon: FaSass },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'Tailwind CSS', icon: SiTailwindcss }
  ];

  return (
    <ContactSection>
      <ContentWrapper>
        <Column>
          <SectionTitle>Contact</SectionTitle>
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/in/prakhar489/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://github.com/Prakharsvnit" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://twitter.com/prakhar_4896" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/@prakhartripathi5281/" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialLink>
            <SocialLink href="https://prakhartripathi.hashnode.dev/" target="_blank" rel="noopener noreferrer">
              <FaBlog />
            </SocialLink>
          </SocialLinks>
          <ContactInfo>
            <ContactItem>📱 +91 6387395178</ContactItem>
            <ContactItem>📧 devprakhar@outlook.com</ContactItem>
          </ContactInfo>
          <ResumeButton href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </ResumeButton>
        </Column>
        <Column>
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillIcon>
                  <skill.icon title={skill.name} />
                </SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillsGrid>
        </Column>
      </ContentWrapper>
    </ContactSection>
  );
}

export default Contact;
