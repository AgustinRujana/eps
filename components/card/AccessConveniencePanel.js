import { BadgeCheckIcon } from '@heroicons/react/outline';

export default function AccessConveniencePanel(props) {
  return (
    <section className=''>
      <div className='relative w-fit mx-auto'>
        <div className='absolute -z-10 w-full h-full top-2 left-2 bg-teal-400'></div>
        <div className='z-10 bg-darkBlue'>
          <p className='text-4xl p-6 text-teal-400 font-extrabold uppercase'>
            Accesibilidad y conveniencia
          </p>
        </div>
      </div>
      <div className='p-4 sm:m-12 my-8 rounded-xl shadow-2xl bg-slate-50 grid gap-4 grid-cols-1 sm:grid-cols-2'>
        {props.content.map((listItem) => (
          <p className='col-span-1 flex items-center'>
            <BadgeCheckIcon className='h-6 mr-1 text-green-600 flex-shrink-0' />
            {listItem}
          </p>
        ))}
      </div>
      <div className='bg-darkBlue text-center py-4 font-semibold text-lg'>
        <p className='text-white'>
          Afilia a tu plan a tus papás, hijos, pareja, familiares, amigos,
          colaboradores.
        </p>
        <p className='text-teal-400'>No importa su edad o condición médica, todos son bienvenidos.</p>
      </div>
    </section>
  );
}
