import { MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';

import FormularioOficina from './FormularioOficina';
import MobileMenu from './MobileMenu';
import { classNames } from '../../helpers/classNames';

export default function Navbar({
  isFormActive,
  setFormActive,
  isFormOficinaActive,
  setFormOficinaActive,
}) {
  const [mobileShow, setMobileShow] = useState(false);

  return (
    <div className='relative'>
      <FormularioOficina
        isFormOficinaActive={isFormOficinaActive}
        setFormOficinaActive={setFormOficinaActive}
      />
      {/* Top bar */}
      <div className='flex w-full justify-between pl-4'>
        <div className='flex justify-between items-center py-2'>
          {/* <BurgerMenu/> */}
          <MenuIcon className='h-10' />
          <div>
            <a href='/'>
              <img className='h-12' src='/logos/logo.jpg' />
            </a>
          </div>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <div
            onClick={() => setFormOficinaActive(true)}
            className='cursor-pointer flex justify-between items-center px-6 shadow-inner rounded-t-xl bg-fuchsia-800 h-full'
          >
            <p className='font-bold text-white'>Clínica Virtual</p>
          </div>
          <div
                      onClick={() => setFormActive(true)}
           className='cursor-pointer flex justify-between items-center px-6 shadow-inner rounded-t-xl  bg-teal-400 h-full'>
            <p className='font-bold text-white'>Solicitar Cita</p>
          </div>
          <div className='cursor-pointer flex justify-between items-center px-6 h-full rounded-tl-xl bg-sky-500'>
            <p className='font-bold text-white'>Iniciar Sesión</p>
          </div>
        </div>
      </div>
      {/* Middle bar */}
      <div
        className={classNames(
          isFormActive
            ? 'bg-teal-400'
            : isFormOficinaActive
            ? 'bg-fuchsia-800'
            : 'bg-sky-500',
          'flex w-full justify-center shadow-2xl items-cente transition-all ease-linear duration-500'
        )}
      >
        <div className='font-semibold text-white px-4 py-2'>
          <a href='/nosotros'>Nosotros</a>
        </div>
        <div className='font-semibold text-white px-4 py-2'>
          <a href='/programas'>Programas de salud</a>
        </div>
        <div className='font-semibold text-white px-4 py-2'>
          <a href='/servicios'>Servicios para Empresas</a>
        </div>
        <div className='font-semibold text-white px-4 py-2'>
          <a href='/eps-card'>EPS Card</a>
        </div>
      </div>
      {/* Bottom bar */}
      <div className='flex w-full justify-center shadow-2xl items-center bg-darkBlue'>
        <div className='flex items-center font-semibold text-white px-4 py-2'>
          <img className='h-6 mr-2' src='/images/icons/cardWhite.svg' />
          <a href='/#servicios'>Nuestros Servicios</a>
        </div>
        <div className='flex items-center font-semibold text-white px-4 py-2'>
          <img className='h-6 mr-2' src='/images/icons/cardWhite.svg' />
          <a href='/#clinicas'>Nuestras Clínicas</a>
        </div>
        <div className='flex items-center font-semibold text-white px-4 py-2'>
          <img className='h-6 mr-2' src='/images/icons/cardWhite.svg' />
          <a href='/especialidadades'>Especialidades</a>
        </div>
        <div className='flex items-center font-semibold text-white px-4 py-2'>
          <img className='h-6 mr-2' src='/images/icons/cardWhite.svg' />
          <a href='/aseguradoras'>Aseguradoras</a>
        </div>
      </div>
    </div>
  );
}
