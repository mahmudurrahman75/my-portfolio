import React from 'react';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import Tag from '../common/Tag';
import { DynamicIcon } from '../../utils/icons';
import experienceData from '../../data/experience.json';

export default function Experience() {
  if (!experienceData || experienceData.length === 0) return null;

  return (
    <section id="experience" className="section">
      <Container>
        <SectionHeading
          badge="Career Journey"
          title="Professional Experience"
          description="Track record of engineering impact, full-stack contributions, and system optimizations."
        />

        <div className="experience-timeline">
          {experienceData.map((item) => (
            <div key={item.id} className="experience-item">
              <div className="experience-dot" aria-hidden="true"></div>

              <div className="experience-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{item.title}</h3>
                    <div className="exp-company">{item.company}</div>
                  </div>

                  <div className="exp-badge-group">
                    <span className="exp-date-badge">
                      {item.startDate} — {item.endDate || (item.isCurrent ? 'Present' : '')}
                    </span>
                    {item.employmentType && (
                      <span className="exp-type-badge">{item.employmentType}</span>
                    )}
                  </div>
                </div>

                {item.location && (
                  <div className="exp-location">
                    <DynamicIcon name="MapPin" size={14} />
                    <span>{item.location}</span>
                  </div>
                )}

                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="exp-bullets">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="exp-bullet-item">{resp}</li>
                    ))}
                  </ul>
                )}

                {item.accomplishments && item.accomplishments.length > 0 && (
                  <div className="exp-accomplishments-box">
                    {item.accomplishments.map((acc, idx) => (
                      <p key={idx} className="exp-accomplishment-text">
                        <strong>Impact:</strong> {acc}
                      </p>
                    ))}
                  </div>
                )}

                {item.technologies && item.technologies.length > 0 && (
                  <div className="exp-tech-tags">
                    {item.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
