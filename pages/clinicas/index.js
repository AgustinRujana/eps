import Head from 'next/head';
import Navbar from '../../components/general/Navbar';
import CallToAction from '../../components/general/CallToAction';
import Maps from '../../components/mapas/Maps';
import Footer from '../../components/general/Footer';

import { useState } from 'react';
import { content } from '../../content/content';
import ScrollSlideUp from '../../components/general/ScrollSlideUp';
import MapsSlider from '../../components/mapas/MapsSlider';
import { CheckCircleIcon, LocationMarkerIcon } from '@heroicons/react/outline';

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
        />{' '}
      </header>
      <main className='overflow-hidden'>
        {/* Mapa y texto principal */}
        <ScrollSlideUp>
          {/* <div className=''>
          
          </div> */}
        </ScrollSlideUp>
        {/* Nuestras Clinicas */}
        <ScrollSlideUp>
          <div className='sm:mt-8 mt-24'>
            <p className='bg-darkBlue font-bold tracking-tighter uppercase md:text-4xl text-2xl text-white text-right w-fit ml-auto rounded-l-full py-4 pl-8 pr-1/8'>
              Nuestras Clínicas
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto sm:gap-6 sm:my-24 my-6'>
              {content.maps.clinics.map((clinic) => (
                <div className='col-span-1 shadow-2xl h-fit'>
                  <div className='md:h-56'>
                    <MapsSlider content={clinic} />
                  </div>
                  <div className='px-6'>
                    <img className='h-16 mx-auto my-6' src={clinic.logo} />
                    {clinic.content.map((ubication) => (
                      <div className='flex items-center my-2'>
                        <LocationMarkerIcon
                          className={`text-${clinic.color} h-8 flex-shrink-0`}
                        />
                        <p className='tracking-tighter leading-tight text-darkBlue font-semibold'>
                          {ubication}
                        </p>
                      </div>
                    ))}
                    <ul className='my-6'>
                      {clinic.list.map((item) => (
                        <li className='flex flex-shrink-0 items-center py-1'>
                          <CheckCircleIcon
                            className={`text-${clinic.color} h-4 flex-shrink-0 mr-1`}
                          />
                          <p className='leading-none tracking-tighter text-darkBlue'>
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`bg-${clinic.color} w-fit mx-auto my-6 px-4 py-1 rounded-full cursor-pointer hover:scale-110 transition-all duration-500`}
                  >
                    <span className='uppercase tracking-tighter text-white font-bold'>
                      Agendar Cita
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollSlideUp>
        {/* Otros Servicios */}
        <ScrollSlideUp>
          <div className=''>
          <p className='font-semibold tracking-tighter md:text-xl text-base text-darkBlue uppercase w-fit mr-auto rounded-r-full pl-1/8 pr-8'>
              !Aún hay más!
            </p>
            <p className='font-bold tracking-tighter md:text-3xl text-xl text-teal-400 w-fit mr-auto rounded-r-full pl-1/8 mb-4'>
              Descubre todos los <br/> servicios que tenemos para tí
            </p>
            <p className='bg-darkBlue font-bold tracking-tighter uppercase md:text-4xl text-2xl  text-white text-right w-fit mr-auto rounded-r-full py-4 pl-1/8 pr-1/8'>
              Otros Servicios
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto sm:gap-6 sm:my-24 my-6'>
              {content.maps.other.map((service) => (
                <div className='col-span-1 shadow-2xl h-fit'>
                  <div className='md:h-56'>
                    {' '}
                    <MapsSlider content={service} />
                  </div>
                  <div className='px-6'>
                    <img className='h-16 mx-auto my-6' src={service.logo} />
                    {service.content.map((ubication) => (
                      <div className='flex items-center my-2'>
                        <LocationMarkerIcon
                          className={`text-${service.color} h-8 flex-shrink-0`}
                        />
                        <p className='tracking-tighter leading-tight text-darkBlue font-semibold'>
                          {ubication}
                        </p>
                      </div>
                    ))}
                    <ul className='my-6'>
                      {service.list.map((item) => (
                        <li className='flex flex-shrink-0 items-center py-1'>
                          <CheckCircleIcon
                            className={`text-${service.color} h-4 flex-shrink-0 mr-1`}
                          />
                          <p className='leading-none tracking-tighter text-darkBlue'>
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`bg-${service.color} w-fit mx-auto my-6 px-4 py-1 rounded-full cursor-pointer hover:scale-110 transition-all duration-500`}
                  >
                    <span className='uppercase tracking-tighter text-white font-bold'>
                      Agendar Cita
                    </span>
                  </div>
                </div>
              ))}
              <div className='col-span-1 shadow-2xl h-fit'>
                <div className='h-56'>
                  imagen ambulancia
                  {/* <MapsSlider content={service} /> */}
                </div>
                <div className='px-6'>
                  <img className='h-16 mx-auto my-6' src={''} />
                  <p className=' font-bold text-xl text-center text-darkBlue leading-tight tracking-tighter my-6'>
                    Urgencias 24hs y <br /> servicio de ambulancia.
                  </p>
                  <ul className='my-6'>
                    <li className='flex flex-shrink-0 items-center py-1 justify-center'>
                      <CheckCircleIcon
                        className={`text-rose-600 h-4 flex-shrink-0 mr-1`}
                      />
                      <p className='leading-none tracking-tighter text-darkBlue'>
                        Urgencias 24hs, todos los dias del año.
                      </p>
                    </li>
                  </ul>
                </div>
                <div
                  className={`bg-rose-600 w-fit mx-auto my-6 px-4 py-1 rounded-full cursor-pointer hover:scale-110 transition-all duration-500`}
                >
                  <span className='uppercase tracking-tighter text-white font-bold'>
                    +504 2263 1111
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollSlideUp>
      </main>
      <footer className='mx-auto'>
        <Footer />
      </footer>
    </>
  );
}
