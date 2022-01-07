import { MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';

import FormularioOficina from './FormularioOficina';
import MobileMenu from './MobileMenu';

export default function Navbar({
  content,
  isFormActive,
  setFormActive,
  isFormOficinaActive,
  setFormOficinaActive,
}) {
  const [mobileShow, setMobileShow] = useState(false);

  return (
    <div className='relative'>
      <MobileMenu
        content={content}
        setFormOficinaActive={setFormOficinaActive}
        setFormActive={setFormActive}
        mobileShow={mobileShow}
        setMobileShow={setMobileShow}
      />
      <div className='hidden md:block md:absolute z-50 left-1/20 xl:left-1/8 top-2 md:rounded-full bg-darkBlue p-2'>
        <a href='/'>
          <img className='h-16' src='/logos/IsotipoGrupoEPS.svg' />{' '}
        </a>
      </div>
      <div
        className='hidden cursor-pointer absolute right-6 xl:right-1/8 top-6 bg-white hover:bg-slate-200 transition-all ease-in-out duration-500 text-darkBlue rounded md:flex items-center p-1'
        onClick={() => setFormOficinaActive(true)}
      >
        <img className='md:h-8 h-7' src={content.mainBtn.icon} />
        <p className='font-montserrat md:text-sm text-xs font-bold uppercase leading-none'>
          {content.mainBtn.name}
        </p>
      </div>
      <div className='md:p-2 p-1'></div>
      <div className='hidden bg-mainGray md:flex items-center justify-center'>
        {content.topBar.map((item) => (
          <a href={item.href}>
            <div className='flex items-center text-darkBlue md:px-2 px-1 py-1'>
              <img className='h-6 mr-1' src={item.icon} />
              <span className='font-montserrat font-bold uppercase'>
                {item.name}
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className='hidden bg-darkBlue md:flex items-center justify-center'>
        <div className='p-1'></div>
        {content.downBar.map((item) => (
          <a href={item.href}>
            <div className='flex items-center text-white px-2 py-1'>
              <span className='text-sm font-montserrat font-normal uppercase'>
                {item.name}
              </span>
            </div>
          </a>
        ))}
      </div>
      <FormularioOficina
        isFormOficinaActive={isFormOficinaActive}
        setFormOficinaActive={setFormOficinaActive}
      />
    </div>
  );
}
