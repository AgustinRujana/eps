import Cards_two from './Cards_two';

export default function Section_two({ section }) {
  return (
    <section className='grid lg:grid-cols-3 lg:gap-x-6 mb-16' id={`${section.id}`}>
      {section.items.map((article, i) => (
        <Cards_two article={article} key={i} color={section.mainColor}/>
      ))}
    </section>
  );
}
