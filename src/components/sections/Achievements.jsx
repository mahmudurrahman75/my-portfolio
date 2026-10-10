import React from 'react';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import { DynamicIcon } from '../../utils/icons';
import { isValidUrl } from '../../utils/helpers';
import achievementsData from '../../data/achievements.json';

export default function Achievements() {
  if (!achievementsData || achievementsData.length === 0) return null;

  return (
    <section id="achievements" className="section">
      <Container>
        <SectionHeading
          badge="Distinctions"
          title="Achievements & Certifications"
          description="Industry certifications, competition milestones, and technical honors."
        />

        <div className="achievements-grid">
          {achievementsData.map((item) => {
            const hasCredential = isValidUrl(item.credentialUrl);

            return (
              <div key={item.id} className="achievement-card">
                {item.type && (
                  <span className="ach-type-badge">
                    <DynamicIcon name="Award" size={13} />
                    {item.type}
                  </span>
                )}

                <h3 className="ach-title">{item.title}</h3>
                <div className="ach-issuer">{item.issuer}</div>

                {item.description && <p className="ach-desc">{item.description}</p>}

                <div className="ach-footer">
                  <span className="ach-date">{item.date}</span>
                  {hasCredential && (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ach-link"
                    >
                      <span>Verify Credential</span>
                      <DynamicIcon name="ExternalLink" size={13} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
