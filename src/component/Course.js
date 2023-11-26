import logo from '../logo.svg';
import '../App.css';

// bootstrap
import { Button, Container, Row, Col, Card} from 'react-bootstrap';

function Signup() {
  return (
    <div>
      <header>

      <div class="header-main">

        <div class="container">

          <a href="#" class="header-logo">
            <img src="assets/images/logo/favicon.png" alt="men's fashion" width="100" height="100" />

          </a>

          <div class="header-search-container">

            <input type="search" name="search" class="search-field" placeholder="Enter your product name..." />

            <button class="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>

          </div>

          <div class="header-user-actions">

            <button class="action-btn">
              <ion-icon name="person-outline"></ion-icon>
            </button>

            <button class="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span class="count">0</span>
            </button>

            {/* <button class="action-btn">
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span class="count">0</span>
            </button> */}

          </div>

        </div>

      </div>

      <nav class="desktop-navigation-menu">

        <div class="container">

          <ul class="desktop-menu-category-list">

            <li class="menu-category">
              <a href="#" class="menu-title">Home</a>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">Categories</a>

              <div class="dropdown-panel">

                <ul class="dropdown-panel-list">

                  <li class="menu-title">
                    <a href="#">Men's</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Formal</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Casual</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Sports</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Jacket</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Sunglasses</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img src="assets/images/mens-banner.jpg" alt="men's fashion" width="250" height="119" />
                    </a>
                  </li>

                </ul>

              </div>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">Hot Offers</a>
            </li>

          </ul>

        </div>

      </nav>

      <div class="mobile-bottom-navigation">

        <button class="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <button class="action-btn">
          <ion-icon name="bag-handle-outline"></ion-icon>

          <span class="count">0</span>
        </button>

        <button class="action-btn">
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button class="action-btn">
          <ion-icon name="heart-outline"></ion-icon>

          <span class="count">0</span>
        </button>

        <button class="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="grid-outline"></ion-icon>
        </button>

      </div>

      <nav class="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

        <div class="menu-top">
          <h2 class="menu-title">Menu</h2>

          <button class="menu-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul class="mobile-menu-category-list">

          <li class="menu-category">
            <a href="#" class="menu-title">Home</a>
          </li>

          <li class="menu-category">
            <a href="#" class="menu-title">Hot Offers</a>
          </li>

        </ul>

        <div class="menu-bottom">

          <ul class="menu-social-container">

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

      </nav>

      </header>
        <Col sm={4}>
          <form className='form_signUp'>
            <h4>Sign Up</h4>
            <div class="">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
            <div class="">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
            </div>
            <button type="submit" class="btn">Submit</button>
          </form>
        </Col>

       
      <footer>

        <div class="footer-nav">

          <div class="container">

            <ul class="footer-nav-list">

              <li class="footer-nav-item">
                <h2 class="nav-title">Products</h2>
              </li>

              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">T-shirt</a>
              </li>

              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Formal Shirt</a>
              </li>

              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Hoddy</a>
              </li>

              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Pant</a>
              </li>

            </ul>

            <ul class="footer-nav-list">
            
              <li class="footer-nav-item">
                <h2 class="nav-title">Our Company</h2>
              </li>
            
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Delivery</a>
              </li>
            
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Legal Notice</a>
              </li>
            
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Terms and conditions</a>
              </li>
            
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">About us</a>
              </li>
            
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Secure payment</a>
              </li>
            
            </ul>

            <ul class="footer-nav-list">
            
              <li class="footer-nav-item">
                <h2 class="nav-title">Services</h2>
              </li>
            
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Customization</a>
              </li>
            
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">New products</a>
              </li>
            
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Best sales</a>
              </li>
            
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Trending</a>
              </li>
            
            </ul>

            <ul class="footer-nav-list">

              <li class="footer-nav-item">
                <h2 class="nav-title">Contact</h2>
              </li>

              <li class="footer-nav-item flex">
                <div class="icon-box">
                  <ion-icon name="location-outline"></ion-icon>
                </div>

                <address class="content">
                  Jashimuddin Hall, Faridpur Engineering College (FEC)
                </address>
              </li>

              <li class="footer-nav-item flex">
                <div class="icon-box">
                  <ion-icon name="call-outline"></ion-icon>
                </div>

                <a href="tel:+8801770633262" class="footer-nav-link">(+880) 177-063-3262</a>
              </li>

              <li class="footer-nav-item flex">
                <div class="icon-box">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>

                <a href="mailto:info@arena.com" class="footer-nav-link">info@arena.com</a>
              </li>

            </ul>

            <ul class="footer-nav-list">

              <li class="footer-nav-item">
                <h2 class="nav-title">Follow Us</h2>
              </li>

              <li>
                <ul class="social-link">

                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>

                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>

                </ul>
              </li>

            </ul>

          </div>

        </div>

        <div class="footer-bottom">

          <div class="container">

            <img src="assets/images//logo/favicon2.png" alt="" class="payment-img" width="200px !important"  />

            <p class="copyright">
              Copyright &copy; <a href="#">Apparela Arena</a> all rights reserved.
            </p>

          </div>

        </div>

      </footer>
    </div>
  );
}

export default Signup;
        