export default function Hero({ content }) {
  return (
    <header>
      <div className='flex md:h-24 items-center'>
        <img src={content.icon} className='hidden md:block h-20 mx-4' />
        <div className='w-full h-0.5 mt-10 bg-fuchsia-700'></div>
      </div>
      <div className='relative flex items-center justify-center'>
        <img
          src={content.href}
          className='max-h-screen w-full object-cover -z-20'
        />
        <h2 className='absolute text-lg lg:text-6xl w-4/6 -mr-32 md:w-1/2 md:-mr-96 text-darkBlue font-extrabold'>
          {content.title}
        </h2>
      </div>
      <div className='w-8/12 h-0.5 bg-fuchsia-700 mt-4'></div>
    </header>
  );
}
