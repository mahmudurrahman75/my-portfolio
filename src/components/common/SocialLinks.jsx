import React from 'react';
import { DynamicIcon } from '../../utils/icons';

export default function SocialLinks({ links = [], className = '' }) {
  if (!links || links.length === 0) return null;

  return (
    <div className={`social-links-row ${className}`}>
      {links.map((item) => (
        <a
          key={item.id || item.label}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="social-link-btn"
          title={item.label}
        >
          <DynamicIcon name={item.icon} size={18} />
        </a>
      ))}
    </div>
  );
}
