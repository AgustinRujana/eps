import { XIcon } from '@heroicons/react/outline';
import { classNames } from '../../helpers/classNames';

export default function MenuPanel(props) {
  return (
    <div
      className={classNames(
        props.show
          ? 'w-screen h-screen bg-sky-500 opacity-100'
          : 'w-0 h-screen bg-darkBlue opacity-20',
        'fixed z-[70] overflow-hidden top-0 left-0  transition-all duration-1000 ease-in-out'
      )}
    >
      <div
        className={classNames(
          props.show ? 'opacity-100' : 'opacity-0',
          'p-6 text-white font-semibold tracking-tight text-3xl transition-all duration-1000 ease-in-out'
        )}
      >
        <XIcon
          onClick={() => props.setShow(false)}
          className='h-12 text-white hover:text-darkBlue transition-all duration-500 ease-in-out absolute right-6 top-2'
        />
        <div className='hover:text-fuchsia-800 w-fit transition-all duration-500 ease-in-out'>
          <a href='/nosotros'>Nosotros</a>
        </div>
        <div className='hover:text-teal-400 w-fit transition-all duration-500 ease-in-out'>
          <a href='/aseguradoras'>Aseguradoras</a>
        </div>
        <div className='hover:text-darkBlue w-fit transition-all duration-500 ease-in-out'>
          <a href='/clinicas'>Nuestras clínicas </a>
        </div>
        <div className='hover:text-fuchsia-800 w-fit transition-all duration-500 ease-in-out'>
          <a href='/eps-card'>Nuestros servicios</a>
        </div>
        <div className='hover:text-teal-400 w-fit transition-all duration-500 ease-in-out'>
          <a href='/especialidades'>Especialidades</a>
        </div>
        <div className='hover:text-darkBlue w-fit transition-all duration-500 ease-in-out'>
          <a href='/eps-card'>EPS Card</a>
        </div>
        <div className='hover:text-fuchsia-800 w-fit transition-all duration-500 ease-in-out'>
          <a href='/programas'>Programas de salud</a>
        </div>
        <div className='hover:text-teal-400 w-fit transition-all duration-500 ease-in-out'>
          <a href='/servicios'>Servicio para empresas</a>
        </div>
      </div>
    </div>
  );
}
