const cart = [];
const handlecart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM": 
      const productExists1 = state.find((item) => item.id == product.id);
      if (productExists1) {
        return [
          ...state,
          {...productExists1, quantity: productExists1.quantity + 1 },
        ];
      } else {
        return [...state, {...productExists1, quantity: 1 }];
      }
      break;
    
    case "REMOVEITEM": 
    const productExists = state.find((item) => item.id == product.id);
        if(productExists) {
            if(productExists.quantity===1){
               return state.filter((item) => item.id!==productExists.id);
            } else {
                return [...state,{...productExists,quantity:productExists.quantity-1}]
                
            }
        }
        else 
        return state
       break;
       default: return state
  }
}

export default handlecart;