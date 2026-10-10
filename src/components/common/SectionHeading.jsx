import React from 'react';

export default function SectionHeading({ badge, title, description, align = 'left' }) {
  return (
    <div className="section-heading-wrap" style={{ textAlign: align }}>
      {badge && <div className="section-badge">{badge}</div>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}
