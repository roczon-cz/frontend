import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">Roczon</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Marble</a>
        </li>

        <li>
          <a href="index.html">Granite</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="/images/stone9.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Cashew White</a>
              </div>
              <div className="product-brand">Roczon</div>
              <div className="product-price">₹60 per sq.ft</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/stone5.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Breccia Fury</a>
              </div>
              <div className="product-brand">Roczon</div>
              <div className="product-price">₹65 per sq.ft</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/stone6.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Crystal Light</a>
              </div>
              <div className="product-brand">Roczon</div>
              <div className="product-price">₹55 per sq.ft</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/stone7.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Alaska Snow Sea AF</a>
              </div>
              <div className="product-brand">Roczon</div>
              <div className="product-price">₹70 per sq.ft</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/stone8.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Crema Eva</a>
              </div>
              <div className="product-brand">Roczon</div>
              <div className="product-price">₹80 per sq.ft</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/stone9.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Yanke Biege</a>
              </div>
              <div className="product-brand">Roczon</div>
              <div className="product-price">₹100 per sq.ft</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
    </div>
  );
}

export default App;
