const links = [
  { name: 'Servicios', href: '/#servicios' },
  { name: 'Clinicas', href: '/#clinicas' },
  { name: 'Especialidades', href: '/#especialidades' },
  { name: 'Aseguradoras', href: '/#aseguradoras' },
];

const pages = [
  { name: 'Servicios para Empresas', href: '/servicios' },
  { name: 'Programas de Salud', href: '/programas' },
  { name: 'EPS Card', href: '/eps-card' },
];

const social = [
  { icon: '/images/social/facebook.svg', href: '/' },
  { icon: '/images/social/instagram.svg', href: '/' },
  { icon: '/images/social/linkedin.svg', href: '/' },
  { icon: '/images/social/twitter.svg', href: '/' },
  { icon: '/images/social/youtube.svg', href: '/' },
];

export default function Footer() {
  return (
    <div className='bg-darkBlue h-36 mt-4'>
      <div className='grid grid-cols-1 sm:grid-cols-3 mx-auto text-xs max-w-fit'>
        <div className='col-span-1 p-4'>
          {links.map((link) => (
            <a href={link.href}>
              <div className='text-white hover:text-teal-400 hover:text-sm transition-all ease-in-out duration-300'>{link.name}</div>
            </a>
          ))}
        </div>
        <div className='col-span-1 p-4'>
          {pages.map((link) => (
            <a href={link.href}>
              <div className='text-white hover:text-teal-400 hover:text-sm transition-all ease-in-out duration-300'>{link.name}</div>
            </a>
          ))}
        </div>
        <div className='col-span-1 p-4 px-8'>
          <div className='flex justify-center items-center pb-4'>
            <img className='h-12' src='/logos/grupoEPS.svg' />
          </div>
          <div className='flex justify-center items-center'>
            {social.map((link) => (
              <a href={link.href}>
                <div className=' p-1'>
                  <img className='h-4 fill-red-300' src={link.icon} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
