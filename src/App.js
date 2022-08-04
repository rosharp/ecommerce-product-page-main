import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './css/style.css';



function App() {
  const [isActive, setActive] = useState(false);
  const [productAmount, setProductAmount] = useState(0);
  const [productImage, setProductImage] = useState(1);
  const productImgAmount = 4;

  const handleClick = () => {
    setActive(!isActive);
  };

  const changeAmount = (event) => {
    if (event.target.classList[0] === "amount-minus" && productAmount > 0) {
      setProductAmount(productAmount - 1)
    } else if (event.target.classList[0] === "amount-plus") {
      setProductAmount(productAmount + 1)
    }
  }

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-logo">
            <img src="images/logo.svg" />
          </a>

          <div className="avatar-cart">
            <a href="#" className="nav-cart">
              <img src="images/icon-cart.svg" />
            </a>

            <a href="#" className="nav-avatar">
              <img src="images/image-avatar.png" />
            </a>
          </div>

          <ul className={isActive ? 'nav-menu active' : 'nav-menu inactive'}>
            <li class="nav-item">
              <a href="#" className="nav-link">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          <div className="hamburger" onClick={handleClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>

      {/* 
      <div className="img-content">
        <button ><img className="button-prev" src="images/icon-previous.svg" onClick={changeProductImage} /></button>
        <img className="product-img" src={
          productImage === 1 ? "images/image-product-1.jpg" :
            productImage === 2 ? "images/image-product-2.jpg" :
              productImage === 3 ? "images/image-product-3.jpg" :
                "images/image-product-4.jpg"
        }
        />
        <button><img className="button-next" src="images/icon-next.svg" onClick={changeProductImage} /></button>
      </div>
      */}

      <Splide
        options={{
          rewind: true,
          drag: true,
          autoplay: true,
          pauseOnHover: true,
          height: '30rem',
          focus: 'center',

        }}
        aria-label="My Favorite Images">
        <SplideSlide>
          <img src="images/image-product-1.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="images/image-product-2.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="images/image-product-3.jpg" alt="Image 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="images/image-product-4.jpg" alt="Image 4" />
        </SplideSlide>
      </Splide>


      <div className="text-div">
        <u className="subtag">Sneaker Company</u>

        <h1>Fall Limited Edition Sneakers</h1>

        <p className="clr-gray">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="price">
          <b className="price-tag">$125.00</b>
          <u className="sale-tag">50%</u>
          <s className="sale-strikethrough-tag">$250.00</s>
        </div>

        <div className="amount">
          <button className="amount-minus amount-btn" onClick={changeAmount}>
            <img className="amount-minus" src="images/icon-minus.svg" />
          </button>
          <span>{productAmount}</span>
          <button className="amount-plus amount-btn" onClick={changeAmount}>
            <img className="amount-plus" src="images/icon-plus.svg" />
          </button>
        </div>

        <button className="orange-btn">
          <span>
            <img src="images/icon-cart.svg" />
          </span>
          Add to cart
        </button>

        <div className="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
