export default function EspecialidadesMain(props) {
  return (
    <>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-16 md:mx-4'>
        <img
          className='fixed -z-10 h-1/2 -left-10 -bottom-[10vh] opacity-50'
          src='/images/patron1.svg'
        />
        {props.content.map((especialidad) => (
          <div className='col-span-1 cursor-pointer grid items-center py-4 bg-slate-50 rounded-lg shadow-xl hover:shadow-2xl hover:bg-slate-100 transition-all ease-in-out duration-1000'>
            <div className='col-span-1 text-center'>
              <img className='h-16 mx-auto' src={especialidad.image} />
              <p className={`${especialidad.color} font-extrabold`}>
                {especialidad.title}
              </p>
            </div>
            <div className='col-span-1 mb-auto px-4'>
              {especialidad.text.map((parrafo) => (
                <p className='text-sm leading-tighter tracking-tighter'>
                  {parrafo}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
      <div className='text-center mx-auto px-12 py-2 w-fit bg-green-600 hover:bg-green-500 rounded shadow hover:shadow-xl hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer mb-12'>
        <p className='font-bold text-white'>AGENDAR UNA CITA</p>
      </div>
    </>
  );
}
