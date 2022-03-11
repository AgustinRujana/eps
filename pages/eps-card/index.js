import Head from 'next/head';
import Navbar from '../../components/general/Navbar';
import Footer from '../../components/general/Footer';
import CallToAction from '../../components/general/CallToAction';

import { useState } from 'react';
import { content } from '../../content/content';
import BannerMain from '../../components/card/BannerMain';
import ContentMain from '../../components/card/ContentMain';

export default function Home() {
  const [isFormOficinaActive, setFormOficinaActive] = useState(false);
  const [isFormActive, setFormActive] = useState(false);
  return (
    <>
      <Head>
        <title>EPS | Card</title>
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
      {/* <main className='overflow-hidden max-w-7xl w-full mx-auto min-h-[250vh]'>
        <BannerMain />
        <ContentMain content={content.epsCard}/>
      </main> */}
      <main className='overflow-hidden max-w-7xl w-full mx-auto'>
        <div className='mx-auto text-center my-32'>
          <div className='grid p-6 grid-cols-2 items-center divide-x-2 justify-center w-fit mx-auto'>
            <img className='h-28' src='/logos/logoGrupoEPS.svg' />
            <img className='p-4' src='/logos/sloganEPS.svg' />
          </div>
          <p className='font-bold text-xl text-darkBlue'>
            Actualmente nos encontramos trabajando en esta <br /> sección para
            mejorar tu servicio.
          </p>
          <p>Disculpa las molestias ocasionadas.</p>
          <a className='underlined text-darkBlue' href='/'>
            Volver al inicio
          </a>
        </div>
      </main>
      <footer className='mx-auto'>
        <Footer />
      </footer>
    </>
  );
}
