import { useSelector } from 'react-redux'

const Cart = () => {
  
  const cart = useSelector(state => state.cart);

  return (
    <>
      <div>Carrinho</div>
      {cart.items.map(produto => produto.nome)}
    </>
  )
}

export default Cart