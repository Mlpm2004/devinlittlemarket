import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Menu = () => {

  const navigate = useNavigate();

  const cart = useSelector(state => state.cart);

  return (
    <div className='menu-container'>
      <h1 onClick={() => navigate('/')}>DEVinLittleMarket</h1>
      <span onClick={() => navigate('cart')}>{cart.items.length} Produtos</span>
    </div>
  )
}

export default Menu