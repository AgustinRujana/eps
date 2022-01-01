import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const HeroSlider2 = ({ content }) => {
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
      <div className='absolute left-0 bottom-0 bg-white py-4 px-12 rounded-tr-lg text-darkBlue text-center'>
        <p className='uppercase font-bold text-2xl'>Nuestras Clínicas</p>
        <p>Espacios modernos, equipados con la <br/> más alta tecnología, a solo un paso de ti.</p>
        <button className='uppercase mt-2 py-2 px-12 bg-darkBlue text-white font-semibold text-sm leading-tight rounded-lg'>Ver todas <br/> Nuestras Clinicas</button>
      </div>
      {content.data.map((slide, index) => {
        return (
          <div
            className={index === current ? 'opacity-100 transition-all ease-in-out duration-1000' : 'opacity-0 transition-all ease-in-out duration-1000'}
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

export default HeroSlider2;