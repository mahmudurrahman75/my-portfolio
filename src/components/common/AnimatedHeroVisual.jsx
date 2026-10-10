import React, { useState, useEffect, useMemo, useRef } from 'react';
import { DynamicIcon } from '../../utils/icons';
import personalData from '../../data/personal.json';
import skillsData from '../../data/skills.json';

export default function AnimatedHeroVisual() {
  const sceneRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // Extract top skills dynamically from skills.json
  const badges = useMemo(() => {
    if (!skillsData || !Array.isArray(skillsData)) return [];
    const allSkills = [];
    skillsData.forEach((category) => {
      if (category.skills && Array.isArray(category.skills)) {
        category.skills.forEach((skill) => {
          allSkills.push(skill);
        });
      }
    });

    // Prioritize featured skills
    const featured = allSkills.filter((s) => s.featured);
    const selected = featured.length >= 4 ? featured.slice(0, 5) : allSkills.slice(0, 5);

    const positions = [
      'badge-top-left',
      'badge-top-right',
      'badge-bottom-left',
      'badge-bottom-right',
      'badge-right-mid'
    ];

    return selected.map((skill, index) => ({
      ...skill,
      posClass: positions[index] || 'badge-top-left'
    }));
  }, []);

  // Subtle interactive 3D mouse parallax
  const handleMouseMove = (e) => {
    if (!sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // max -6 to +6 deg
    const rotateY = ((x - centerX) / centerX) * 6;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  // Subtle typing string for active code line
  const [typedText, setTypedText] = useState('');
  const fullText = personalData.availabilityStatus
    ? `"${personalData.availabilityStatus}"`
    : '"Building resilient systems"';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [fullText]);

  const devName = personalData.fullName || 'Software Engineer';
  const devTitle = personalData.title || 'Engineer';
  const topFocus = badges.slice(0, 3).map((b) => `"${b.name}"`).join(', ');

  return (
    <div
      className="hero-visual-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={sceneRef}
      aria-hidden="true"
    >
      {/* Background Radial Glow */}
      <div className="hero-glow-aura" />

      {/* Decorative Circuit Lines */}
      <svg className="hero-svg-circuits" viewBox="0 0 500 400" fill="none">
        <path
          d="M 50 80 H 180 L 220 120"
          stroke="rgba(110, 168, 254, 0.25)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 450 320 H 320 L 280 280"
          stroke="rgba(56, 189, 248, 0.25)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle cx="50" cy="80" r="3" fill="#6EA8FE" />
        <circle cx="450" cy="320" r="3" fill="#38BDF8" />
      </svg>

      {/* 3D Scene Wrapper with Interactive Tilt */}
      <div
        className="hero-3d-scene"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
        }}
      >
        {/* Floating Satellite Tech Badges */}
        {badges.map((badge, idx) => (
          <div
            key={badge.name || idx}
            className={`floating-badge ${badge.posClass}`}
          >
            <span className="floating-badge-icon">
              <DynamicIcon name={badge.icon || 'Code'} size={15} />
            </span>
            <span>{badge.name}</span>
          </div>
        ))}

        {/* Central Floating Code Editor Card */}
        <div className="code-editor-panel">
          {/* Header Bar */}
          <div className="editor-header">
            <div className="window-dots">
              <span className="dot dot-red" />
              <span className="dot dot-amber" />
              <span className="dot dot-green" />
            </div>

            <div className="editor-tabs">
              <div className="editor-tab active">
                <DynamicIcon name="FileCode" size={13} />
                <span>Engineer.ts</span>
              </div>
              <div className="editor-tab inactive">
                <span>config.json</span>
              </div>
            </div>

            <div className="editor-meta-badge">
              <span className="live-dot" />
              <span>TypeScript</span>
            </div>
          </div>

          {/* Code Body with Syntax Highlighting */}
          <div className="editor-body">
            <div className="code-line">
              <span className="line-num">1</span>
              <span className="line-content">
                <span className="token-keyword">interface</span>{' '}
                <span className="token-type">DeveloperProfile</span>{' '}
                <span className="token-punct">&#123;</span>
              </span>
            </div>

            <div className="code-line">
              <span className="line-num">2</span>
              <span className="line-content">
                {'  '}<span className="token-prop">name</span>
                <span className="token-punct">:</span>{' '}
                <span className="token-type">string</span>
                <span className="token-punct">;</span>
              </span>
            </div>

            <div className="code-line">
              <span className="line-num">3</span>
              <span className="line-content">
                {'  '}<span className="token-prop">skills</span>
                <span className="token-punct">:</span>{' '}
                <span className="token-type">string[]</span>
                <span className="token-punct">;</span>
              </span>
            </div>

            <div className="code-line">
              <span className="line-num">4</span>
              <span className="line-content">
                <span className="token-punct">&#125;</span>
              </span>
            </div>

            <div className="code-line">
              <span className="line-num">5</span>
              <span className="line-content"></span>
            </div>

            <div className="code-line">
              <span className="line-num">6</span>
              <span className="line-content">
                <span className="token-keyword">const</span>{' '}
                <span className="token-var">engineer</span>
                <span className="token-punct">:</span>{' '}
                <span className="token-type">DeveloperProfile</span>{' '}
                <span className="token-punct">=</span>{' '}
                <span className="token-punct">&#123;</span>
              </span>
            </div>

            <div className="code-line">
              <span className="line-num">7</span>
              <span className="line-content">
                {'  '}<span className="token-prop">name</span>
                <span className="token-punct">:</span>{' '}
                <span className="token-string">"{devName}"</span>
                <span className="token-punct">,</span>
              </span>
            </div>

            <div className="code-line">
              <span className="line-num">8</span>
              <span className="line-content">
                {'  '}<span className="token-prop">role</span>
                <span className="token-punct">:</span>{' '}
                <span className="token-string">"{devTitle}"</span>
                <span className="token-punct">,</span>
              </span>
            </div>

            <div className="code-line">
              <span className="line-num">9</span>
              <span className="line-content">
                {'  '}<span className="token-prop">stack</span>
                <span className="token-punct">:</span>{' '}
                <span className="token-punct">[</span>
                <span className="token-string">{topFocus}</span>
                <span className="token-punct">],</span>
              </span>
            </div>

            <div className="code-line active-scan-line">
              <span className="line-num">10</span>
              <span className="line-content">
                {'  '}<span className="token-prop">status</span>
                <span className="token-punct">:</span>{' '}
                <span className="token-string">{typedText}</span>
                <span className="cursor-pulse" />
              </span>
            </div>

            <div className="code-line">
              <span className="line-num">11</span>
              <span className="line-content">
                <span className="token-punct">&#125;;</span>
              </span>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="editor-footer">
            <div className="status-left">
              <span>main*</span>
              <span>UTF-8</span>
            </div>
            <div className="status-right">
              <span>● Ready</span>
              <span>0 errors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
