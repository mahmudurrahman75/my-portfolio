import React from 'react';

export default function Tag({ children, className = '', ...props }) {
  return (
    <span className={`project-tag ${className}`} {...props}>
      {children}
    </span>
  );
}
