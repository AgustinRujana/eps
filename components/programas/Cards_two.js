import Table from './Table';

export default function Cards_two({ article, color }) {
  return (
    <article className='rounded-t-md overflow-hidden mb-8 bg-gray-200 shadow-md'>
      <header
        className='text-white text-center uppercase font-bold'
        style={{ backgroundColor: color }}
      >
        <h3 className='py-1 text-lg'>{article.title}</h3>
      </header>
      <div>
        <img src={`${article.image}.png`} alt={article.title} />
      </div>
      <div>
        <Table item={article.table} />
      </div>
      <footer className='text-center mt-8 mb-3'>
        <button className='bg-green-500 text-white font-bold px-4 py-2 rounded-full'>
          CONTRATAR
        </button>
      </footer>
    </article>
  );
}
