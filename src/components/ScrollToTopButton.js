import React, { useState, useEffect } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Button } from '@mui/material';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to show/hide the button
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup: remove the scroll event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isTopVisible = scrollTop > 0;
    setIsVisible(isTopVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button sx={{right:'0'}}
      className={`scroll-to-top-button ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
      <ArrowDropUpIcon className="scroll-to-top-button-icon" />
    </Button>
  );
};

export default ScrollToTopButton;
