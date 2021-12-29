import Head from 'next/head';
import Navbar from '../components/general/Navbar';

import HeroSlider from '../components/hero/HeroSlider';
import HeroIcons from '../components/hero/HeroIcons';
import HeroCard from '../components/hero/HeroCard';
import HeroCard2 from '../components/hero/HeroCard2';
import HeroMobile from '../components/hero/HeroMobile';

import { content } from '../content/content';

export default function Home() {
  return (
    <>
      <Head>
        <title>EPS</title>
      </Head>
      <header className="max-w-7xl mx-auto">
        <Navbar content={content.menu}/>
      </header>
      <main className='overflow-hidden max-w-7xl w-full mx-auto'>
        <HeroSlider content={content.hero.heroSlider}/>
        <HeroIcons content={content.hero.heroIcons}/>
        <HeroCard/>
        <HeroSlider content={content.hero.heroSlider}/>
        <HeroCard2/>
        <HeroMobile/>
      </main>
    </>
  )
}
