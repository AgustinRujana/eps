import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const HeroSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.content.data.length;

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
    <section className='relative flex justify-center items-center w-full'>
      <ChevronLeftIcon className='h-6 items-center absolute top-1/2 left-0' onClick={prevSlide} />
      <ChevronRightIcon className='h-6 absolute top-1/2 right-0' onClick={nextSlide} />
      <div className={`${props.display} ${'absolute z-50 left-1/4 text-white'}`}>
        <p className='uppercase font-bold'>Estamos cerca de ti</p>
        <p>Espacios modernos <br/> equipados con la más alta tecnología</p>
        <button className='uppercase p-2 bg-teal-400 text-darkBlue font-semibold rounded-lg'>Conoce Nuestras Clinicas</button>
      </div>
      {props.content.data.map((slide, index) => {
        return (
          <div
            className={index === current ? 'opacity-100 transition-all ease-in-out duration-1000' : 'opacity-0 object-cover transition-all ease-in-out duration-1000'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='object-fill w-full'/>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default HeroSlider;