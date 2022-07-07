import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Produto from '../../components/Produtos';
import { addProdutosToCart,removeProduto } from '../../store/modules/cart/actions'

const Home = () => {

  const [produtos, setProdutos] = useState([])

  const dispatch = useDispatch();

  useEffect(() => {
    async function handleGetProdutos() {
      axios
      .get('http://localhost:3333/produtos')
      .then((response) => setProdutos(response.data))
      .catch(() => alert('Desculpe, houve um erro ao tentar recuperar os produtos.'))
    }
    
    handleGetProdutos()
  }, [])

  const handleAddToCart = (produto) => {
    dispatch(addProdutosToCart(produto, '55555-5456'))
  }

  return (
    <div className='container'>
      <div className='container-produtos'>
        {produtos.map(produto => (
          <Produto key={produto.id} item={produto} addToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  )
}

export default Home