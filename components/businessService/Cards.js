export default function Cards({ content }) {
  return (
    <section className='mt-12 mb-24'>
      <div className='flex items-center relative mb-8'>
        <div className='w-full h-0.5 bg-neutral-500 absolute'></div>
        <h2 className='min-w-min text-neutral-600 bg-white z-10 md:px-10 ml-12 md:ml-36 text-3xl mb-2 font-semibold mx-8 uppercase'>
          {content.title}
        </h2>
      </div>
      <div className='grid lg:grid-cols-4 mx-auto w-10/12 gap-y-12 lg:gap-y-0 gap-x-12 mb-12'>
        {content.content.map((card, i) => (
          <article
            className={`${card.class}  py-8 px-4 rounded-3xl relative w-full min-h-full grid`}
            style={{
              gridTemplateRows: 'auto 1fr auto',
              boxShadow: '-4px -4px 0px 4px',
            }}
            key={i}
          >
            <div className='mb-6 text-center '>
              <h3 className='font-semibold text-3xl'>{card.title}</h3>
            </div>
            <div className='mb-8'>
              <p
                dangerouslySetInnerHTML={{ __html: card.text }}
                className='text-xl'
              />
            </div>
            <div className='w-full text-center'>
              <a
                href={card.href}
                className='bg-sky-500 text-white rounded-3xl py-1 px-3'
              >
                MÁS INFORMACIÓN
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className='w-8/12 h-0.5 bg-neutral-500 absolute'></div>
    </section>
  );
}
