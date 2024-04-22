import React from 'react';
import devImage from '../images/yp.jpg';

interface Developer {
  name: string;
  role: string;
  skills: string[];
  photoUrl: string;
  linkedinId: string;
  githubId: string;
  summary: string;
}

const developerDetails: Developer = {
  name: 'Yugapriya Shankar',
  role: 'Full Stack Developer',
  skills: ['Java', 'Spring', 'JavaScript', 'TypeScript', 'React', 'WebAPI', 'MySQL', 'Python', 'Django'],
  photoUrl: devImage,
  linkedinId: 'yugapriya-shankar-0a5669176/',
  githubId: 'Yuga16S',
  summary: 'Passionate software developer with experience seeking entry-level position to contribute knowledge and skills for organizational growth.'
};

const AboutUs: React.FC = () => {
  return (
    <div className="container">
        <div style={{ paddingLeft: '20px'}}>
          <h1 style={{ alignItems: 'center'}}>Developer Details</h1>
          <div>
            <img src={developerDetails.photoUrl} alt="Developer" style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <p><strong>Name:</strong> {developerDetails.name}</p>
              <p><strong>Role:</strong> {developerDetails.role}</p>
              <p><strong>Skills:</strong></p>
              <ul>
                {developerDetails.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <p><strong>LinkedIn:</strong> <a href={`https://www.linkedin.com/in/${developerDetails.linkedinId}`} target="_blank" rel="noopener noreferrer">{`https://www.linkedin.com/in/${developerDetails.linkedinId}`}</a></p>
              <p><strong>GitHub:</strong> <a href={`https://github.com/${developerDetails.githubId}`} target="_blank" rel="noopener noreferrer">{`https://github.com/${developerDetails.githubId}`}</a></p>
              <p><strong>Summary:</strong> {developerDetails.summary}</p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default AboutUs;

