import Head from 'next/head';
import Navbar from '../../components/general/Navbar';

import Programas from '../../components/programas/Programas';
import CallToAction from '../../components/general/CallToAction';

import { content } from '../../content/content';
import { useState } from 'react';
import Footer from '../../components/general/Footer';

export default function Home() {
  const [isFormOficinaActive, setFormOficinaActive] = useState(false);
  const [isFormActive, setFormActive] = useState(false);
  return (
    <>
      <Head>
        <title>EPS | Programas</title>
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
      <main className='overflow-hidden max-w-7xl w-full mx-auto min-h-[200vh]'>
        <Programas content={content.programas} />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
