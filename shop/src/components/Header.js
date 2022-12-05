import { NavLink, Link } from "react-router-dom";

function Header({ cart }) {
  return (
    <header className='header'>
      <h1 className="header__logo">Shop Logo</h1>
      <nav>
        <ul className='nav-list'>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/shop'}>Shop</NavLink></li>
          <li><NavLink to={'/contact'}>Contact</NavLink></li>
        </ul>
      </nav>
      <Link className="cart" to={'/cart'}>
        <span id='cartCount'>{cart.reduce((acc, item) => acc + item.qty, 0)}</span>
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </header>
  );
}

export default Header;