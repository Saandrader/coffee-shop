 export function cartReducer(state, action) {
    const payload = action.payload;
  
    switch (action.type) {
      case "add_product": {
        const repeatedProduct = state.find(
          (product) => payload.id === product.id
        );
        if (repeatedProduct) {
          const quantity = repeatedProduct.quantity + payload.quantity;
          const total = repeatedProduct.total + payload.total;
          return cartReducer(state, {
            type: "edit_product",
            payload: { ...payload, quantity, total },
          });
        }
        return [...state, payload];
      }
  
      case "edit_product": {
        console.log(payload);
        const clonedState = [...state];
        const productIndex = clonedState.findIndex(
          (product) => product.id === payload.id
        );
  
        if (productIndex !== -1) {
          clonedState[productIndex] = payload;
          return clonedState;
        }
      }
      case "delete_product":
        return state.filter((product) => product.id != payload.id);
  
      case "erased_cart":
        return [];
    }
  }
