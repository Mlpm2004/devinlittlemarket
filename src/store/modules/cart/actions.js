export const addProdutosToCart = (produto) => {
  console.log('entrei no action addProdutoToCart')
  return {
    type: 'ADD_PRODUTO_TO_CART',
    payload: {
      produto
    }
  }
}

export const removeProduto = () => {
  return {
    type: 'REMOVE_PRODUTO',
    payload: {
      
    }
  }
}