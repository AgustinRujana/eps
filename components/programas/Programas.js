import ScrollSlideUp from '../general/ScrollSlideUp';
import Section from './Section';

export default function Programas({ content }) {
  return (
    <section>
      <div className='relative bg-gradient-to-r from-[#00d9b3] to-[#002e54] h-44 flex items-center pl-16 mb-8 overflow-hidden'>
        <span className='font-extrabold text-4xl text-white'>
          Programas de salud
        </span>
        <img
          className='absolute -right-36 -bottom-[10vh] opacity-50'
          src='/images/pattern2.svg'
        />
      </div>
      {content.map((category, i) => (
        <Section section={category} key={i} />
      ))}
    </section>
  );
}
