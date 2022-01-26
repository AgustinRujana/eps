import Head from 'next/head';
import Navbar from '../../components/general/Navbar';
import Footer from '../../components/general/Footer';

import CallToAction from '../../components/general/CallToAction';

import Main from '../../components/solicitar/Main';

import { content } from '../../content/content';
import { useState } from 'react';

export default function Home() {
  const [isFormOficinaActive, setFormOficinaActive] = useState(false);
  const [isFormActive, setFormActive] = useState(false);
  return (
    <>
      <Head>
        <title>EPS | Solicitar Cita</title>
      </Head>
      {/* <header className='mx-auto'>
        <Navbar
          content={content.menu}
          isFormActive={isFormActive}
          setFormActive={setFormActive}
          isFormOficinaActive={isFormOficinaActive}
          setFormOficinaActive={setFormOficinaActive}
        />
        <CallToAction
          isFormActive={isFormActive}
          setFormActive={setFormActive}
        />
      </header> */}
      <section className='bg-gray-50'>
        <header className='p-4 flex items-center justify-between bg-white shadow h-[20vh]'>
          <div className='grid grid-cols-2 items-center divide-x-2 justify-center'>
            <img className='h-28' src='/logos/logoGrupoEPS.svg' />
            <img className='p-4' src='/logos/sloganEPS.svg' />
          </div>
          <a href='/'>
            <div className='px-6 py-2 rounded-full bg-darkBlue hover:bg-sky-400 text-white hover:text-darkBlue transition-all duration-500 hover:scale-105'>
              <p className='tracking-wider px-2 uppercase text-sm'>
                Volver al Inicio
              </p>
            </div>
          </a>
        </header>
        <main className='overflow-hidden w-full mx-auto md:px-6 h-[80vh]'>
          <Main />
        </main>
      </section>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
