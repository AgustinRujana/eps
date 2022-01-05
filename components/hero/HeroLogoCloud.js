export default function HeroLogoCloud({ content }) {
  return (
    <section className='mx-auto max-w-7xl py-16'>
      <p className='text-center uppercase text-darkBlue md:text-4xl text-2xl p-2'>
        Aseguradoras
      </p>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 p-2'>
        {content.map((logo) => (
          <div className='cols-span-1 mx-auto'>
            <img className='h-16' src={logo.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}
