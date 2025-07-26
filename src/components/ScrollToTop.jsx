import React, { useState, useEffect } from 'react';
import { arrowUp2 } from '../assets';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-[50px] h-[50px] rounded-full bg-blue-gradient p-2 flex items-center justify-center
                     transform transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <img src={arrowUp2} alt="Go to top" className="w-[60%] h-[60%] object-contain" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;