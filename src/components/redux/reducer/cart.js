const cart = [];
const handlecart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const productExists1 = state.find((item) => item.id == product.id);
      console.log(state);
      if (productExists1) {
        return [
          ...state.filter((item) => item.id !== productExists1.id),
          { ...productExists1, quantity: productExists1.quantity + 1 },
        ];
      } else {
        return [...state, { ...product, quantity: 1 }];
      }

    case "REMOVEITEM":
      const productExists = state.find((item) => item.id == product.id);
      if (productExists) {
        if (productExists.quantity === 1) {
          return state.filter((item) => item.id !== productExists.id);
        } else {
          return [
            ...state.filter((item) => item.id !== productExists.id),
            { ...productExists, quantity: productExists.quantity - 1 },
          ];
        }
      } else return state;

    case "CLEARCART":
      return [];

    default:
      return state;
  }
};

export default handlecart;
