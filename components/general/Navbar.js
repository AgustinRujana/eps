export default function Navbar({ content }) {
  return (
    <div className='relative'>
      <div className='absolute left-20 top-2 rounded-full bg-darkBlue p-2'>
        <img
          className='h-16'
          src='/logos/IsotipoGrupoEPS.svg'
        />
      </div>
			<div className="p-2"></div>
      <div className='bg-mainGray flex items-center justify-center'>
        {content.topBar.map((item) => (
          <div className='flex items-center text-darkBlue px-2 py-1'>
            <item.icon className='h-5 mr-1' />
            <span className='font-montserrat font-bold uppercase'>
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div className='bg-darkBlue flex items-center justify-center'>
        {content.downBar.map((item) => (
          <div className='flex items-center text-white px-2 py-1'>
            <span className='text-sm font-montserrat font-normal uppercase'>
              {item.name}
            </span>
          </div>
        ))}
      </div>
			<div className='absolute right-8 top-6 bg-white text-darkBlue rounded flex items-center p-1'>
						<content.mainBtn.icon className='h-8' />
            <span className='font-montserrat text-sm font-bold uppercase leading-none'>
              {content.mainBtn.name}
            </span>
      </div>
    </div>
  );
}
