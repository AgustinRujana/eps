import { useState } from 'react';
import { content } from '../../content/content';
import FormularioCard from './FormularioCard';

const logos = content.hero.heroMap;

export default function CallToAction({isFormActive, setFormActive}) {
  const [isActive, setActive] = useState(false);
  return (
    <div className='relative'>
      <div className='md:fixed md:block hidden right-0 top-[80vh] z-30 leading-tight text-center'>
        <a
          href='https://wa.me/+50422631111'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='hidden md:flex shadow-lg bg-lime-500 p-2 rounded-l-lg items-center'>
            <img className='h-8 mr-2' src='/images/icons/whatsapp.svg' />
            <p className='text-white uppercase '>
              Habla con <br /> Nosotros
            </p>
          </div>
        </a>
          <div className='hidden md:flex mt-2 bg-lime-500 p-2 rounded-l-lg items-center'
					onClick={() => setFormActive(true)}>
            <img className='h-8 mr-2' src='/images/icons/cardWhite.svg' />
            <p className='text-white uppercase font-semibold'>
              Contrata <br /> EPS Card
            </p>
          </div>
      </div>
			<FormularioCard isFormActive={isFormActive} setFormActive={setFormActive}/>
      <div
        className={isActive ? 'fixed z-40 top-0 h-screen w-screen' : 'hidden'}
        onClick={() => setActive(false)}
      ></div>
      <div
        className={
          isActive
            ? 'bg-white text-darkBlue rounded-t-lg transition-all ease-in-out duration-1000 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50'
            : 'cursor-pointer text-white bg-darkBlue rounded-t-lg transition-all ease-in-out duration-1000 fixed -bottom-[30rem] left-1/2 transform -translate-x-1/2 z-50'
        }
        onClick={() => setActive(true)}
      >
        <div className='md:py-4 py-2 px-8 '>
          <p className='uppercase font-semibold text-center'>Aseguradoras</p>
        </div>
        <div className='p-4 flex-col items-center justify-center'>
          {logos.map((item) => (
            <img className='h-16 mx-auto' src={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
