export default function Info({ content }) {
  return (
    <section className='mb-20' id='info'>
      <div className='mb-8'>
        <article>
          <div className='flex items-center relative mb-8'>
            <div className='w-full h-0.5 bg-neutral-500 absolute'></div>
            <h2 className='min-w-min text-neutral-600 bg-white z-10 px-6 ml-12 md:ml-36 text-3xl mb-2 font-bold mx-8 uppercase'>
              {content[0].title}
            </h2>
          </div>
          <div className='w-11/12 lg:w-8/12 mx-auto md:mx-0 lg:ml-28 border-8 p-4 border-gray-100'>
            <p
              dangerouslySetInnerHTML={{ __html: content[0].text }}
              className='bg-gray-100 px-6 py-2 text-lg text-gray-600'
            />
          </div>
        </article>
      </div>
      <div className='flex flex-col lg:flex-row mb-8'>
        <article className='mb-8 lg:mb-0'>
          <div className='flex items-center relative mb-8'>
            <div className='w-full h-0.5 bg-neutral-500 absolute'></div>
            <h2 className='min-w-min text-neutral-600 bg-white z-10 px-6 ml-12 md:ml-36 text-3xl mb-2 font-bold mx-8 uppercase'>
              {content[1].title}
            </h2>
          </div>
          <div className='w-11/12 lg:w-full mx-auto md:mx-0 lg:ml-20 border-8 p-4 border-gray-100'>
            <p
              dangerouslySetInnerHTML={{ __html: content[1].text }}
              className='bg-gray-100 px-6 py-2 text-lg text-gray-600'
            />
          </div>
        </article>
        <article className=''>
          <div className='flex items-center relative mb-8'>
            <div className='w-full h-0.5 bg-neutral-500 absolute'></div>
            <h2 className='min-w-min text-neutral-600 bg-white z-10 px-6 ml-12 md:ml-36 text-3xl mb-2 font-bold mx-8 uppercase'>
              {content[2].title}
            </h2>
          </div>
          <div className='w-11/12 lg:w-10/12 mx-auto md:mx-0 lg:ml-32 border-8 p-4 border-gray-100'>
            <p
              dangerouslySetInnerHTML={{ __html: content[2].text }}
              className='bg-gray-100 px-6 py-2 text-lg text-gray-600'
            />
          </div>
        </article>
      </div>
      <div className='w-8/12 h-0.5 bg-neutral-500 absolute'></div>
      <div className='w-full text-center mt-16'>
        <a href='' className='text-white font-semibold text-xl'>
          <span className='bg-green-400 flex w-3/5 lg:max-w-max mx-auto rounded-3xl px-3 lg:px-8 py-1'>
            QUIERO QUE ME CONTACTE UN ASESOR
          </span>
        </a>
      </div>
    </section>
  );
}
