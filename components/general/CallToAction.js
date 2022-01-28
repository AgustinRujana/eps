import { XIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { content } from '../../content/content';
import FormularioCard from './FormularioCard';
import { classNames } from '../../helpers/classNames';

const logos = content.hero.heroMap;

export default function CallToAction({ isFormActive, setFormActive }) {
  const [isActive, setActive] = useState(false);
  return (
    <div className='relative'>
      <div className='md:fixed md:block hidden right-0 top-[80vh] z-30 leading-tight text-center'>
        <a
          href='https://wa.me/+50422631111'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='hidden md:flex shadow hover:shadow-2xl hover:bg-teal-400 transition-all ease-in-out duration-500 bg-sky-500 p-2 rounded-l-lg items-center'>
            <img className='h-8 mr-2' src='/images/icons/whatsapp.svg' />
            <p className='text-white uppercase '>
              Habla con <br /> Nosotros
            </p>
          </div>
        </a>
        <div
          className='hidden cursor-pointer md:flex mt-2 shadow hover:shadow-2xl hover:bg-teal-400 bg-fuchsia-800 transition-all ease-in-out duration-500 p-2 rounded-l-lg items-center'
          onClick={() => setFormActive(true)}
        >
          <img className='h-8 mr-2' src='/images/icons/cardWhite.svg' />
          <p className='text-white uppercase font-semibold'>
            Contrata <br /> EPS Card
          </p>
        </div>
      </div>
      <FormularioCard
        isFormActive={isFormActive}
        setFormActive={setFormActive}
      />
      <div
        className={isActive ? 'fixed z-40 top-0 h-screen w-screen' : 'hidden'}
        onClick={() => setActive(false)}
      ></div>
      <div
        className={
          isActive
            ? 'bg-white w-fit text-darkBlue rounded-t-lg transition-all ease-in-out duration-1000 shadow-2xl fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50'
            : 'cursor-pointer w-fit hover:bg-sky-500 text-white bg-darkBlue rounded-t-lg transition-all ease-in-out duration-1000 fixed -bottom-[22rem] left-1/2 transform -translate-x-1/2 z-50'
        }
        onClick={() => (isActive ? setActive(false) : setActive(true))}
      >
        <div
          className={
            isActive
              ? 'z-[60] opacity-100 absolute top-4 right-4'
              : 'opacity-0 hidden'
          }
        >
          <XIcon className='h-6 text-slate-400 hover:text-slate-600' />
        </div>
        <div className='xl:py-4 py-2 px-8'>
          <p className='uppercase font-semibold text-center'>Aseguradoras</p>
        </div>
        <div className='p-4 grid grid-cols-2 items-center justify-center'>
          {logos.map((item, i) => (
            <img className='h-16 mx-auto' src={item.icon} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
