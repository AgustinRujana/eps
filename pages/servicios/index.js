import Head from 'next/head';
import Navbar from '../../components/general/Navbar';
import Footer from '../../components/general/Footer';
import CallToAction from '../../components/general/CallToAction';

import { content } from '../../content/content';
import { serviciosEmpresas } from './../../content/serviciosEmpresas';
import Hero from '../../components/businessService/Hero';
import Cards from '../../components/businessService/Cards';
import Info from '../../components/businessService/Info';
import Plans from '../../components/businessService/Plans';
import { useEffect, useState } from 'react';
import usePosition from '../../hooks/usePosition';

export default function Home() {
  const [isFormOficinaActive, setFormOficinaActive] = useState(false);
  const [isFormActive, setFormActive] = useState(false);

  const [position, setPosition] = useState(0);
  const scrollPosition = usePosition();

  useEffect(() => {
    setPosition(Math.round(scrollPosition));
  }, [scrollPosition]);
  return (
    <>
      <Head>
        <title>EPS</title>
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
      <main className='overflow-hidden w-full my-10 md:my-2 scroll-smooth'>
        <div>
          <img
            className={`fixed -z-10 w-1/3 -right-10 -bottom-24 transition-all ease-linear duration-[${
              position * 100
            }ms] opacity-20 rotate_img`}
            src='/images/patron1.svg'
            // style={{bottom: `${position * .5}px`}}
          />
        </div>
        <div className='mt-10'>
          <Hero content={serviciosEmpresas.hero} />
          <Cards content={serviciosEmpresas.cards} />
          <Info content={serviciosEmpresas.info} />
          <Plans content={serviciosEmpresas.plans} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
