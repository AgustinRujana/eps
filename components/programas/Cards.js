export default function Cards({ article, color }) {
  return (
    <article
      className='text-center mb-4 shadow-md rounded-t-xl overflow-hidden grid'
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <div className='max-h-52 overflow-hidden'>
        <img src={`${article.image}.png`} alt={article.title} />
      </div>
      <div className='bg-gray-50 text-darkBlue mt-3 mb-4'>
        <div className='mb-3'>
          <h4 className='font-bold tracking-tighter leading-snug'>{article.title}</h4>
        </div>

        <div className='px-3 text-darkBlue tracking-tighter leading-snug'>{article.text}</div>
      </div>
      <div className='mb-12'>
        <a
          href={`/programas/informacion#${article.id}`}
          className={`py-1 text-white tracking-wider block mx-8 rounded-full hover:opacity-80 transition-opacity bg-${color}`}
        >
          VER MÁS
        </a>
      </div>
    </article>
  );
}
