export const addProdutosToCart = (produto) => {
  console.log('entrei no action addProdutosToCart')
  return {
    type: 'ADD_PRODUTO_TO_CART',
    payload: {
      produto
    }
  }
}

export const removeProdutoToCart = (id) => {
  console.log('passei aqui no remover')
  return {
    type: 'REMOVE_PRODUTO_TO_CART',
    payload: {
      id
    }
  }
}

export const incrementAmountProdutoToCart = (id) => {
  return {
    type: 'INCREMENT_AMOUNT_PRODUTO_TO_CART',
    payload: {
      id
    }
  }
}

export const decrementAmountProdutoToCart = (id) => {
  console.log('passando no decrement')
  return {
    type: 'DECREMENT_AMOUNT_PRODUTO_TO_CART',
    payload: {
      id
    }
  }
}

export const esvaziarProdutoToCart = () => {
  console.log('Esvaziando carrinho')
  return {
    type: 'REMOVE_PRODUTOS_FROM_CART',
    payload: {
      
    }
  }
}