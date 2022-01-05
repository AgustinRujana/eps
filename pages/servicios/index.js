import Head from 'next/head';
import Navbar from '../../components/general/Navbar';
import CallToAction from '../../components/general/CallToAction';

import { content } from '../../content/content';

export default function Home() {
  return (
    <>
      <Head>
        <title>EPS</title>
      </Head>
      <header className='mx-auto'>
        <Navbar content={content.menu} />
        <CallToAction />
      </header>
      <main className='overflow-hidden max-w-7xl w-full mx-auto'>
        <div className='mx-auto text-center mt-36'>
          <div className='mx-auto mb-8 bg-darkBlue rounded-full h-48 w-48 flex items-center justify-center'>
            <img className='h-full pb-4' src='/logos/grupoEPS.svg' />
          </div>
          <p className='font-extrabold text-xl text-darkBlue'>
            Actualmente nos encontramos trabajando en esta <br/> sección para mejorar
            tu servicio.
          </p>
          <p>Disculpa las molestias ocasionadas.</p>
        </div>
      </main>
    </>
  );
}
