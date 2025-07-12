import { Button } from "antd";
import { useState } from "react";
const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

/** 更改购物车中的商品 */
function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  function handleIncreaseClick(productId: number) {
    const newProducts = products.map(el => {
      if (el.id === productId) {
        return { ...el, count: el.count + 1 }
      } else {
        return el
      }
    })
    setProducts(newProducts)
  }
  return (
    <ul>
      {products.map(product => (
        <li key={product.id} className="flex gap-2">
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <Button danger onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </Button >
        </li>
      ))}
    </ul>
  );
}

export default ShoppingCart
