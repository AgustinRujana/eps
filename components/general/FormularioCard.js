import { useState } from 'react';
import axios from 'axios';

import { UserCircleIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function FormularioCard({ isFormActive, setFormActive }) {
  const [fullName, setfullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [uploading, setUploading] = useState(false);
  const [upload, setUpload] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUploading(true);

    const data = {
      fullName,
      phone,
      email,
    };

    await axios
      .post(`/`, data)
      .then((res) => {
        setUpload(true);
      })
      .catch((err) => {
        setUploading(false);
      });
  };

  return (
    <div className='relative'>
      <div
        className={
          isFormActive ? 'fixed z-40 top-0 h-screen w-screen' : 'hidden'
        }
        onClick={() => setFormActive(false)}
      ></div>
      <div
        className={
          isFormActive
            ? 'text-darkBlue bg-darkBlue rounded-xl opacity-100 transition-all ease-in-out duration-1000 fixed bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-50'
            : 'text-darkBlue bg-darkBlue rounded-xl opacity-0 transition-all ease-in-out duration-1000 fixed -bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'
        }
        onClick={() => setFormActive(true)}
      >
        {upload ? (
          <div className='bg-darkBlue p-4 text-center rounded-xl text-white'>
            <img className='h-36 mx-auto' src='/images/icons/atencion.svg' />
            <p className='font-bold text-xl uppercase py-2'>
              ¡Gracias por tu solicitud!
            </p>
            <p>
              Un asesor <br /> te llamará pronto.
            </p>
          </div>
        ) : (
          <form
            className='p-4 grid gap-2 items-center justify-center'
            onSubmit={handleSubmit}
          >
            <div className='relative'>
              <UserCircleIcon className='absolute h-6 top-1/2 -translate-y-1/2 left-2' />
              <input
                id='fullName'
                name='fullName'
                type='text'
                className='rounded-full pl-10 py-1'
                placeholder='Nombre y Apellido'
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
                required
              />
            </div>
            <div className='relative'>
              <PhoneIcon className='absolute h-6 top-1/2 -translate-y-1/2 left-2' />
              <input
                id='phone'
                name='phone'
                type='text'
                className='rounded-full pl-10 py-1'
                placeholder='Teléfono'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className='relative'>
              <MailIcon className='absolute h-6 top-1/2 -translate-y-1/2 left-2' />
              <input
                id='email'
                name='email'
                type='text'
                className='rounded-full pl-10 py-1'
                placeholder='Correo Electrónico'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='my-2'>
              {uploading ? (
                <svg
                  width='135'
                  height='135'
                  viewBox='0 0 135 135'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#ffff'
                  className='h-6 w-6 mx-auto'
                >
                  <path d='M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z'>
                    <animateTransform
                      attributeName='transform'
                      type='rotate'
                      from='0 67 67'
                      to='-360 67 67'
                      dur='2.5s'
                      repeatCount='indefinite'
                    />
                  </path>
                  <path d='M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z'>
                    <animateTransform
                      attributeName='transform'
                      type='rotate'
                      from='0 67 67'
                      to='360 67 67'
                      dur='8s'
                      repeatCount='indefinite'
                    />
                  </path>
                </svg>
              ) : (
                <button
                  type='submit'
                  className='rounded-full text-center text-sm block bg-slate-100 font-medium py-3 w-3/4 mx-auto focus:outline-none '
                >
                  Quiero mi EPS Card
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
