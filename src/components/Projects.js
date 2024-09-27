import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import BookStore from '../bookstore.png';
import UserAuthDashboard from '../ultimez.png';
const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #0077b5;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #005582;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechItem = styled.span`
  background-color: #e0e0e0;
  color: #333;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

function Projects() {
  const projects = [
    {
      name: 'BookStore',
      image: BookStore,
      description: 'This Online Book Store application allows users to manage a digital catalog of books. Users can add new books by providing the title, author, and publication year.',
      techStack: ['Node.js', 'MongoDB', 'Express.js', 'RESTful APIs', 'React.js'],
      githubLink: 'https://github.com/Prakharsvnit/BookStore',
      liveLink: 'https://book-store-frontend-gamma.vercel.app/',
    },
    {
      name: 'UserAuthDashboard',
      image: UserAuthDashboard,
      description: 'UserAuthDashboard is a web app built with React that registers users with form validation and logs in users to view a dashboard that displays user\'s data.',
      techStack: ['ReactJS', 'Redux', 'JavaScript', 'Material UI'],
      githubLink: 'https://github.com/Prakharsvnit/UserAuthDashboard',
      liveLink: 'https://ultimezassignment.netlify.app/',
    },
  ];

  return (
    <ProjectsSection>
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.image} alt={project.name} />
            <ProjectInfo>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techStack.map((tech, idx) => (
                  <TechItem key={idx}>{tech}</TechItem>
                ))}
              </TechStack>
              <ProjectLinks>
                <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </ProjectLink>
                <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
}

export default Projects;
