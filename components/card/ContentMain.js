import AccessConveniencePanel from './AccessConveniencePanel';
import CardsPanel from './CardsPanel';
import NumbersPanel from './NumbersPanel';

export default function ContentMain(props) {
  return (
    <>
      <div>
        <img
          className='fixed -z-10 h-1/2 -left-10 -bottom-[10vh] opacity-50'
          src='/images/patron1.svg'
        />
      </div>
      <NumbersPanel content={props.content.numPanel}/>
      <AccessConveniencePanel />
      <CardsPanel />
    </>
  );
}
