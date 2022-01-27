import { useState } from 'react';

export default function User({ show, sendUser }) {
  const [dim, setDim] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = (e) => {
    e.preventDefault();
    if (!dim || !lastname || !username || !password) return;

    const data = { user: { dim, lastname, username, password } };

    sessionStorage.setItem('cite', JSON.stringify(data));
    sendUser();
  };

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
              <label htmlFor='lastname' className='bg-white text-gray-600 px-1'>
                Last name *
              </label>
            </div>
            <p>
              <input
                id='lastname'
                autoComplete='false'
                tabIndex='0'
                type='text'
                className='py-1 px-1 outline-none block h-full w-full'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </p>
          </div>
          <div className='border focus-within:border-darkBlue focus-within:text-darkBlue transition-all duration-500 relative rounded p-1'>
            <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
              <label htmlFor='username' className='bg-white text-gray-600 px-1'>
                Username *
              </label>
            </div>
            <input
              id='username'
              autoComplete='false'
              tabIndex='0'
              type='text'
              className='py-1 px-1 outline-none block h-full w-full'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='border focus-within:border-darkBlue focus-within:text-darkBlue transition-all duration-500 relative rounded p-1'>
            <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
              <label htmlFor='password' className='bg-white text-gray-600 px-1'>
                Password *
              </label>
            </div>
            <p>
              <input
                id='password'
                autoComplete='false'
                tabIndex='0'
                type='password'
                className='py-1 px-1 outline-none block h-full w-full'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
          </div>
        </div>
        {dim && lastname && username && password && (
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
