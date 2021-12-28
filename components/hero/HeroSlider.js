import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const HeroSlider = ({ content }) => {
  const [current, setCurrent] = useState(0);
  const length = content.data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(content.data) || content.data.length <= 0) {
    return null;
  }

  return (
    <section className='relative flex justify-center items-center w-full'>
      <ChevronLeftIcon className='h-6 items-center absolute top-1/2 left-0' onClick={prevSlide} />
      <ChevronRightIcon className='h-6 absolute top-1/2 right-0' onClick={nextSlide} />
      {content.data.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default HeroSlider;