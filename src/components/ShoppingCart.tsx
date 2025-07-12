import { Button } from 'antd';
import { useState } from 'react';

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

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId: number) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDeleteClick(productId: number) {
    const newProducts = products.filter(el => el.id !== productId)
    setProducts(newProducts)
  }
  return (
    <ul>
      {products.map(product => (
        <li key={product.id} className=' flex gap-3'>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <Button type='primary' onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </Button >
          <Button danger onClick={() => {
            // 删除数组中的元素
            handleDeleteClick(product.id)
          }}>
            delete
          </Button>
        </li>
      ))}
    </ul>
  );
}
