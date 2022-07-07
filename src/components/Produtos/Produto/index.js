const Produto = ({ item, addToCart }) => {

  return (
    <div className='produto-item'>
      <img className='produto-item-cover' width="150" src={item.image} alt={item.nome} />
      <span className='produto-item-title'>{item.nome}</span>
      <span className='produto-item-price'>{item.preco}</span>
      <button className='produto-button'>Detalhes</button>
      <button className='produto-button' onClick={() => addToCart(item)} >Comprar</button>
    </div>
  )
}

export default Produto