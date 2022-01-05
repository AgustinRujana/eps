import FormularioOficina from './FormularioOficina';

export default function Navbar({
  content,
  isFormOficinaActive,
  setFormOficinaActive,
}) {
  return (
    <div className='relative'>
      <div className='md:absolute z-50 left-1/20 xl:left-1/8 top-2 md:rounded-full bg-darkBlue p-2'>
        <a href='/'>
          <img
            className='h-16 hidden md:block'
            src='/logos/IsotipoGrupoEPS.svg'
          />
          <img className='h-16 md:hidden mb-2' src='/logos/grupoEPS.svg' />
        </a>
      </div>
      <div className='md:p-2 p-1'></div>
      <div>
        <div
          className='flex md:hidden mt-2 bg-darkBlue p-2 rounded-l-lg items-center'
          onClick={() => setFormActive(true)}
        >
          <img className='h-8 mr-2' src='/images/icons/cardWhite.svg' />
          <p className='text-white uppercase font-semibold'>
            Contrata <br /> EPS Card
          </p>
        </div>
        <a
          href='https://wa.me/+50422631111'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='flex md:hidden bg-darkBlue p-2 rounded-l-lg items-center'>
            <img className='h-8 mr-2' src='/images/icons/whatsapp.svg' />
            <p className='text-white uppercase '>
              Habla con <br /> Nosotros
            </p>
          </div>
        </a>
      </div>
      <div className='bg-mainGray md:flex items-center justify-center'>
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
      <div className='bg-darkBlue md:flex items-center justify-center'>
        <div className='p-1 sm:hidden'></div>
        {content.downBar.map((item) => (
          <a href={item.href}>
            <div className='hidden sm:flex  items-center text-white px-2 py-1'>
              <span className='text-sm font-montserrat font-normal uppercase'>
                {item.name}
              </span>
            </div>
          </a>
        ))}
      </div>
      <div
        className='absolute right-6 xl:right-1/8 top-6 bg-white text-darkBlue rounded flex items-center p-1'
        onClick={() => setFormOficinaActive(true)}
      >
        <img className='h-8' src={content.mainBtn.icon} />
        <p className='font-montserrat text-sm font-bold uppercase leading-none'>
          {content.mainBtn.name}
        </p>
      </div>
      <FormularioOficina
        isFormOficinaActive={isFormOficinaActive}
        setFormOficinaActive={setFormOficinaActive}
      />
    </div>
  );
}
