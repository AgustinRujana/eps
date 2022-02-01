import { CheckCircleIcon } from '@heroicons/react/outline';

export default function Table({ item, color }) {
  return (
    <div className='w-full px-8 text-darkBlue mt-4'>
      <header className='w-full grid items-center grid-cols-12 font-semibold divide-x divide-darkBlue border-darkBlue border'>
        <div className='col-span-8 pl-5'>PRESTACIONES</div>
        <div className='col-span-2 text-center tracking-tighter leading-none'>
          Quiero Salud
        </div>
        <div className='col-span-2 text-center tracking-tighter leading-none'>Vida <br/> Plus</div>
      </header>
      <main className='border-darkBlue border-r border-l border-b divide-y divide-darkBlue divide-dotted'>
        {item.map((row, i) => (
          <div
            key={i}
            className='grid grid-cols-12 text-sm divide-x divide-darkBlue'
          >
            <div className='col-span-8 flex items-center'>
              <div className='flex items-center justify-center'>
                <CheckCircleIcon className={`text-${color} h-4 mr-1`} />
              </div>
              <p className='text-sm tracking-tight'>{row.name}</p>
              {/* <span className='border-t-2 border-dotted flex-1 h-0 mx-1 lg:mx-2 border-darkBlue table-cell'></span> */}
            </div>
            <div className='col-span-2 flex items-center justify-center font-medium'>
              {row.basic}
            </div>
            <div className='col-span-2 flex items-center justify-center font-medium'>{row.pro}</div>
          </div>
        ))}
      </main>
    </div>
  );
}
