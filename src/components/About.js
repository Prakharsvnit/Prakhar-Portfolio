import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImage from '../photo.jpg';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 10rem 2rem 18rem;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AboutText = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;

  p {
    margin-bottom: 1rem;
  }

  strong {
    color: #0077b5;
    font-weight: 600;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  font-size: 2.5rem;
  color: #0077b5;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #005582;
    transform: translateY(-3px);
  }
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
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #005582;
    transform: translateY(-3px);
  }
`;

function About() {
  return (
    <AboutSection>
      <ContentWrapper>
        <ProfileImageWrapper>
          <ProfileImage src={profileImage} alt="Prakhar Tripathi" />
        </ProfileImageWrapper>
        <AboutText>
          <p>Hello! I'm <strong>Prakhar Tripathi</strong>, full-stack developer with <strong>2+ years of experience in React.js,Node.js, Express, MongoDB, AWS and more</strong>.</p>
          <p>I love building <strong>scalable web applications</strong> and solving complex problems. Let's connect and build something amazing together!!</p>
        </AboutText>
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/prakhar489/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin title="LinkedIn" />
          </SocialLink>
          <SocialLink href="https://github.com/Prakharsvnit" target="_blank" rel="noopener noreferrer">
            <FaGithub title="GitHub" />
          </SocialLink>
        </SocialLinks>
        <ResumeButton href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">
          View Resume
        </ResumeButton>
      </ContentWrapper>
    </AboutSection>
  );
}

export default About;
