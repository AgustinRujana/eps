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
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
