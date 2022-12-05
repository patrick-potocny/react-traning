import { Link } from "react-router-dom";

function Shop({ items, addToCart }) {

  const products = items.map(item => 
    <div  className="product" key={item.id}>
      <Link to={`${item.id}`}>
        <img src={item.imgUrl} alt="Product" />
        <h3 className="prodName">{item.name}</h3>
        <p className="desc">{item.desc}</p>
        <p className="price">{item.price} €</p>
      </Link>
      <button data-qty='1' data-id={item.id} onClick={addToCart} className="addToCartBtn">+ Add to cart</button>
    </div>
    )

  return (
    <div className='shop'>
      {products}
    </div>
  );
}

export default Shop;