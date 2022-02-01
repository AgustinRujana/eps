import { CheckCircleIcon } from '@heroicons/react/outline';

export default function Plans({ content, setFormOficinaActive }) {
  return (
    <section id='plans'>
      <div className='flex items-center relative mb-8'>
        <div className='w-full h-0.5 bg-neutral-500 absolute'></div>
        <h2 className='min-w-min text-neutral-600 bg-white z-10 px-6 ml-12 md:ml-36 text-3xl mb-2 font-semibold mx-8'>
          PLANES DE SALUD PARA SU EMPRESA
        </h2>
      </div>
      <div className='grid lg:grid-cols-2 lg:w-9/12 mx-auto gap-x-8'>
        {content.map((plan, i) => (
          <article
            key={i}
            className='text-darkBlue rounded-lg overflow-hidden bg-gray-100'
          >
            <header className={`${plan.class}`}>
              <h3 className='font-bold text-center text-xl'>{plan.title}</h3>
              <h4 className='font-bold text-center text-xl'>Descuentos</h4>
            </header>
            <main className='py-6 px-1 lg:px-12'>
              <ul>
                {plan.content.map((item, j) => (
                  <li key={j} className='grid grid-cols-12 items-center'>
                    <CheckCircleIcon
                      class={`h-7 w-7 ${plan.iconColor} whitespace-nowrap`}
                    />
                    <div className='col-span-10 flex items-center'>
                      <p className='font-bold flex-1 min-w-max lg:whitespace-nowrap text-sm lg:text-base'>
                        {item.text}
                      </p>
                      <span className='border-t-2 border-dotted h-0 w-full mx-1 lg:mx-2 border-darkBlue table-cell'></span>
                    </div>
                    <p className='font-bold whitespace-nowrap text-sm lg:text-base'>
                      {item.discount}
                    </p>
                  </li>
                ))}
              </ul>
            </main>
          </article>
        ))}
      </div>
      <div className='w-full text-center my-16'>
        <a onClick={() => setFormOficinaActive(true)} className='text-white font-semibold text-xl'>
          <span className='bg-green-400 flex w-3/5 lg:max-w-max mx-auto rounded-3xl px-3 lg:px-8 py-1'>
            QUIERO QUE ME CONTACTE UN ASESOR
          </span>
        </a>
      </div>
    </section>
  );
}
