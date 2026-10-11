import React from 'react';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import Tag from '../common/Tag';
import { DynamicIcon } from '../../utils/icons';
import entrepreneurshipData from '../../data/entrepreneurship.json';

export default function Entrepreneurship() {
  if (!entrepreneurshipData || entrepreneurshipData.length === 0) return null;

  return (
    <section id="entrepreneurship" className="section">
      <Container>
        <SectionHeading
          badge="Business & Ventures"
          title="Entrepreneurial Initiatives"
          description="Co-founded ventures applying digital solutions, customer service, and practical business strategy in Dhaka, Bangladesh."
        />

        <div className="entrepreneurship-grid">
          {entrepreneurshipData.map((venture) => (
            <div key={venture.id} className="venture-card">
              <div className="venture-header">
                <div className="venture-branding">
                  <div className="venture-avatar font-mono">
                    {venture.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="venture-name">{venture.name}</h3>
                    <div className="venture-industry">{venture.industry}</div>
                  </div>
                </div>

                <div className="venture-role-badge">
                  <DynamicIcon name="Sparkles" size={13} />
                  <span>{venture.role}</span>
                </div>
              </div>

              <div className="venture-location">
                <DynamicIcon name="MapPin" size={14} />
                <span>{venture.location}</span>
              </div>

              <p className="venture-desc">{venture.description}</p>

              {venture.focusAreas && venture.focusAreas.length > 0 && (
                <div className="venture-focus-box">
                  <div className="venture-focus-title font-mono">Core Focus Areas</div>
                  <div className="venture-focus-tags">
                    {venture.focusAreas.map((area) => (
                      <Tag key={area}>{area}</Tag>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
