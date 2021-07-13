export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemIdToRemove) => {
  return cartItems.filter((item) => item.id !== itemIdToRemove);
};

export const increaseQuantity = (cartItems, id) => {
  return cartItems.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

export const decreaseQuantity = (cartItems, id) => {
  const item = cartItems.find((item) => item.id === id);
  if (item.quantity > 0) {
    return cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : { ...item, quantity: 0 }
    );
  } else return [...cartItems];
};
