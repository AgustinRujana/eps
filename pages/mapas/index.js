import Head from 'next/head';
import Navbar from '../../components/general/Navbar';
import CallToAction from '../../components/hero/CallToAction';
import Maps from '../../components/mapas/Maps';


import { content } from '../../content/content';

export default function Home() {
  return (
    <>
      <Head>
        <title>EPS</title>
      </Head>
      <header className="mx-auto">
        <Navbar content={content.menu}/>
        <CallToAction/>
      </header>
      <main className=' overflow-hidden max-w-7xl w-full mx-auto'>
				{content.maps.map(item => (
          <Maps content={item}/>
        ))}
			</main>
    </>
  )
}
