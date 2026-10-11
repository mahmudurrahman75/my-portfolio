import React from 'react';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import Tag from '../common/Tag';
import { DynamicIcon } from '../../utils/icons';
import educationData from '../../data/education.json';

export default function Education() {
  if (!educationData || educationData.length === 0) return null;

  return (
    <section id="education" className="section">
      <Container>
        <SectionHeading
          badge="Academic Background"
          title="Education"
          description="Formal academic degrees and science curriculum forming the analytical foundation of my technical and problem-solving skills."
        />

        <div className="education-grid">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className={`education-card ${edu.isPrimary ? 'primary-degree-card' : ''}`}
            >
              {edu.isPrimary && (
                <div className="primary-degree-badge font-mono">
                  <DynamicIcon name="GraduationCap" size={13} />
                  <span>Primary Degree</span>
                </div>
              )}

              <div className="edu-header">
                <div>
                  <h3 className="edu-degree">
                    {edu.degree} {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ''}
                  </h3>
                  <div className="edu-institution">{edu.institution}</div>
                </div>

                {edu.gpa && (
                  <span className="edu-gpa-badge" title="Academic Result">
                    GPA: {edu.gpa}
                  </span>
                )}
              </div>

              <div className="edu-meta">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <DynamicIcon name="Calendar" size={14} />
                  {edu.completionYear ? `Completed ${edu.completionYear}` : `${edu.startDate} — ${edu.endDate}`}
                </span>
                {edu.board && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <DynamicIcon name="Award" size={14} />
                    {edu.board}
                  </span>
                )}
                {edu.location && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <DynamicIcon name="MapPin" size={14} />
                    {edu.location}
                  </span>
                )}
              </div>

              {edu.coursework && edu.coursework.length > 0 && (
                <div>
                  <div className="edu-coursework-title">Relevant Disciplines</div>
                  <div className="edu-coursework-tags">
                    {edu.coursework.map((course) => (
                      <Tag key={course}>{course}</Tag>
                    ))}
                  </div>
                </div>
              )}

              {edu.highlights && edu.highlights.length > 0 && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                  <ul className="edu-highlights-list">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="edu-highlight-item">
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
