import Head from 'next/head';
import Navbar from '../../components/general/Navbar';


import { content } from '../../content/content';

export default function Home() {
  return (
    <>
      <Head>
        <title>EPS</title>
      </Head>
      <header className="mx-auto">
        <Navbar content={content.menu}/>
      </header>
      <main className=' overflow-hidden max-w-7xl w-full mx-auto'>
				
			</main>
    </>
  )
}
