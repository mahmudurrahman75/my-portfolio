import React, { useState, useEffect } from 'react';
import Container from './Container';
import Button from '../common/Button';
import { DynamicIcon } from '../../utils/icons';
import { getInitials } from '../../utils/helpers';
import siteData from '../../data/site.json';
import personalData from '../../data/personal.json';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const initials = getInitials(personalData.fullName);
  const navLinks = siteData.navLinks || [];
  const hasResume = Boolean(personalData.resumePath);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  const handleNavClick = () => {
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <header className="navbar">
      <Container className="navbar-inner">
        {/* Brand / Logo */}
        <a href="#hero" className="nav-brand" aria-label="Go to top">
          <span className="nav-logo-monogram">{initials}</span>
          <span className="nav-brand-name">{personalData.fullName || 'Portfolio'}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action button & Mobile toggle */}
        <div className="nav-actions">
          {hasResume ? (
            <Button
              variant="outline"
              size="sm"
              href={personalData.resumePath}
              download
              icon={<DynamicIcon name="Download" size={14} />}
              className="nav-resume-btn"
            >
              Résumé
            </Button>
          ) : (
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              icon={<DynamicIcon name="Send" size={14} />}
              className="nav-contact-btn"
            >
              Let's Talk
            </Button>
          )}

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <DynamicIcon name={mobileOpen ? 'X' : 'Menu'} size={20} />
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu-drawer ${mobileOpen ? 'open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Mobile Navigation">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {hasResume ? (
          <Button
            variant="primary"
            size="md"
            href={personalData.resumePath}
            download
            icon={<DynamicIcon name="Download" size={16} />}
            onClick={handleNavClick}
            style={{ marginTop: '1rem', width: '100%' }}
          >
            Download Résumé
          </Button>
        ) : (
          <Button
            variant="primary"
            size="md"
            href="#contact"
            icon={<DynamicIcon name="Send" size={16} />}
            onClick={handleNavClick}
            style={{ marginTop: '1rem', width: '100%' }}
          >
            Let's Talk
          </Button>
        )}
      </div>
    </header>
  );
}
