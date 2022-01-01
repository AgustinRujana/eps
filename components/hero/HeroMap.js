import MapHonduras from './maps/map';

export default function HeroMap({ content }) {
  return (
    <section className='py-16'>
      <div className='relative flex items-center justify-center w-full'>
        {/* <img className='w-2/3 mr-1' src='/images/hondurasMap.svg' /> */}

        <MapHonduras/>
        <p className='absolute uppercase text-darkBlue font-bold  left-0 top-1/8 bg-slate-100 p-2 rounded-xl text-lg'>Cobertura de Asistencia Médica</p>
        {/* {isShown && <p className='absolute uppercase text-darkBlue font-bold  left-0 top-1/4 bg-slate-100 p-2 rounded-xl text-lg'>{isShown}</p>} */}
        <p className='absolute uppercase text-darkBlue font-bold bg-slate-100 p-2 bottom-1/4 right-0 rounded-xl text-lg'>
          Garantizada en todo el país
        </p>
      </div>
			<div>
			<p className='uppercase text-darkBlue text-4xl p-2 bottom-1/4 right-0 rounded-xl'>
          Aseguradoras
      </p>
			<div className='grid md:grid-cols-3 lg:grid-cols-4 p-2'>
				{content.map(logo => (
					<div className='cols-span-1 mx-auto'>
						<img className='h-16' src={logo.icon}/>
					</div>
				))}
			</div>
			</div>
    </section>
  );
}
