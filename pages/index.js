import Head from 'next/head';
import Script from 'next/script';
import Navbar from '../components/general/Navbar';

import HeroSlider from '../components/hero/HeroSlider';

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
        <HeroSlider content={content.heroSlider}/>
      </main>
    </>
  )
}
