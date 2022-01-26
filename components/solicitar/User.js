export default function User(props) {
  return (
    <section className={props.show ? '' : 'hidden'}>
      <form
        onSubmit={props.sendUser}
        className='bg-white shadow rounded-lg p-6'
      >
        <div className='grid lg:grid-cols-2 gap-6'>
          <div className='border focus-within:border-darkBlue focus-within:text-darkBlue transition-all duration-500 relative rounded p-1'>
            <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
              <p>
                <label htmlFor='name' className='bg-white text-gray-600 px-1'>
                  DIM *
                </label>
              </p>
            </div>
            <p>
              <input
                id='name'
                autoComplete='false'
                tabIndex='0'
                type='text'
                className='py-1 px-1 text-gray-900 outline-none block h-full w-full'
              />
            </p>
          </div>
          <div className='border focus-within:border-darkBlue focus-within:text-darkBlue transition-all duration-500 relative rounded p-1'>
            <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
              <p>
                <label
                  htmlFor='lastname'
                  className='bg-white text-gray-600 px-1'
                >
                  Last name *
                </label>
              </p>
            </div>
            <p>
              <input
                id='lastname'
                autoComplete='false'
                tabIndex='0'
                type='text'
                className='py-1 px-1 outline-none block h-full w-full'
              />
            </p>
          </div>
          <div className='border focus-within:border-darkBlue focus-within:text-darkBlue transition-all duration-500 relative rounded p-1'>
            <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
              <p>
                <label
                  htmlFor='username'
                  className='bg-white text-gray-600 px-1'
                >
                  Username *
                </label>
              </p>
            </div>
            <p>
              <input
                id='username'
                autoComplete='false'
                tabIndex='0'
                type='text'
                className='py-1 px-1 outline-none block h-full w-full'
              />
            </p>
          </div>
          <div className='border focus-within:border-darkBlue focus-within:text-darkBlue transition-all duration-500 relative rounded p-1'>
            <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
              <p>
                <label
                  htmlFor='password'
                  className='bg-white text-gray-600 px-1'
                >
                  Password *
                </label>
              </p>
            </div>
            <p>
              <input
                id='password'
                autoComplete='false'
                tabIndex='0'
                type='password'
                className='py-1 px-1 outline-none block h-full w-full'
              />
            </p>
          </div>
        </div>
        <div className='border-t mt-6 pt-3 text-right'>
          <button
            type='submit'
            className='py-1 tracking-wider px-4 uppercase text-xs rounded-full bg-darkBlue hover:bg-sky-400 text-white hover:text-darkBlue transition-all duration-500 hover:scale-105'
          >
            Siguiente
          </button>
        </div>
      </form>
    </section>
  );
}
