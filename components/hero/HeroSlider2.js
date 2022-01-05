import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const HeroSlider2 = ({ content }) => {
  const [current, setCurrent] = useState(0);
  const length = content.data.length;

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

  if (!Array.isArray(content.data) || content.data.length <= 0) {
    return null;
  }

  return (
    <section className='relative h-[90vh] w-full'>
      <div className='z-20 absolute flex bottom-4 hover:text-white text-darkBlue left-1/2 transform -translate-x-1/2'>
        <div className='px-2 py-1 bg-slate-100 rounded-l-full text-darkBlue hover:text-slate-100 hover:bg-darkBlue transition-all ease-in-out duration-500'>
          <ChevronLeftIcon className='h-8' onClick={prevSlide} />
        </div>
        <div className='px-2 py-1 bg-slate-100 rounded-r-full text-darkBlue hover:text-slate-100 hover:bg-darkBlue active:text-darkBlue transition-all ease-in-out duration-500'>
          <ChevronRightIcon className='h-8' onClick={nextSlide} />
        </div>
      </div>
      <div className='absolute z-20 left-0 bottom-0 bg-white py-4 px-12 rounded-tr-lg text-darkBlue text-center'>
        <p className='uppercase font-bold text-2xl'>Nuestras Clínicas</p>
        <p>
          Espacios modernos, equipados con la <br /> más alta tecnología, a solo
          un paso de ti.
        </p>
        <a href='/clinicas'>
          <button className='uppercase mt-2 py-2 px-12 bg-darkBlue text-white font-semibold text-sm leading-tight rounded-lg'>
            Ver todas <br /> Nuestras Clinicas
          </button>
        </a>
      </div>
      <div className='absolute bg-darkBlue opacity-70 h-full w-full'></div>
      {content.data.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? 'absolute z-10 h-full w-full opacity-100 transition-all ease-in-out duration-1000'
                : 'absolute z-10 opacity-0 h-full w-full object-cover transition-all ease-in-out duration-1000'
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

export default HeroSlider2;
