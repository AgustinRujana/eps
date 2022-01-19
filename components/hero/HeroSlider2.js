import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import ScrollSlideUp from '../general/ScrollSlideUp';

const HeroSlider2 = ({ content }) => {
  const [current, setCurrent] = useState(0);
  const length = content.clinicas.length;

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

  if (!Array.isArray(content.clinicas) || content.clinicas.length <= 0) {
    return null;
  }

  return (
    <section id='clinicas' className='shadow-xl'>
      <ScrollSlideUp>
        <div className='relative h-[60vh] w-full'>
          <div className='z-20 absolute flex bottom-4 hover:text-white text-darkBlue left-1/2 transform -translate-x-1/2'>
            <div className='px-2 py-1 bg-slate-100 rounded-l-full text-darkBlue hover:text-slate-100 hover:bg-darkBlue transition-all ease-in-out duration-500'>
              <ChevronLeftIcon className='h-8' onClick={prevSlide} />
            </div>
            <div className='px-2 py-1 bg-slate-100 rounded-r-full text-darkBlue hover:text-slate-100 hover:bg-darkBlue active:text-darkBlue transition-all ease-in-out duration-500'>
              <ChevronRightIcon className='h-8' onClick={nextSlide} />
            </div>
          </div>
          <div className='absolute shadow-inner sm:text-base text-sm z-20 md:left-0 lg:bottom-0 md:bottom-1/2 md:translate-x-0 lg:translate-y-0 left-1/2 bottom-3/4 transform translate-y-1/2 -translate-x-1/2 bg-white md:bg-opacity-100 bg-opacity-80 py-4 px-12 md:rounded-r-lg lg:rounded-tr-lg lg:rounded-r-none w-full md:w-[26rem] text-darkBlue text-center'>
            <p className='uppercase font-bold sm:text-3xl text-2xl'>
              Nuestras Clínicas
            </p>
            <p className='tracking-tighter leading-tight mb-2'>
              Espacios modernos, equipados con la más alta tecnología, a
              solo un paso de ti.
            </p>
            <a href='/clinicas'>
              <button className='uppercase shadow hover:shadow-xl cursor-pointer hover:bg-teal-400 transition-all ease-in-out duration-500 mt-2 py-2 px-12 bg-sky-400 text-white font-semibold sm:text-sm text-xs leading-tight rounded-lg'>
                Ver todas Nuestras Clinicas
              </button>
            </a>
          </div>
          <div className='absolute bg-darkBlue opacity-70 h-full w-full'></div>
          {content.clinicas.map((slide, index) => {
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
                  <img
                    src={slide.image}
                    className='h-full w-full object-cover'
                  />
                )}
              </div>
            );
          })}
        </div>
      </ScrollSlideUp>
    </section>
  );
};

export default HeroSlider2;
