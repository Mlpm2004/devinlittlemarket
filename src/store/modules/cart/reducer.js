
const INITIAL_STATE = {
  items: []
}


const cart = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUTO_TO_CART': {
      return {
        items: [
          ...state.items,
          action.payload.produto
        ]
      }
    }

    case 'REMOVE_PRODUTO': {
      console.log('remover produto')
      return state;
    }

    default:
      return state;

  }
}

export default cart