import { useState } from 'react';

import Especialidades from './Especialidades';
import User from './User';
import City from './City';

export default function Main() {
  //Info

  //Paneles
  const [showUser, setShowUser] = useState(true); //False later
  const [showEspecialidades, setShowEspecialidades] = useState(false); //False later
  const [showCities, setShowCities] = useState(false); //False later

  const sendUser = () => {
    //La funcion de verdad
    //--------------//
    setShowUser(false);
    setShowEspecialidades(true);

    //Aca solo simulo

    //usamos sessionStorage para ir guardando la data
    //--------------//
  };

  const sendSpeciality = () => {
    setShowEspecialidades(false);
    setShowCities(true);
  };

  return (
    <section className='py-16'>
      <User show={showUser} sendUser={sendUser} />
      {showEspecialidades && (
        <Especialidades
          showSpec={setShowEspecialidades}
          showUser={setShowUser}
          sendSpeciality={sendSpeciality}
        />
      )}
      {showCities && (
        <City
          show={showCities}
          showCity={setShowCities}
          showSpec={setShowEspecialidades}
        />
      )}
    </section>
  );
}
