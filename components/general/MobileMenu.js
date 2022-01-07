import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function MobileMenu(props) {
  const { content, setFormActive, setFormOficinaActive, mobileShow, setMobileShow } = props;

  return (
    <section className='relative md:hidden z-40'>
      <div className='divide-y'>
        {/* grupoEPS Boton y menu */}
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
        {/* EPS Cards y Contacto */}
        <div className='grid grid-cols-2 bg-darkBlue items-center justify-center py-2'>
          <div
            className='flex col-span-1 p-2 items-center justify-center'
            onClick={() => setFormActive(true)}
          >
            <img className='h-6 mr-2' src='/images/icons/cardWhite.svg' />
            <p className='text-white uppercase text-sm'>EPS Card</p>
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
      </div>
      {/* Desplegable */}
      <div
        className={
          mobileShow ? 'absolute w-full top-0 divide-y transform transition-all ease-out duration-1000' : 'absolute w-full -top-96 transform transition-all ease-out duration-1000'
        }
      >
        {/* grupoEPS Boton y close */}
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
            onClick={() => setMobileShow(false)}
          >
            <XIcon className='h-12 text-white' />
          </div>
        </div>
        {/* EPS Cards y Contacto */}
        <div className='grid grid-cols-2 bg-darkBlue items-center justify-center py-2'>
          <div
            className='flex col-span-1 p-2 items-center justify-center'
            onClick={() => setFormActive(true)}
          >
            <img className='h-6 mr-2' src='/images/icons/cardWhite.svg' />
            <p className='text-white uppercase text-sm'>EPS Card</p>
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
        <div className='grid grid-cols-2 bg-slate-100 items-center justify-center py-2'>
          {content.topBar.map((item) => (
            <a href={item.href}>
              <div className='flex items-center text-darkBlue px-1 py-1'>
                <img className='h-6 mr-1' src={item.icon} />
                <span className='font-montserrat font-semibold text-xs uppercase tracking-tight'>
                  {item.name}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className='grid grid-cols-2 bg-darkBlue items-center justify-center py-2'>
          {content.downBar.map((item) => (
            <a href={item.href}>
              <div className='flex items-center text-white px-2 py-1'>
                <span className='font-montserrat font-semibold text-xs uppercase tracking-tight'>
                  {item.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
