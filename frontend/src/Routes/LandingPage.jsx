import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import { useScroll, motion, useTransform } from 'framer-motion';
// import video from '../assets/motion.mp4';

const LandingPage = () => {
  const { scrollY } = useScroll();
  const [backgroundColor, setBackgroundColor] = useState('bg-gray-100');
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  useEffect(() => {
    const handleScroll = (latest) => {
      const featuresSection = document.getElementById('features');
      const contactSection = document.getElementById('contact');

      if (contactSection && latest >= contactSection.offsetTop - 100) {
        setBackgroundColor('bg-gray-100');
      } else if (featuresSection && latest >= featuresSection.offsetTop - 100) {
        setBackgroundColor('background');
      } else {
        setBackgroundColor('bg-gray-100');
      }
    };

    return scrollY.onChange(handleScroll);
  }, [scrollY]);

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className={`flex-1 text-center scroll-smooth overflow-hidden transition-colors duration-300 ${backgroundColor === 'background' ? 'background' : backgroundColor}`}
      >
        <Hero />
        <div id="features">
          <Features backgroundColor={backgroundColor} />
        </div>

        <Testimonials backgroundColor={backgroundColor} />
        <Pricing />
        <div id="contact">
          <Contact backgroundColor={backgroundColor} />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
