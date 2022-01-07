import { CheckCircleIcon } from '@heroicons/react/outline';
import { list } from 'postcss';

import MapsSlider from './MapsSlider';

export default function Maps({ content }) {
  return (
    <section className='grid xl:grid-cols-3 grid-cols-1 xl:py-8'>
      {/* Logo */}
      <div className='bg-darkBlue col-span-1 p-4 xl:hidden'>
        <img className='h-16 mx-auto' src={content.logo} />
      </div>
      {/* Slider */}
      <div className='xl:col-span-2 col-span-1'>
        <MapsSlider content={content}/>
      </div>
      <div className='col-span-1'>
        <div className='bg-darkBlue rounded-r-xl p-4 hidden xl:block'>
          <img className='h-16 mx-auto' src={content.logo} />
        </div>
        {/* Listas */}
        <ul className='grid grid-cols-2 p-2 gap-x-2 max-w-fit xl:m-0 mx-auto'>
          {content.list.map((item) => (
            <li className='flex items-center'>
              <CheckCircleIcon className={`${content.color} h-4 mr-1`} />
              <p className='text-sm'>{item}</p>
            </li>
          ))}
        </ul>
        {/* Mapa e info */}
        <div className='grid grid-cols-1 items-center justify-between px-2'>
          <img className='col-span-1' src={content.map} />
          <div className='mb-4 col-span-1'>
            {content.content.map((list) => (
              <div className='text-xs text-darkBlue'>
                {list.map((item) => (
                  <p className=''>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
