export function useAddToCart(id) {
  if (0 > id > 19) return;
  let cart = JSON.parse(localStorage.getItem('cart'));
  const data = {
    id,
    plan: '',
  };
  if (!cart) {
    return localStorage.setItem('cart', JSON.stringify([data]));
  }
  return localStorage.setItem('cart', JSON.stringify([...cart, data]));
}

export function useRemoveFromCart(id) {}
