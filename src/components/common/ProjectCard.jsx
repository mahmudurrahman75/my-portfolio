import React, { useState } from 'react';
import Button from './Button';
import Tag from './Tag';
import { DynamicIcon } from '../../utils/icons';
import { isValidUrl } from '../../utils/helpers';

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  if (!project) return null;

  const {
    name,
    category,
    featured,
    shortDescription,
    techStack = [],
    thumbnail,
    githubUrl,
    liveDemoUrl,
    keyFeatures = []
  } = project;

  const hasGithub = isValidUrl(githubUrl);
  const hasLiveDemo = isValidUrl(liveDemoUrl);

  return (
    <article className={`project-card ${featured ? 'is-featured' : ''}`}>
      {/* Thumbnail area with fallback */}
      <div className="project-thumbnail-box">
        {thumbnail && !imgError ? (
          <img
            src={thumbnail}
            alt={`${name} preview`}
            className="project-thumb-img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="hero-avatar-fallback" style={{ height: '100%' }}>
            <DynamicIcon name="Layers" size={40} />
            <span style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: 'var(--color-text-secondary)' }}>
              {name}
            </span>
          </div>
        )}

        {category && <span className="project-category-badge">{category}</span>}
        {featured && <span className="project-featured-badge">Featured</span>}
      </div>

      {/* Card Content Body */}
      <div className="project-body">
        <h3 className="project-title">{name}</h3>
        {shortDescription && <p className="project-desc">{shortDescription}</p>}

        {/* Optional key features */}
        {keyFeatures && keyFeatures.length > 0 && (
          <ul className="project-features-list">
            {keyFeatures.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="project-feature-item">
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technology tags */}
        {techStack && techStack.length > 0 && (
          <div className="project-tech-tags">
            {techStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        )}

        {/* Action Links */}
        {(hasGithub || hasLiveDemo) && (
          <div className="project-actions">
            {hasLiveDemo && (
              <Button
                variant="primary"
                size="sm"
                href={liveDemoUrl}
                icon={<DynamicIcon name="ExternalLink" size={14} />}
              >
                Live Demo
              </Button>
            )}
            {hasGithub && (
              <Button
                variant="secondary"
                size="sm"
                href={githubUrl}
                icon={<DynamicIcon name="Github" size={14} />}
              >
                Source Code
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
