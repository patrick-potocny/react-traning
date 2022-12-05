import { useState } from "react";
import { useParams } from "react-router";

function Product({ items, addToCart }) {

  const [qty, setQty] = useState(1)

  const { id } = useParams()
  const item = items.find(item => item.id === Number(id))
  return (
    <div className="productPage">
      <img src={'.' + item.imgUrl} alt="Product" />
      <div className="prodInfo">
        <h3 className="name">{item.name}</h3>
        <p className="desc">{item.desc}</p>
        <p className="price">{item.price} €</p>
        <input type="number" value={qty} onChange={e => setQty(e.target.value)} />
        <button data-id={item.id} data-qty={qty} onClick={addToCart} >+ Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;