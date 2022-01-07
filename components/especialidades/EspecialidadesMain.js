export default function EspecialidadesMain(props) {
  return (
    <>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-16 md:mx-4'>
        <img
          className='fixed -z-10 h-1/2 -left-10 -bottom-[10vh] opacity-50'
          src='/images/patron1.svg'
        />
        {props.content.map((especialidad) => (
          <div className='col-span-1 cursor-pointer grid grid-cols-4 items-center gap-2 py-4 bg-slate-50 rounded-lg shadow-xl hover:shadow-2xl hover:bg-slate-100 transition-all ease-in-out duration-1000'>
            <img
              className='h-16 mx-auto col-span-1 p-1'
              src={especialidad.image}
            />
            <div className='col-span-3'>
              <p className=' text-slate-700 font-extrabold'>
                {especialidad.title}
              </p>
              {especialidad.text.map((parrafo) => (
                <p className='text-sm xl:text-base leading-tight tracking-tight'>
                  {parrafo}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
      <div className="text-center mx-auto p-4 w-fit bg-green-600 rounded-xl mb-12">
        <p className="font-bold text-white">AGENDAR UNA CITA</p>
      </div>
    </>
  );
}
