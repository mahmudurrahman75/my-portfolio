import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import { DynamicIcon } from '../../utils/icons';
import aboutData from '../../data/about.json';
import '../../styles/about.css';

/* ---- Reusable animation variants ---- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/* ---- Animated Counter Component ---- */
function AnimatedCounter({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="highlight-card"
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      <div className="highlight-label">{label}</div>
      <motion.div
        className="highlight-value"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
      >
        {value}
      </motion.div>
    </motion.div>
  );
}

/* ---- Main About Component ---- */
export default function About() {
  if (!aboutData) return null;

  const {
    heading = 'About Me',
    biography = [],
    highlights = [],
    coreStrengths = [],
    professionalInterests = [],
    careerGoals,
  } = aboutData;

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      {/* Ambient background orbs */}
      <div className="about-ambient-orb about-ambient-orb--1" aria-hidden="true" />
      <div className="about-ambient-orb about-ambient-orb--2" aria-hidden="true" />
      <div className="about-ambient-orb about-ambient-orb--3" aria-hidden="true" />

      {/* Floating particles */}
      <div className="about-particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="about-particle" />
        ))}
      </div>

      <Container>
        {/* Section heading */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <SectionHeading
            badge="Background"
            title={heading}
            description="A glimpse into my engineering mindset, technical philosophies, and career journey."
          />
        </motion.div>

        <div className="about-grid">
          {/* ===== LEFT: Biography & Highlights ===== */}
          <motion.div
            className="about-left"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {/* Bio paragraphs with staggered reveal */}
            <motion.div className="about-bio-text" variants={staggerContainer}>
              {Array.isArray(biography) ? (
                biography.map((para, index) => (
                  <motion.p
                    key={index}
                    variants={fadeLeft}
                    custom={index}
                  >
                    {para}
                  </motion.p>
                ))
              ) : (
                <motion.p variants={fadeLeft}>{biography}</motion.p>
              )}

              {/* Career Goals */}
              {careerGoals && (
                <motion.div
                  className="about-focus-text"
                  variants={fadeUp}
                  custom={biography.length}
                >
                  <strong>Focus:</strong> {careerGoals}
                </motion.div>
              )}
            </motion.div>

            {/* Animated divider */}
            <motion.div
              className="about-divider"
              variants={fadeUp}
              custom={0}
              aria-hidden="true"
            />

            {/* Highlight Metrics */}
            {highlights.length > 0 && (
              <motion.div
                className="about-highlights-row"
                variants={staggerContainer}
              >
                {highlights.map((item, idx) => (
                  <AnimatedCounter
                    key={idx}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* ===== RIGHT: Profile Image & Core Strengths ===== */}
          <motion.div
            className="about-right"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {/* Profile Image with animated frame */}
            <motion.div
              className="about-image-wrapper"
              variants={scaleIn}
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            >
              <img
                src="/images/formal-image.jpeg"
                alt="Mahmudur Rahman"
                className="about-profile-image"
                loading="lazy"
              />
            </motion.div>

            {/* Core Strengths */}
            {coreStrengths.length > 0 && (
              <motion.div
                className="about-strengths-box"
                variants={staggerContainer}
              >
                {coreStrengths.map((strength, idx) => (
                  <motion.div
                    key={idx}
                    className="strength-item"
                    variants={fadeRight}
                    custom={idx}
                    whileHover={{
                      x: 6,
                      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    }}
                  >
                    <span className="strength-index">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <h3 className="strength-title">
                      <motion.span
                        whileHover={{ rotate: 15, scale: 1.15 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'inline-flex' }}
                      >
                        <DynamicIcon name="Sparkles" size={16} />
                      </motion.span>
                      {strength.title}
                    </h3>

                    <p className="strength-desc">{strength.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* ===== Professional Interests ===== */}
        {professionalInterests.length > 0 && (
          <motion.div
            className="about-interests-box"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={0}
          >
            <h4 className="about-interests-title">
              <DynamicIcon name="Zap" size={14} />
              Areas of Interest
            </h4>

            <motion.div
              className="about-interests-grid"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {professionalInterests.map((interest, index) => (
                <motion.span
                  key={index}
                  className="interest-tag"
                  variants={scaleIn}
                  custom={index}
                  whileHover={{
                    y: -2,
                    scale: 1.03,
                    transition: { duration: 0.25 },
                  }}
                >
                  <span className="interest-tag-dot" />
                  {interest}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
