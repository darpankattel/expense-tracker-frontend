"use client";
import { useState, useEffect } from 'react';

// Custom hook
const useIsDesktop = (breakpoint = 768) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    
    setIsDesktop(mediaQuery.matches);
    
    const handleChange = (e) => {
      setIsDesktop(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [breakpoint]);

  return isDesktop;
};

export default useIsDesktop;