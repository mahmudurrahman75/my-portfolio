import React, { useState } from 'react';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import { DynamicIcon } from '../../utils/icons';
import contactData from '../../data/contact.json';
import socialLinksData from '../../data/social-links.json';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  if (!contactData) return null;

  const {
    heading = 'Get in Touch',
    invitationMessage,
    email,
    availabilityMessage,
    buttonLabel = 'Send an Email',
    secondaryAction
  } = contactData;

  const handleCopy = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="section">
      <Container>
        <SectionHeading
          badge="Direct Inquiries"
          title={heading}
          align="center"
        />

        <div className="contact-card-box">
          <p className="contact-desc">
            {invitationMessage}
          </p>

          <div className="contact-email-container">
            {email && (
              <div className="email-pill">
                <span>{email}</span>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={handleCopy}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  <DynamicIcon name={copied ? 'Check' : 'Copy'} size={18} />
                </button>
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {email && (
                <Button
                  variant="primary"
                  size="lg"
                  href={`mailto:${email}`}
                  icon={<DynamicIcon name="Mail" size={18} />}
                >
                  {buttonLabel}
                </Button>
              )}

              {secondaryAction && secondaryAction.url && (
                <Button
                  variant="secondary"
                  size="lg"
                  href={secondaryAction.url}
                  icon={<DynamicIcon name="ExternalLink" size={16} />}
                >
                  {secondaryAction.label || 'Connect'}
                </Button>
              )}
            </div>
          </div>

          <div style={{ margin: '1.5rem 0' }}>
            <SocialLinks links={socialLinksData} />
          </div>

          {availabilityMessage && (
            <div className="contact-status-note">
              <span className="status-dot" aria-hidden="true"></span>
              <span>{availabilityMessage}</span>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
