import Head from 'next/head';
import Navbar from '../../../components/general/Navbar';
import Footer from '../../../components/general/Footer';

import CallToAction from '../../../components/general/CallToAction';

import { content } from '../../../content/content';
import { programas } from '../../../content/programas';
import { useState } from 'react';

import Individual from '../../../components/programas/Individual';

export default function IndividualProgram() {
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
      <main className='overflow-hidden max-w-7xl w-full mx-auto'>
        <Individual content={programas[0]} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
