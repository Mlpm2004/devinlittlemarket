import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaMinusCircle, FaPlusCircle, FaTrashAlt,FaMoneyBillWave } from 'react-icons/fa'
import { decrementAmountProdutoToCart, incrementAmountProdutoToCart, removeProdutoToCart,esvaziarProdutoToCart } from '../../store/modules/cart/actions';
import Swal from 'sweetalert2';


const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.items.reduce((acc, currentValue) => {
    return acc + (currentValue.preco * currentValue.amount)
  }, 0)

  const handleDispatchAction = (item) => {
    const amount = item.amount - 1;
    if(!amount) {
      dispatch(removeProdutoToCart(item.id))
    } else {
      dispatch(decrementAmountProdutoToCart(item.id))
    }
  }

  return (
    <div className='container'>
      <table className='table-cart'>
        <thead>
          <tr>
            <th>#</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>SubTotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map(item => (
            <tr key={item.id}>
              <td>
                <img className='table-image' src={item.image} alt={item.nome} />
              </td>
              <td>{item.nome}</td>
              <td>
                <FaMinusCircle 
                  size={18}
                  color="#060a84"
                  className='margin-button'
                  onClick={() => handleDispatchAction(item)}
                />
                {item.amount}
                <FaPlusCircle 
                  size={18}
                  color="#060a84"
                  className='margin-button'
                  onClick={() => dispatch(incrementAmountProdutoToCart(item.id))}
                />
              </td>
              <td>{(item.preco * item.amount).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",")}</td>
              <td>
                <FaTrashAlt size={22} color='#060a84' onClick={() => {
                  Swal.fire({
                    title: 'Deseja realmente remover esse item ?',
                    showCancelButton: true,
                    confirmButtonText: 'Sim, desejo !',
                    cancelButtonText: `Cancelar`,
                  }).then((result) => {
                    if (result.value) 
                      {
                      console.log('Removeu do carrinho')
                      dispatch(removeProdutoToCart(item.id))
                      }
                    
                  })
                  
                }}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="conclui-compra">
        <div >
          <h1>Total: {total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",")}</h1>
        </div>
        <div>
          <FaMoneyBillWave size={50} color='#060a84' title='COMPRAR' onClick={() => {
            Swal.fire({
              title: 'Deseja Encerrar a Compra ?',
              showCancelButton: true,
              confirmButtonText: 'Sim, desejo !',
              cancelButtonText: `Cancelar`,
            }).then((result) => {
              console.log('Encerrou Compra '+result.value)
              if (result.value) {
                dispatch(esvaziarProdutoToCart())
                navigate('../sucesso')
              }
            })
          }}/>
        </div>
      </div>

    </div>
  )
}

export default Cart