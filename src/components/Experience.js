import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
`;

const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #333;
`;

const JobList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const JobItem = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: #0077b5;
  margin-bottom: 0.5rem;
`;

const CompanyName = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const JobDetails = styled.div`
  display: flex;
  gap: 1rem;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const JobDetail = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Responsibilities = styled.ul`
  margin-left: 1rem;
  color: #444;
`;

const ResponsibilityItem = styled.li`
  margin-bottom: 0.5rem;
`;

function Experience() {
  const jobs = [
    {
      title: 'Backend Developer',
      company: 'Ace Turtle',
      location: 'Bengaluru',
      duration: 'Nov 2023 - Present',
      responsibilities: [
        'Contributed to the Warehouse Management System (WMS) team, enhancing Rubicon, an in-house product streamlining critical warehouse operations and strengthening overall supply chain management.',
        'Developed warehouse operation reports, improving decision-making speed by 50%',
        'Created a Windows Installer for a Node.js app to process video SPF orders, reducing processing time by 100%',
        'Optimized Node.js code to process transfer orders, reducing API calls by 80%',
        'Implemented end-to-end processes to handle store returns enhancing operational efficiency by 25%',
        'Developed end-to-end process for inwarding goods, increasing processing speed by 35%',
        'Created a feature to sync inventory data to marketplace platforms, reducing manual updates by 90%',
        'Developed a feature to generate variance reports, allowing customers to detect discrepancies between sent and received quantities, increasing visibility by 100%',
        'Implemented a notification system using AWS SQS, informing stakeholders at key stages and reducing manual follow-ups by 70%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Anagatam Technologies',
      location: 'Gandhinagar',
      duration: 'Apr 2023 - Oct 2023',
      responsibilities: [
        'Played a vital role in developing a financial robo advisor, focusing on both frontend and backend aspects.',
        'Implemented MVC architecture using Node.js and Express.js',
        'Designed and developed RESTful APIs with Node.js to efficiently retrieve data from PostgreSQL',
        'Managed PostgreSQL database on AWS RDS',
        'Successfully deployed the application on AWS Elastic Beanstalk',
        'Developed frontend components using React.js'
      ]
    },
    {
      title: 'Frontend Developer',
      company: '5paisa',
      location: 'Mumbai',
      duration: 'Jan 2022 - Sep 2022',
      responsibilities: [
        'Spearheaded the development of the Derivative 360 trading platform.',
        'Implemented responsive, user-friendly interfaces using React.js, increasing user engagement by 30%',
        'Developed modular UI components with React and TypeScript, enhancing type safety and reducing bugs by 40%',
        'Integrated Redux Toolkit to simplify the codebase, reducing boilerplate by 40% and improving development speed',
        'Implemented pixel-perfect UI designs from Figma specifications'
      ]
    }
  ];

  return (
    <ExperienceSection>
      <ExperienceTitle>Experience</ExperienceTitle>
      <JobList>
        {jobs.map((job, index) => (
          <JobItem key={index}>
            <JobHeader>
              <div>
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>{job.company}</CompanyName>
              </div>
            </JobHeader>
            <JobDetails>
              <JobDetail>
                <FaCalendarAlt /> {job.duration}
              </JobDetail>
              <JobDetail>
                <FaMapMarkerAlt /> {job.location}
              </JobDetail>
            </JobDetails>
            <Responsibilities>
              {job.responsibilities.map((resp, idx) => (
                <ResponsibilityItem key={idx}>{resp}</ResponsibilityItem>
              ))}
            </Responsibilities>
          </JobItem>
        ))}
      </JobList>
    </ExperienceSection>
  );
}

export default Experience;
