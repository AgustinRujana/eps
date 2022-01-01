import Head from 'next/head';
import Navbar from '../../components/general/Navbar';

import Programas from '../../components/programas/Programas';

import { content } from '../../content/content';

export default function Home() {
  return (
    <>
      <Head>
        <title>EPS | Programas</title>
      </Head>
      <header className="mx-auto">
        <Navbar content={content.menu}/>
      </header>
      <main className=' overflow-hidden max-w-7xl w-full mx-auto'>
				<Programas content={content.programas}/>
			</main>
    </>
  )
}
