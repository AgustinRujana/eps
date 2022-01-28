import axios from 'axios';
import { useState, useEffect } from 'react';

export default function City({ show, showCity, showSpec }) {
  const [loading, setLoading] = useState(false);

  const [cities, setCities] = useState([]);
  const [choosed, setChoosed] = useState(-1);

  useEffect(() => {
    const cite = JSON.parse(sessionStorage.getItem('cite'));
    if (!cite || !cite.user) {
      showCity(false);
      return showSpec(true);
    }
    // if (!loading) {
    //   setLoading(true);
    //   axios({
    //     method: 'get',
    //     url: `https://epsplus.hospinet.app/api/especialidad/`,
    //     data: '',
    //   })
    //     .then((res) => {
    //       setLoading(false);
    //       setEspecialidades(res.data);
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //       setLoading(false);
    //       alert(err);
    //     });
    // }

    //---------SIMULANDO LLAMADO API-----------//
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCities(citiesHardCoded);
    }, 1000);
    //-----------------------------------------//
  }, []);

  const handleSelectCity = (name, pos) => {
    if (!name) return;

    let cite = JSON.parse(sessionStorage.getItem('cite'));
    if (!cite || !cite.user || !cite.speciality) {
      showCity(false);
      return showSpec(true);
    }
    if (pos == choosed) {
      setChoosed(-1);
      return;
    }
    cite.city = { name };
    sessionStorage.setItem('cite', JSON.stringify(cite));

    return setChoosed(pos);
  };

  return (
    <>
      <section className={show ? 'max-w-7xl mx-auto' : 'hidden'}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:w-7/12 mx-3 md:mx-auto'>
          {cities.map((city, i) => (
            <div
              key={i}
              onClick={() => handleSelectCity(city.name, i)}
              className={`col-span-1 justify-center border-2 h-12 rounded-full flex items-center px-4 transition-all duration-500 cursor-pointer  ${
                i != choosed
                  ? 'border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white'
                  : 'text-gray-400'
              }`}
            >
              <p className='uppercase tracking-tighter leading-none text-sm'>
                {city.name}
              </p>
            </div>
          ))}
        </div>
        {choosed > -1 && (
          <div className='border-t mt-6 pt-3 text-right w-4/6 mx-auto'>
            <button
              type='submit'
              className='py-1 tracking-wider px-4 uppercase text-xs rounded-full bg-darkBlue hover:bg-sky-400 text-white hover:text-darkBlue transition-all duration-500 hover:scale-105'
            >
              Siguiente
            </button>
          </div>
        )}
      </section>
    </>
  );
}

const citiesHardCoded = [
  { name: 'CIUDAD 1' },
  { name: 'CIUDAD 2' },
  { name: 'CIUDAD 3' },
  { name: 'CIUDAD 4' },
  { name: 'CIUDAD 5' },
  { name: 'CIUDAD 6' },
];
