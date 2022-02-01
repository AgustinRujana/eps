import { useAddToCart } from '../../hooks/useCart';
import Table from './Table';

export default function Cards_two({ article, color }) {
  const handleAddToCart = () => {
    useAddToCart(article.id)
  };

  return (
    <article className='rounded-t-md overflow-hidden mb-8 bg-gray-200 shadow-md h-fit rounded-md'>
      <header
        className={`text-white text-center uppercase font-semibold tracking-tight bg-${color}`}
      >
        <h3 className='py-1 text-lg'>{article.title}</h3>
      </header>
      <div>
        <img
          className=' max-h-48 w-full object-cover'
          src={`${article.image}.png`}
          alt={article.title}
        />
      </div>
      <div>
        <Table item={article.table} color={color} />
      </div>
      <footer className='text-center my-4'>
        <button
          className={`bg-${color} text-white hover:opacity-80 transition-opacity font-semibold tracking-tight px-4 py-2 rounded-full`}
          onClick={handleAddToCart}
        >
          CONTRATAR
        </button>
      </footer>
    </article>
  );
}
