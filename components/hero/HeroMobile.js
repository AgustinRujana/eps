import { CheckCircleIcon } from '@heroicons/react/outline';

export default function HeroMobile({ content }) {
  return (
    <section className='max-w-7xl mx-auto font-montserrat grid md:grid-cols-2 items-center'>
      <div className='md:hidden md:mt-0 mt-96 text-center relative before:block before:absolute before:-inset-x-1 md:before:-inset-y-48 before:-inset-y-72 before:bg-slate-200'>
        <div className='text-xl absolute md:-top-64 -top-[28rem] sm:left-1/3 left-1/8'>
          <img className='pl-8 w-auto h-96 rotate-6' src='/images/mobile.png' />
          <div className='flex items-center justify-center gap-x-2'>
            <img className='h-10' src='/images/mac.svg' />
            <img className='h-10' src='/images/googlePlay.svg' />
          </div>
        </div>
      </div>
      <div className='bg-darkBlue z-40 text-white sm:py-14 py-6 px-4 md:rounded-r-3xl'>
        <div className='p-4 md:text-lg text-base'>
          <p className='md:text-4xl text-3xl font-bold uppercase mb-2'>
            EPS Movil
          </p>
          <p>Te presentamos nuestra aplicación móvil.</p>
          <p>Con ella podrás:</p>
          <ul className='pt-2'>
            {content.map((item) => (
              <li className='flex items-center'>
                <CheckCircleIcon className='md:h-8 h-4 mr-1 text-teal-400' />
                <p className='text-sm md:text-base'>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='hidden md:block text-center relative before:block before:absolute before:-inset-x-1 before:-inset-y-48 before:bg-slate-200'>
        <div className='text-xl absolute -top-64 left-1/4'>
          <img className='pl-8 w-auto h-96 rotate-6' src='/images/mobile.png' />
          <div className='flex items-center justify-center gap-x-2'>
            <img className='h-10' src='/images/mac.svg' />
            <img className='h-10' src='/images/googlePlay.svg' />
          </div>
        </div>
      </div>
    </section>
  );
}
