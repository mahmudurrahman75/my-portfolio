import React from 'react';
import { DynamicIcon } from '../../utils/icons';

export default function EmptyState({
  title = 'No records found',
  description = 'This section will populate once data is configured.',
  icon = 'Bookmark'
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <DynamicIcon name={icon} size={36} />
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-desc">{description}</p>
    </div>
  );
}
