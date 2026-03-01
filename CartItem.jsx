<button onClick={() => {
  if (item.quantity > 1) {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  } else {
    dispatch(removeItem(item.id));
  }
}}>
-
</button>