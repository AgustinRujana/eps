import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const HeroSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.content.data.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000 + (Math.floor(Math.random() * (2 - 0 + 1) + 0)*1000));
    return () => clearTimeout(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props.content.data) || props.content.data.length <= 0) {
    return null;
  }

  return (
    <section className='relative justify-center items-center h-[90vh] w-full'>
      <ChevronLeftIcon className='h-6 items-center z-50 absolute top-1/2 left-0' onClick={prevSlide} />
      <ChevronRightIcon className='h-6 absolute top-1/2 z-50 right-0' onClick={nextSlide} />
      <div className={`${props.display} ${'absolute z-40 top-1/2 transform -translate-y-1/2 left-1/4 text-white'}`}>
        <p className='uppercase font-bold'>Estamos cerca de ti</p>
        <p>Espacios modernos <br/> equipados con la más alta tecnología</p>
        <button className='uppercase p-2 bg-teal-400 text-darkBlue font-semibold rounded-lg'>Conoce Nuestras Clinicas</button>
      </div>
      <div className='absolute bg-darkBlue opacity-70 h-full w-full'></div>
      {props.content.data.map((slide, index) => {
        return (
          <div
            className={index === current ? 'absolute h-full w-full opacity-100 transition-all ease-in-out duration-1000' : 'absolute opacity-0 h-full w-full object-cover transition-all ease-in-out duration-1000'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} className='h-full w-full object-cover'/>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default HeroSlider;