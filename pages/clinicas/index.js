import Head from 'next/head';
import Navbar from '../../components/general/Navbar';
import CallToAction from '../../components/general/CallToAction';
import Maps from '../../components/mapas/Maps';
import Footer from '../../components/general/Footer';

import { useState } from 'react';
import { content } from '../../content/content';
import ScrollSlideUp from '../../components/general/ScrollSlideUp';

export default function Home() {
  const [isFormOficinaActive, setFormOficinaActive] = useState(false);
  const [isFormActive, setFormActive] = useState(false);
  return (
    <>
      <Head>
        <title>EPS | Clínicas</title>
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
        />      </header>
      <main className='overflow-hidden max-w-7xl w-full mx-auto'>
        {content.maps.map((item) => (
          <ScrollSlideUp>
            <Maps content={item} />
          </ScrollSlideUp>
        ))}
      </main>
      <footer className='mx-auto'>
        <Footer />
      </footer>
    </>
  );
}
