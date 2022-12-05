import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Shop from "./Shop";
import Product from './Product'
import { useState } from "react";

function App() {

  const items = [
    {
      name: 'Prod 1',
      imgUrl: './images/1.jpg',
      desc: 'Lorem ipsum dolor sit amet.',
      price: 19.23,
      qty: 1,
      id: 1,
    },
    {
      name: 'Prod 2',
      imgUrl: './images/2.jpg',
      desc: 'Lorem ipsum dolor sit amet.',
      price: 29.23,
      qty: 1,
      id: 2,
    },
    {
      name: 'Prod 3',
      imgUrl: './images/3.jpg',
      desc: 'Lorem ipsum dolor sit amet.',
      price: 39.23,
      qty: 1,
      id: 3,
    },
    {
      name: 'Prod 4',
      imgUrl: './images/4.jpg',
      desc: 'Lorem ipsum dolor sit amet.',
      price: 49.23,
      qty: 1,
      id: 4,
    }
  ]

  const [cart, setCart] = useState([])

  function addToCart(e) {
    const itemId = Number(e.target.getAttribute("data-id"))
    const itemQty = Number(e.target.getAttribute("data-qty"))

    const cartItemIndex = cart.findIndex(item => item.id === itemId)
    if (cartItemIndex !== -1) {
      console.log('incrementing item');
      let newCart = [...cart]
      newCart[cartItemIndex].qty = newCart[cartItemIndex].qty + itemQty
      setCart(newCart)
    } else {
      console.log('adding new item');
      const item = items.find(item => item.id === itemId)
      item.qty = itemQty
      setCart([...cart, item])
    }
  }

  return (
    <>
      <BrowserRouter>
        <Header cart={cart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop items={items} addToCart={addToCart}/>} />
          <Route path="/shop/:id" element={<Product items={items} addToCart={addToCart}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
