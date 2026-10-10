import React from 'react';
import Container from './Container';
import SocialLinks from '../common/SocialLinks';
import { DynamicIcon } from '../../utils/icons';
import siteData from '../../data/site.json';
import socialLinksData from '../../data/social-links.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightName = siteData.copyrightName || 'Software Engineer';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <Container className="footer-inner">
        <div className="footer-left">
          <p>© {currentYear} {copyrightName}. All rights reserved.</p>
          <p className="footer-credit">Built with React, Vite & Modern CSS Architecture.</p>
        </div>

        <SocialLinks links={socialLinksData} />

        <button
          type="button"
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <DynamicIcon name="ChevronUp" size={16} />
        </button>
      </Container>
    </footer>
  );
}
