import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const HeroSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.content.data.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000 + Math.floor(Math.random() * (2 - 0 + 1) + 0) * 1000);
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
    <section className='relative justify-center items-center h-[80vh] w-full'>
      <div className='z-20 absolute flex bottom-4 hover:text-white text-darkBlue left-1/2 transform -translate-x-1/2'>
        <div className='px-2 py-1 bg-slate-100 rounded-l-full text-darkBlue hover:text-slate-100 hover:bg-darkBlue transition-all ease-in-out duration-500'>
          <ChevronLeftIcon className='h-8' onClick={prevSlide} />
        </div>
        <div className='px-2 py-1 bg-slate-100 rounded-r-full text-darkBlue hover:text-slate-100 hover:bg-darkBlue active:text-darkBlue transition-all ease-in-out duration-500'>
          <ChevronRightIcon className='h-8' onClick={nextSlide} />
        </div>
      </div>
      <div
        className={`${
          props.display
        } ${'absolute z-40 top-1/2 transform -translate-y-1/2 md:left-1/4 left-1/2 -translate-x-1/2 md:-translate-x-0 text-white'}`}
      >
        <p className='uppercase font-bold text-4xl text-darkBlue'>Estamos cerca de ti</p>
        <a href='/clinicas'>
          <div className='mt-4'>
            <button className='uppercase px-4 p-2 transition-all ease-in-out duration-500 hover:bg-teal-400 bg-darkBlue text-white font-semibold rounded-lg'>
              Conoce Nuestras Clinicas
            </button>
          </div>
        </a>
      </div>
      <div className='absolute bg-white opacity-90 h-full w-full'></div>
      {props.content.data.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? 'absolute h-full w-full opacity-100 transition-all ease-in-out duration-1000'
                : 'absolute opacity-0 h-full w-full object-cover transition-all ease-in-out duration-1000'
            }
            key={index}
          >
            {index === current && (
              <img src={slide.image} className='h-full w-full object-cover' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default HeroSlider;
