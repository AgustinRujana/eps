import { MenuIcon } from '@heroicons/react/outline';

export default function MobileMenu(props) {
  const { content, setFormOficinaActive, mobileShow, setMobileShow } = props;
  return (
    <section className='md:hidden'>
      <div className='bg-darkBlue grid grid-cols-3 items-center justify-center'>
        <div className='p-2 flex items-center justify-center'>
          <a href='/'>
            <img className='h-14 mb-2' src='/logos/grupoEPS.svg' />
          </a>
        </div>
        <div
          className='bg-white text-darkBlue rounded flex items-center justify-center p-2 w-fit mx-auto'
          onClick={() => setFormOficinaActive(true)}
        >
          <img className='h-7' src={content.mainBtn.icon} />
          <p className='font-montserrat md:text-sm text-xs font-bold uppercase leading-none text-center'>
            {content.mainBtn.name}
          </p>
        </div>
        <div
          className='p-2 flex items-center justify-center'
          onClick={() => setMobileShow(true)}
        >
          <MenuIcon className='h-12 text-white' />
        </div>
      </div>
      <div className='mt-2 grid grid-cols-2 bg-darkBlue items-center justify-center'>
        <div
          className='flex col-span-1 p-2 items-center justify-center'
          onClick={() => setFormActive(true)}
        >
          <img className='h-6 mr-2' src='/images/icons/cardWhite.svg' />
          <p className='text-white uppercase text-sm'>Contratar</p>
        </div>
        <a
          href='https://wa.me/+50422631111'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='flex p-2 items-center justify-center'>
            <img className='h-6 mr-2' src='/images/icons/whatsapp.svg' />
            <p className='text-white uppercase text-sm'>Contactar</p>
          </div>
        </a>
      </div>
    </section>
  );
}
