import Head from 'next/head';
import Navbar from '../components/general/Navbar';

import HeroSlider from '../components/hero/HeroSlider';
import HeroSlider2 from '../components/hero/HeroSlider2';
import HeroIcons from '../components/hero/HeroIcons';
import HeroCard from '../components/hero/HeroCard';
import HeroCard2 from '../components/hero/HeroCard2';
import HeroMobile from '../components/hero/HeroMobile';
import HeroLogoCloud from '../components/hero/HeroLogoCloud';
import CallToAction from '../components/general/CallToAction';

import { content } from '../content/content';
import { useEffect, useState } from 'react';
import Footer from '../components/general/Footer';
import usePosition from '../hooks/usePosition';

export default function Home() {
  const [isFormOficinaActive, setFormOficinaActive] = useState(false);
  const [isFormActive, setFormActive] = useState(false);

  const [position, setPosition] = useState(0)
  const scrollPosition = usePosition();

  useEffect(() => {
    setPosition(Math.round(scrollPosition));
  }, [scrollPosition]);

  return (
    <>
      <Head>
        <title>EPS | Home</title>
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
      <main className='overflow-hidden w-full relative'>
        {console.log(position)}
        <div>
          <img
            className={`absolute -z-10 w-1/2 -left-10 transition-all duration-500 opacity-30`}
            src='/images/patron1.svg'
            style={{top: `${position}px`}}
          />
        </div>
        <HeroSlider content={content.hero.heroSlider} />
        <HeroIcons content={content.hero.heroIcons} />
        <HeroCard
          isFormActive={isFormActive}
          setFormActive={setFormActive}
          isFormOficinaActive={isFormOficinaActive}
          setFormOficinaActive={setFormOficinaActive}
        />
        <HeroSlider2 content={content.hero.heroSlider} />
        <HeroLogoCloud content={content.hero.heroMap} />
        {/* <HeroMobile content={content.hero.heroMobile} /> */}
        <HeroCard2
          isFormActive={isFormActive}
          setFormActive={setFormActive}
          isFormOficinaActive={isFormOficinaActive}
          setFormOficinaActive={setFormOficinaActive}
        />
      </main>
      <footer className='mx-auto'>
        <Footer />
      </footer>
    </>
  );
}
