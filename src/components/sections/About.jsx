import React from 'react';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import { DynamicIcon } from '../../utils/icons';
import aboutData from '../../data/about.json';

export default function About() {
  if (!aboutData) return null;

  const {
    heading = 'About Me',
    biography = [],
    highlights = [],
    coreStrengths = [],
    professionalInterests = [],
    careerGoals
  } = aboutData;

  return (
    <section id="about" className="section">
      <Container>
        <SectionHeading
          badge="Background"
          title={heading}
          description="A glimpse into my engineering mindset, technical philosophies, and career journey."
        />

        <div className="about-grid">
          {/* Left: Biography & Highlights */}
          <div className="about-left">
            <div className="about-bio-text">
              {Array.isArray(biography) ? (
                biography.map((para, index) => <p key={index}>{para}</p>)
              ) : (
                <p>{biography}</p>
              )}

              {careerGoals && (
                <p style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>
                  <strong>Focus:</strong> {careerGoals}
                </p>
              )}
            </div>

            {/* Highlights metrics */}
            {highlights && highlights.length > 0 && (
              <div className="about-highlights-row">
                {highlights.map((item, idx) => (
                  <div key={idx} className="highlight-card">
                    <div className="highlight-label">{item.label}</div>
                    <div className="highlight-value">{item.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Core Strengths & Interests */}
          <div className="about-right">
            {coreStrengths && coreStrengths.length > 0 && (
              <div className="about-strengths-box">
                {coreStrengths.map((strength, idx) => (
                  <div key={idx} className="strength-item">
                    <h3 className="strength-title">
                      <DynamicIcon name="Sparkles" size={16} />
                      {strength.title}
                    </h3>
                    <p className="strength-desc">{strength.description}</p>
                  </div>
                ))}
              </div>
            )}

            {professionalInterests && professionalInterests.length > 0 && (
              <div style={{ marginTop: '1.75rem', padding: '1.25rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  Areas of Interest
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {professionalInterests.map((interest, i) => (
                    <span key={i} className="project-tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
