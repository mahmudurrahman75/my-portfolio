import React from 'react';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import EmptyState from '../common/EmptyState';
import { DynamicIcon } from '../../utils/icons';
import skillsData from '../../data/skills.json';

export default function Skills() {
  if (!skillsData || skillsData.length === 0) {
    return (
      <section id="skills" className="section">
        <Container>
          <SectionHeading
            badge="Technical Toolkit"
            title="Skills & Technologies"
          />
          <EmptyState title="No skills configured" description="Add skill categories to src/data/skills.json" />
        </Container>
      </section>
    );
  }

  // Filter out categories with empty skill lists
  const validCategories = skillsData.filter(cat => cat.skills && cat.skills.length > 0);

  return (
    <section id="skills" className="section">
      <Container>
        <SectionHeading
          badge="Technical Arsenal"
          title="Skills & Technologies"
          description="Technologies and computer science foundations I employ to construct scalable, accessible, and resilient systems."
        />

        <div className="skills-grid">
          {validCategories.map((group) => (
            <div key={group.category} className="skill-category-card">
              <div className="skill-cat-header">
                <h3 className="skill-cat-title">{group.category}</h3>
                {group.description && <p className="skill-cat-desc">{group.description}</p>}
              </div>

              <div className="skills-badge-list">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`skill-tag ${skill.featured ? 'featured' : ''}`}
                    title={skill.featured ? 'Core Proficiency' : skill.name}
                  >
                    <DynamicIcon name={skill.icon || 'Code'} size={15} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
