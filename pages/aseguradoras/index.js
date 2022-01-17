import Head from 'next/head';
import Navbar from '../../components/general/Navbar';
import Footer from '../../components/general/Footer';
import CallToAction from '../../components/general/CallToAction';

import { useState } from 'react';
import { content } from '../../content/content';

const logos = content.hero.heroMap;

export default function Home() {
  const [isFormOficinaActive, setFormOficinaActive] = useState(false);
  const [isFormActive, setFormActive] = useState(false);
  return (
    <>
      <Head>
        <title>EPS | Aseguradoras</title>
      </Head>
      <header className='mx-auto'>
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
      </header>
      <main className='relative overflow-hidden max-w-7xl w-full mx-auto min-h-[80vh]'>
        <div>
          <img
            className='fixed -z-10 h-1/2 -left-10 -bottom-[10vh] opacity-50'
            src='/images/patron1.svg'
          />
        </div>
        <div className='grid p-6 pt-24 grid-cols-2 items-center divide-x-2 justify-center w-fit mx-auto'>
          <img className='h-28' src='/logos/logoGrupoEPS.svg' />
          <img className='p-4' src='/logos/sloganEPS.svg' />
        </div>
        <div className=' uppercase font-extrabold text-center text-4xl tracking-tighter'>
          <p className=' text-sky-500'>Trabajamos con las</p>
          <p className=' text-darkBlue'>Siguientes Aseguradoras:</p>
        </div>
        <div className='grid md:grid-cols-5 grid-cols-2 gap-6 p-6 py-24 items-center justify-center w-fit mx-auto'>
          {logos.map((item) => (
            <img className='md:h-18 h:16 mx-auto' src={item.icon} />
          ))}
        </div>
      </main>
      <footer className='mx-auto'>
        <Footer />
      </footer>
    </>
  );
}
