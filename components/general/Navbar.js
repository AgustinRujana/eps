export default function Navbar({ content }) {
  return (
    <div className='relative'>
      <div className='absolute z-50 left-1/20 xl:left-1/8 top-2 rounded-full bg-darkBlue p-2'>
        <a href="/">
          <img className='h-16' src='/logos/IsotipoGrupoEPS.svg' />
        </a>
      </div>
      <div className='p-2'></div>
      <div className='bg-mainGray flex items-center justify-center'>
        {content.topBar.map((item) => (
          <a href={item.href}>
            <div className='flex items-center text-darkBlue px-2 py-1'>
              <img className='h-6 mr-1' src={item.icon} />
              <span className='font-montserrat font-bold uppercase'>
                {item.name}
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className='bg-darkBlue flex items-center justify-center'>
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
      <div className='absolute right-6 xl:right-1/8 top-6 bg-white text-darkBlue rounded flex items-center p-1'>
        <img className='h-8' src={content.mainBtn.icon} />
        <span className='font-montserrat text-sm font-bold uppercase leading-none'>
          {content.mainBtn.name}
        </span>
      </div>
    </div>
  );
}
