import { useEffect, useState } from 'react';

// let scrollPosition = 0;
// const setScrollPosition = (value) => {
//   return (scrollPosition = value);
// };

export default function usePosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}
