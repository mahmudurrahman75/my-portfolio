import React, { useState, useMemo } from 'react';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import ProjectCard from '../common/ProjectCard';
import EmptyState from '../common/EmptyState';
import projectsData from '../../data/projects.json';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Compute unique categories from data
  const categories = useMemo(() => {
    if (!projectsData || !Array.isArray(projectsData)) return ['All'];
    const cats = new Set(['All']);
    projectsData.forEach(p => {
      if (p.category) cats.add(p.category);
    });
    return Array.from(cats);
  }, []);

  // Filter projects by active category
  const filteredProjects = useMemo(() => {
    if (!projectsData || !Array.isArray(projectsData)) return [];
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="section">
      <Container>
        <SectionHeading
          badge="Featured Work"
          title="Web Applications & Projects"
          description="Featured repositories covering full-stack systems, Laravel backends, Next.js applications, and responsive web projects."
        />

        {/* Category Filters */}
        {categories.length > 1 && (
          <div className="projects-filter-bar" role="tablist" aria-label="Project Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id || project.name} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No projects found"
            description={`No projects currently match the "${selectedCategory}" category.`}
            icon="Layers"
          />
        )}
      </Container>
    </section>
  );
}
