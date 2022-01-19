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
        <div className='sm:flex text-sm md:text-base justify-between items-center mt-6 md:mt-4 hidden'>
          <div
            onClick={() => setFormOficinaActive(true)}
            className='cursor-pointer flex justify-between items-center px-2 md:px-6 shadow-inner rounded-t-xl bg-fuchsia-800 h-full'
          >
            <p className='font-bold text-white'>Clínica Virtual</p>
          </div>
          <div
            // onClick={() => setCitaActive(true)}
            className='cursor-pointer flex justify-between items-center px-2 md:px-6 shadow-inner rounded-t-xl  bg-teal-400 h-full'
          >
            <p className='font-bold text-white'>Solicitar Cita</p>
          </div>
          <div className='cursor-pointer flex justify-between items-center px-2 md:px-6 h-full rounded-tl-xl bg-sky-500'>
            <p className='font-bold text-white'>Iniciar Sesión</p>
          </div>
        </div>
      </div>
      {/* Middle bar */}
      <div
        className={classNames(
          isFormOficinaActive ? 'bg-fuchsia-800' : 'bg-sky-500',
          'sm:flex hidden md:text-base text-sm w-full justify-center shadow-2xl items-cente transition-all ease-in-out duration-[2000ms]'
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
      <div className='sm:flex hidden w-full md:text-base text-sm justify-center shadow-2xl items-center bg-darkBlue'>
        <div className='flex items-center font-semibold text-white px-4 py-2'>
          <img className='h-6 mr-2' src='/images/icons/serviciosWhite.svg' />
          <a href='/#servicios'>Nuestros Servicios</a>
        </div>
        <div className='flex items-center font-semibold text-white px-4 py-2'>
          <img className='h-6 mr-2' src='/images/icons/clinicasWhite.svg' />
          <a href='/#clinicas'>Nuestras Clínicas</a>
        </div>
        <div className='flex items-center font-semibold text-white px-4 py-2'>
          <img
            className='h-6 mr-2'
            src='/images/icons/especialidadesWhite.svg'
          />
          <a href='/especialidades'>Especialidades</a>
        </div>
        <div className='flex items-center font-semibold text-white px-4 py-2'>
          <img className='h-6 mr-2' src='/images/icons/aseguradorasWhite.svg' />
          <a href='/aseguradoras'>Aseguradoras</a>
        </div>
      </div>
    </div>
  );
}
