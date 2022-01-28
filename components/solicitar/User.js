import { useState, useEffect } from 'react';

export default function User({ show, sendUser }) {
  const [dim, setDim] = useState('');
  const [telephone, setTelephone] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleUser = (e) => {
    e.preventDefault();
    if (!dim || !telephone || !name || !lastName) return;

    const data = { user: { dim, telephone, name, lastName } };

    sessionStorage.setItem('cite', JSON.stringify(data));
    sendUser();
  };

  useEffect(() => {
    show && sessionStorage.removeItem('cite');
  }, []);

  return (
    <section className={show ? '' : 'hidden'}>
      <form onSubmit={handleUser} className='bg-white shadow rounded-lg p-6'>
        <div className='grid lg:grid-cols-2 gap-6'>
          <div className='border focus-within:border-darkBlue focus-within:text-darkBlue transition-all duration-500 relative rounded p-1'>
            <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
              <label htmlFor='name' className='bg-white text-gray-600 px-1'>
                DIM *
              </label>
            </div>
            <p>
              <input
                id='name'
                autoComplete='false'
                tabIndex='0'
                type='text'
                className='py-1 px-1 text-gray-900 outline-none block h-full w-full'
                value={dim}
                onChange={(e) => setDim(e.target.value)}
              />
            </p>
          </div>
          <div className='border focus-within:border-darkBlue focus-within:text-darkBlue transition-all duration-500 relative rounded p-1'>
            <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
              <label
                htmlFor='telephone'
                className='bg-white text-gray-600 px-1'
              >
                Telefono *
              </label>
            </div>
            <p>
              <input
                id='telephone'
                autoComplete='false'
                tabIndex='0'
                type='text'
                className='py-1 px-1 outline-none block h-full w-full'
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </p>
          </div>
          <div className='border focus-within:border-darkBlue focus-within:text-darkBlue transition-all duration-500 relative rounded p-1'>
            <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
              <label htmlFor='name' className='bg-white text-gray-600 px-1'>
                Nombre *
              </label>
            </div>
            <input
              id='name'
              autoComplete='false'
              tabIndex='0'
              type='text'
              className='py-1 px-1 outline-none block h-full w-full'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='border focus-within:border-darkBlue focus-within:text-darkBlue transition-all duration-500 relative rounded p-1'>
            <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
              <label htmlFor='lastName' className='bg-white text-gray-600 px-1'>
                Apellido *
              </label>
            </div>
            <p>
              <input
                id='lastName'
                autoComplete='false'
                tabIndex='0'
                type='text'
                className='py-1 px-1 outline-none block h-full w-full'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </p>
          </div>
        </div>
        {dim && telephone && name && lastName && (
          <div className='border-t mt-6 pt-3 text-right'>
            <button
              type='submit'
              className='py-1 tracking-wider px-4 uppercase text-xs rounded-full bg-darkBlue hover:bg-sky-400 text-white hover:text-darkBlue transition-all duration-500 hover:scale-105'
            >
              Siguiente
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
