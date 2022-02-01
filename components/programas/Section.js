import Cards from './Cards';

export default function Section({ section }) {
  return (
    <section>
      <header
        className={`w-11/12 lg:w-8/12 rounded-r-full mb-4 bg-${section.mainColor}`}
      >
        <h2 className='text-white font-bold py-2 px-3'>{section.title}</h2>
      </header>
      <main
        className={`grid ${
          section.items.length >= 4
            ? 'lg:grid-cols-4'
            : `lg:grid-cols-${section.items.length}`
        } gap-x-4 mb-20`}
      >
        {section.items.map((article, i) => (
          <Cards article={article} key={i} color={section.mainColor} />
        ))}
      </main>
    </section>
  );
}
