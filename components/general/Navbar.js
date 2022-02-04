import { MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';

import FormularioOficina from './FormularioOficina';
import MenuPanel from './MenuPanel';
//import MobileMenu from './MobileMenu';
import { classNames } from '../../helpers/classNames';

export default function Navbar({
  isFormActive,
  setFormActive,
  isFormOficinaActive,
  setFormOficinaActive,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className='relative'>
      <FormularioOficina
        isFormOficinaActive={isFormOficinaActive}
        setFormOficinaActive={setFormOficinaActive}
      />
      <MenuPanel show={show} setShow={setShow} />
      {/* Top bar */}
      <div className='flex w-full justify-between pl-4 shadow-2xl fixed top-0 bg-white z-[60] sm:static'>
        <div className='flex justify-between items-center py-2'>
          {/* <BurgerMenu/> */}
          <MenuIcon
            onClick={() => setShow(true)}
            className='h-10 text-darkBlue hover:text-sky-500 transition-all duration-500 ease-in-out'
          />
          <div className='ml-4'>
            <a href='/'>
              <img className='h-12' src='/logos/logoGrupoEPSHorizontal.svg' />
            </a>
          </div>
        </div>
        <div className='sm:flex text-sm uppercase tracking-wide md:text-base justify-between items-center hidden gap-2 mr-2'>
          <div
            onClick={() => setFormOficinaActive(true)}
            className='cursor-pointer flex justify-between items-center px-4 py-2 rounded-full hover:bg-teal-400 bg-sky-500 shadow hover:shadow-xl transition-all hover:scale-105'
          >
            <p className=' text-white'>Clínica Virtual</p>
          </div>
          <a
            href='/solicitar-cita'
            className='cursor-pointer flex justify-between items-center px-4 py-2 rounded-full hover:bg-teal-400 bg-sky-500 shadow hover:shadow-xl transition-all hover:scale-105'
          >
            <p className='text-white'>Solicitar Cita</p>
          </a>
          {/* <div className='cursor-pointer flex justify-between items-center px-2 md:px-6 h-full rounded-tl-xl bg-sky-500'>
            <p className='font-bold text-white'>Iniciar Sesión</p>
          </div> */}
        </div>
      </div>
      {/* Middle bar
      <div
        className={classNames(
          isFormOficinaActive ? 'bg-fuchsia-800' : 'bg-sky-500',
          'sm:flex hidden text-sm w-full justify-center shadow-2xl items-cente transition-all ease-in-out duration-[2000ms]'
        )}
      >
        <div className='uppercase tracking-wide border-b border-sky-500 hover:border-white hover:shadow-inner text-white px-4 py-2'>
          <a href='/nosotros'>Nosotros</a>
        </div>
        <div className='uppercase tracking-wide text-white px-4 py-2'>
          <a href='/programas'>Programas de salud</a>
        </div>
        <div className='uppercase tracking-wide text-white px-4 py-2'>
          <a href='/servicios'>Servicios para Empresas</a>
        </div>
        <div className='uppercase tracking-wide text-white px-4 py-2'>
          <a href='/eps-card'>EPS Card</a>
        </div>
      </div> */}
      {/* Bottom bar */}
      <div className='sm:flex hidden w-full text-sm justify-center shadow-2xl items-center leading-none bg-darkBlue'>
        <div className='flex items-center tracking-wide uppercase text-white text-center px-4 py-2'>
          <img className='h-5 mr-2' src='/images/icons/serviciosWhite.svg' />
          <a href='/programas'>Programas <br/> de salud</a>
        </div>
        <div className='flex items-center tracking-wide uppercase text-white px-4 py-2'>
          <img className='h-5 mr-2' src='/images/icons/serviciosWhite.svg' />
          <a href='/nosotros'>Nosotros</a>
        </div>
        <div className='flex items-center tracking-wide uppercase text-white text-center px-4 py-2'>
          <img className='h-5 mr-2' src='/images/icons/serviciosWhite.svg' />
          <a href='/servicios'>Servicios para <br/> Empresas</a>
        </div>
        <div className='flex items-center tracking-wide uppercase text-white px-4 py-2'>
          <img className='h-5 mr-2' src='/images/icons/clinicasWhite.svg' />
          <a href='/clinicas'>Clínicas</a>
        </div>
        <div className='flex items-center tracking-wide uppercase text-white px-4 py-2'>
          <img className='h-5 mr-2' src='/images/icons/cardWhite.svg' />
          <a href='/eps-card'>EPS Card</a>
        </div>
        <div className='flex items-center tracking-wide uppercase text-white px-4 py-2'>
          <img
            className='h-5 mr-2'
            src='/images/icons/especialidadesWhite.svg'
          />
          <a href='/especialidades'>Especialidades</a>
        </div>
        <div className='flex items-center tracking-wide uppercase text-white px-4 py-2'>
          <img className='h-5 mr-2' src='/images/icons/aseguradorasWhite.svg' />
          <a href='/aseguradoras'>Aseguradoras</a>
        </div>
      </div>
    </div>
  );
}
