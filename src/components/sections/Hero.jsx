import React from 'react';
import Container from '../layout/Container';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import AnimatedHeroVisual from '../common/AnimatedHeroVisual';
import { DynamicIcon } from '../../utils/icons';
import personalData from '../../data/personal.json';
import socialLinksData from '../../data/social-links.json';

export default function Hero() {
  return (
    <section id="hero" className="section" style={{ paddingTop: '1.5rem' }}>
      <Container>
        <div className="hero-wrapper">
          {/* Text Information Column */}
          <div className="hero-content">
            {personalData.availabilityStatus && (
              <div className="hero-status-pill">
                <span className="status-dot" aria-hidden="true"></span>
                <span>{personalData.availabilityStatus}</span>
              </div>
            )}

            <h1 className="hero-title">
              Hi, I'm <span className="hero-title-gradient">{personalData.fullName}</span>
            </h1>

            <div className="hero-role font-mono">
              &gt; {personalData.title}
            </div>

            <p className="hero-intro">
              {personalData.heroIntroduction || personalData.tagline}
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              {personalData.primaryCta && (
                <Button
                  variant="primary"
                  size="lg"
                  href={personalData.primaryCta.href || '#projects'}
                  icon={<DynamicIcon name="Sparkles" size={18} />}
                >
                  {personalData.primaryCta.text || 'View Projects'}
                </Button>
              )}

              {personalData.secondaryCta && (
                <Button
                  variant="secondary"
                  size="lg"
                  href={personalData.secondaryCta.href || '#contact'}
                >
                  {personalData.secondaryCta.text || 'Get in Touch'}
                </Button>
              )}

              {personalData.resumePath && (
                <Button
                  variant="outline"
                  size="lg"
                  href={personalData.resumePath}
                  download
                  icon={<DynamicIcon name="Download" size={16} />}
                >
                  Résumé
                </Button>
              )}
            </div>

            {/* Meta Strip */}
            <div className="hero-meta-strip">
              {personalData.location && (
                <div className="hero-meta-item">
                  <DynamicIcon name="MapPin" size={16} />
                  <span>{personalData.location}</span>
                </div>
              )}
              {personalData.yearsOfExperience && (
                <div className="hero-meta-item">
                  <DynamicIcon name="Briefcase" size={16} />
                  <span>{personalData.yearsOfExperience} experience</span>
                </div>
              )}
              <div style={{ marginLeft: 'auto' }}>
                <SocialLinks links={socialLinksData} />
              </div>
            </div>
          </div>

          {/* Visual Workspace Column */}
          <div className="hero-visual-card">
            <AnimatedHeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
