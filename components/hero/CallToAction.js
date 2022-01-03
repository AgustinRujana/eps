import { useState } from 'react';
import { content } from '../../content/content';

const logos = content.hero.heroMap;

export default function CallToAction() {
  const [isActive, setActive] = useState(false);

  return (
    <div className='relative'>
      <div className='fixed right-0 top-[80vh] z-50 leading-tight text-center'>
        <div className=' bg-darkBlue p-2 rounded-l-lg flex items-center'>
          <img className='h-8 mr-2' src='/images/icons/whatsapp.svg' />
          <p className='text-white uppercase '>
            Habla con <br /> Nosotros
          </p>
        </div>
        <div className='mt-2 bg-darkBlue p-2 rounded-l-lg flex items-center'>
          <img className='h-8 mr-2' src='/images/icons/cardWhite.svg' />
          <p className='text-white uppercase font-semibold'>
            Contrata <br /> EPS Card
          </p>
        </div>
      </div>
      <div
				className={
          isActive
            ? 'fixed z-40 top-0 h-screen w-screen'
            : 'hidden'
        }
        onClick={() => setActive(false)}
      ></div>
      <div
        className={
          isActive
            ? 'bg-white text-darkBlue rounded-t-lg transition-all ease-in-out duration-1000 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50'
            : 'cursor-pointer text-white bg-darkBlue rounded-t-lg transition-all ease-in-out duration-1000 fixed -bottom-[58vh] left-1/2 transform -translate-x-1/2 z-50'
        }
        onClick={() => setActive(true)}
      >
        <div className=' py-4 px-8 '>
          <p className=' uppercase font-semibold text-center'>Aseguradoras</p>
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
