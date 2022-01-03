import { CheckCircleIcon } from '@heroicons/react/outline';
import { list } from 'postcss';

import HeroSlider from '../hero/HeroSlider';

export default function Maps({ content }) {
  return (
    <section className='grid sm:grid-cols-2 py-4'>
      <div className='col-span-1'>
        <HeroSlider content={content} display={'hidden'} />
      </div>
      <div className='col-span-1'>
        <div className='w-1/2 bg-darkBlue rounded-r-full'>
          <img className='h-16' src={content.logo} />
        </div>
        <ul className='grid sm:grid-cols-2 p-2'>
          {content.list.map((item) => (
            <li className='flex items-center'>
              <CheckCircleIcon className={`${content.color} h-4 mr-1`} />
              <p className='text-sm'>{item}</p>
            </li>
          ))}
        </ul>
        <div className='flex-col w-full items-center justify-between px-2'>
          <img className='' src={content.map} />
          <div>
            {content.content.map((list) => (
              <div className='text-xs text-darkBlue'>
                {list.map((item) => (
                    <p>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
