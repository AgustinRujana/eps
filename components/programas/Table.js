import { CheckCircleIcon } from '@heroicons/react/outline';

export default function Table({ item, color }) {
  return (
    <div className='w-full px-8 text-darkBlue mt-4'>
      <header className='w-full grid grid-cols-12 font-semibold border-t border-b border-r border-darkBlue'>
        <div></div>
        <div className='col-span-7'>PRESTACIONES</div>
        <div className='col-span-2 text-center border-r border-darkBlue'>
          Básico
        </div>
        <div className='col-span-2 text-center'>Plus</div>
      </header>
      <main className='border-b border-darkBlue'>
        {item.map((row, i) => (
          <div
            key={i}
            className='grid grid-cols-12 border-r border-darkBlue text-sm'
          >
            <div>
              <CheckCircleIcon className={`text-${color} h-6`} />
            </div>
            <div className='col-span-7 flex items-center'>
              <p className='font-medium text-sm '>{row.name}</p>
              <span className='border-t-2 border-dotted flex-1 h-0 mx-1 lg:mx-2 border-darkBlue table-cell'></span>
            </div>
            <div className='col-span-2 border-r border-darkBlue text-center font-medium'>
              {row.basic}
            </div>
            <div className='col-span-2 text-center font-medium'>{row.pro}</div>
          </div>
        ))}
      </main>
    </div>
  );
}
