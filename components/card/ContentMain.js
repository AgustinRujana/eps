import ScrollSlideUp from '../general/ScrollSlideUp';
import AccessConveniencePanel from './AccessConveniencePanel';
import CardsPanel from './CardsPanel';
import NumbersPanel from './NumbersPanel';

export default function ContentMain(props) {
  return (
    <section className='relative'>
      <div>
        <img
          className='fixed -z-10 h-1/2 -left-10 -bottom-[10vh] opacity-50'
          src='/images/patron1.svg'
        />
      </div>
      <ScrollSlideUp>
        <NumbersPanel content={props.content.numPanel} />
      </ScrollSlideUp>
      <ScrollSlideUp>
        <AccessConveniencePanel content={props.content.convenience} />
      </ScrollSlideUp>
      <ScrollSlideUp>
        <CardsPanel content={props.content.pricing} />
      </ScrollSlideUp>
      <div className='absolute top-[240vh]' id='contratar'></div>
    </section>
  );
}
