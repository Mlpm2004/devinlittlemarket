
const INITIAL_STATE = {
  items: []
}

const cart = (state = INITIAL_STATE, action) => {
  console.log(state)
  switch(action.type) {
    case 'ADD_PRODUTO_TO_CART': {

      const { produto } = action.payload

      const produtoExists = state.items.find(item => item.id === produto.id)

      if(!produtoExists) {
        return {
          ...state,
          items: [
            ...state.items,
            {...produto, amount: 1}
          ]
        }
      } else {
        const newItems = state.items.map(item => {
          if(item.id === produtoExists.id) {
            return {
              ...item,
              amount: item.amount + 1
            }
          }
          return item;
        })

        return {
          ...state,
          items: newItems
        }
      }
      
    }

    case 'REMOVE_PRODUTO_TO_CART': {
      const itensFiltered = state.items.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        items: itensFiltered
      }
    }

    case 'INCREMENT_AMOUNT_PRODUTO_TO_CART': {
      const newItems = state.items.map(item => {
        if(item.id === action.payload.id) {
          return {
            ...item,
            amount: item.amount + 1
          }
        }
        return item;
      })

      return {
        ...state,
        items: newItems
      }
    }

    case 'DECREMENT_AMOUNT_PRODUTO_TO_CART': {
      const newItems = state.items.map(item => {
        if(item.id === action.payload.id) {
          return {
            ...item,
            amount: item.amount - 1
          }
        }
        return item;
      })

      return {
        ...state,
        items: newItems
      }
    }
    case 'REMOVE_PRODUTOS_FROM_CART': {
        const itensFiltered=[];
      return {
        
        items: itensFiltered
      }
    }

    default:
      return state;
  }
}

export default cart