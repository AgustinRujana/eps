import { CheckCircleIcon } from '@heroicons/react/outline';

export default function HeroMobile({ content }) {
  return (
    <section className=' max-w-7xl mx-auto font-montserrat grid grid-cols-2 items-center'>
      <div className='bg-darkBlue  z-40 text-white py-14 px-4 rounded-r-3xl'>
        <div className='p-4 text-xl'>
          <p className='text-4xl font-bold uppercase mb-2'>EPS Movil</p>
          <p>Te presentamos nuestra aplicación móvil.</p>
          <p>Con ella podrás:</p>
          <ul className='pt-2'>
            {content.map((item) => (
              <li className='flex items-center'>
                <CheckCircleIcon className='h-8 mr-1 text-teal-400' />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='text-center relative before:block before:absolute before:-inset-x-1 before:-inset-y-48 before:bg-slate-200'>
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
