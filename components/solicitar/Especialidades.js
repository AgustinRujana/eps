import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Especialidades({ show, showSpec, showUser }) {
  const [loading, setLoading] = useState(false);

  const [especialidades, setEspecialidades] = useState([]);
  const [choosed, setChoosed] = useState(-1);

  useEffect(() => {
    const cite = JSON.parse(sessionStorage.getItem('cite'));
    if (!cite || !cite.user) {
      showSpec(false);
      return showUser(true);
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
      setEspecialidades(especialidadesHardCoded);
      console.log(especialidades);
    }, 1000);
    //-----------------------------------------//
  }, []);

  const handleSelectSpeciality = (name, url, pos) => {
    if (!name || !url) return;

    let cite = JSON.parse(sessionStorage.getItem('cite'));
    if (!cite || !cite.user) {
      showSpec(false);
      return showUser(true);
    }
    console.log(cite);
    cite.speciality = { name, url };
    sessionStorage.setItem('cite', JSON.stringify(cite));
    if (pos == choosed) {
      setChoosed(-1);
      delete cite.speciality;
      return sessionStorage.setItem('cite', JSON.stringify(cite));
    }
    return setChoosed(pos);
  };

  return (
    <>
      <section className={show ? 'max-w-7xl mx-auto' : 'hidden'}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:w-7/12 mx-3 md:mx-auto'>
          {especialidades.map(
            (especialidad, i) =>
              especialidad.habilitado == true && (
                <div
                  key={i}
                  onClick={() =>
                    handleSelectSpeciality(
                      especialidad.nombre,
                      especialidad.url,
                      i
                    )
                  }
                  className={`col-span-1 justify-center border-2 h-12 rounded-full flex items-center px-4 transition-all duration-500 cursor-pointer  ${
                    i != choosed
                      ? 'border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white'
                      : 'text-gray-400'
                  }`}
                >
                  <p className='uppercase tracking-tighter leading-none text-sm'>
                    {especialidad.nombre}
                  </p>
                </div>
              )
          )}
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

const especialidadesHardCoded = [
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/27/',
    created: '2021-12-13T11:17:06.370778-06:00',
    modified: '2021-12-13T11:17:06.370809-06:00',
    nombre: 'Cardiologia',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/26/',
    created: '2021-04-26T14:06:50.941314-06:00',
    modified: '2021-04-26T14:06:50.941345-06:00',
    nombre: 'Periodoncia',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/25/',
    created: '2020-12-29T16:17:53.699936-06:00',
    modified: '2020-12-29T16:17:53.699962-06:00',
    nombre: 'Medico Especialista en Radiologia',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/24/',
    created: '2020-03-03T21:50:36.063163-06:00',
    modified: '2020-03-03T21:50:36.063190-06:00',
    nombre: 'Endodoncia',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/12/',
    created: '2018-04-03T09:01:13.224395-06:00',
    modified: '2019-12-10T15:41:31.275627-06:00',
    nombre: 'CIRUGIA',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/23/',
    created: '2019-08-21T16:49:28.662355-06:00',
    modified: '2019-08-21T16:49:28.662383-06:00',
    nombre: 'Microbiologia',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/22/',
    created: '2019-06-21T06:34:57.738597-06:00',
    modified: '2019-06-21T06:34:57.738624-06:00',
    nombre: 'Rehabilitacion',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/21/',
    created: '2019-05-07T13:41:33.882022-06:00',
    modified: '2019-05-07T13:41:33.882050-06:00',
    nombre: 'Odontologia General',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/20/',
    created: '2019-05-07T13:32:52.227589-06:00',
    modified: '2019-05-07T13:32:52.227617-06:00',
    nombre: 'PAIDODONCISTA',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/19/',
    created: '2019-05-07T10:58:37.552794-06:00',
    modified: '2019-05-07T10:58:37.552823-06:00',
    nombre: 'Ortodoncista',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/18/',
    created: '2019-05-07T10:23:33.846374-06:00',
    modified: '2019-05-07T10:23:33.846404-06:00',
    nombre: 'PERIODONCISTA',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/17/',
    created: '2019-04-03T08:53:32.965179-06:00',
    modified: '2019-04-03T08:53:32.965218-06:00',
    nombre: 'Psicologia',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/16/',
    created: '2019-04-02T15:52:23.808021-06:00',
    modified: '2019-04-02T15:52:23.808056-06:00',
    nombre: 'REANIMACION Y DOLOR',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/15/',
    created: '2019-02-16T12:44:31.350696-06:00',
    modified: '2019-02-16T12:44:31.350726-06:00',
    nombre: 'MANEJO SINTOMATICO',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/14/',
    created: '2019-01-14T16:49:54.789539-06:00',
    modified: '2019-01-14T16:49:54.789570-06:00',
    nombre: 'Neurología',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/13/',
    created: '2018-09-11T14:44:50.312971-06:00',
    modified: '2018-09-11T14:44:50.312999-06:00',
    nombre: 'Medicina General',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/11/',
    created: '2018-01-22T10:09:47.685403-06:00',
    modified: '2018-01-22T10:09:47.685429-06:00',
    nombre: 'Nutricionista',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/10/',
    created: '2017-10-27T12:37:10.383678-06:00',
    modified: '2017-10-27T12:37:10.383705-06:00',
    nombre: 'Pediatra Endocrinologo',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/9/',
    created: '2017-10-23T15:04:53.896103-06:00',
    modified: '2017-10-23T15:04:53.896130-06:00',
    nombre: 'Urologo',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/8/',
    created: '2017-09-13T14:40:08.276553-06:00',
    modified: '2017-09-29T16:08:15.387435-06:00',
    nombre: 'Odontologia',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/7/',
    created: '2017-09-09T11:34:21.673443-06:00',
    modified: '2017-09-09T11:34:21.673472-06:00',
    nombre: 'Dermatologa',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/6/',
    created: '2017-07-04T14:34:37.763722-06:00',
    modified: '2017-07-04T14:34:37.763747-06:00',
    nombre: 'Psiquiatria',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/5/',
    created: '2017-07-04T12:32:38.743339-06:00',
    modified: '2017-07-04T12:32:38.743367-06:00',
    nombre: 'Otorrinolaringologia',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/4/',
    created: '2017-07-04T12:32:23.373585-06:00',
    modified: '2017-07-04T12:32:23.373611-06:00',
    nombre: 'Ginecologia',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/3/',
    created: '2017-07-04T12:32:13.837378-06:00',
    modified: '2017-07-04T12:32:13.837398-06:00',
    nombre: 'Pediatria',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/2/',
    created: '2017-07-04T12:31:30.179748-06:00',
    modified: '2017-07-04T12:32:00.847542-06:00',
    nombre: 'Ortopedia',
    habilitado: true,
  },
  {
    url: 'https://epsplus.hospinet.app/api/especialidad/1/',
    created: '2017-07-02T13:54:18.562352-06:00',
    modified: '2017-07-02T13:54:18.562381-06:00',
    nombre: 'Medicina Interna',
    habilitado: true,
  },
];
