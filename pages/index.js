import Head from 'next/head';
import Navbar from '../components/general/Navbar';

import HeroSlider from '../components/hero/HeroSlider';
import HeroSlider2 from '../components/hero/HeroSlider2';
import HeroIcons from '../components/hero/HeroIcons';
import HeroCard from '../components/hero/HeroCard';
import HeroCard2 from '../components/hero/HeroCard2';
import HeroMobile from '../components/hero/HeroMobile';
import HeroLogoCloud from '../components/hero/HeroLogoCloud';
import CallToAction from '../components/hero/CallToAction';

import { content } from '../content/content';
import { useState } from 'react';
import ScrollSlideUp from '../components/general/ScrollSlideUp';
import Footer from '../components/general/Footer';

export default function Home() {
  const [isFormOficinaActive, setFormOficinaActive] = useState(false);
  const [isFormActive, setFormActive] = useState(false);

  return (
    <>
      <Head>
        <title>EPS</title>
      </Head>
      <header className='mx-auto'>
        <Navbar
          content={content.menu}
          isFormOficinaActive={isFormOficinaActive}
          setFormOficinaActive={setFormOficinaActive}
        />
        <CallToAction
          isFormActive={isFormActive}
          setFormActive={setFormActive}
        />
      </header>
      <main className='overflow-hidden w-full sm:min-h-[4724px] relative'>
        <HeroSlider content={content.hero.heroSlider} />
          <div id='servicios' className='absolute top-[90vh]'></div>
        <ScrollSlideUp>
          <HeroIcons content={content.hero.heroIcons} />
        </ScrollSlideUp>
          <div id='card' className='absolute'></div>
          <div id='especialidades' className='absolute top-[230vh]'></div>
        <ScrollSlideUp>
          <HeroCard
            isFormActive={isFormActive}
            setFormActive={setFormActive}
            isFormOficinaActive={isFormOficinaActive}
            setFormOficinaActive={setFormOficinaActive}
          />
        </ScrollSlideUp>
          <div id='clinicas' className='absolute top-[310vh]'></div>
        <ScrollSlideUp>
          <HeroSlider2 content={content.hero.heroSlider} />
        </ScrollSlideUp>
          <div id='aseguradoras' className='absolute top-[370vh]'></div>
        <ScrollSlideUp>
          <HeroLogoCloud content={content.hero.heroMap} />
        </ScrollSlideUp>
        <ScrollSlideUp>
          <HeroMobile content={content.hero.heroMobile} />
        </ScrollSlideUp>
        <ScrollSlideUp>
          <HeroCard2
            isFormActive={isFormActive}
            setFormActive={setFormActive}
            isFormOficinaActive={isFormOficinaActive}
            setFormOficinaActive={setFormOficinaActive}
          />
        </ScrollSlideUp>
      </main>
      <footer className='mx-auto'>
        <Footer />
      </footer>
    </>
  );
}
