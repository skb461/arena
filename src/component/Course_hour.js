

function Main() {
  return (
    <div className="App">
      <header>

        {/* <div class="header-top">

          <div class="container">

            <ul class="header-social-container">

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

            <div class="header-alert-news">
              <p>
                <b>Free Shipping</b>
                This Week Order Over - $55
              </p>
            </div>

            <div class="header-top-actions">

              <select name="currency">

                <option value="usd">BDT</option>
                <option value="eur">USD</option>
                <option value="eur">EUR</option>

              </select>

              <select name="language">

                <option value="en-US">English</option>

              </select>

            </div>

          </div>

        </div> */}

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

            {/* <ul class="menu-category-list">

              <li class="menu-category">

                <button class="accordion-menu" data-accordion-btn>
                  <p class="menu-title">Language</p>

                  <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                </button>

                <ul class="submenu-category-list" data-accordion>

                  <li class="submenu-category">
                    <a href="#" class="submenu-title">English</a>
                  </li>

                </ul>

              </li>

              <li class="menu-category">
                <button class="accordion-menu" data-accordion-btn>
                  <p class="menu-title">Currency</p>
                  <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                </button>

                <ul class="submenu-category-list" data-accordion>
                  <li class="submenu-category">
                    <a href="#" class="submenu-title">BDT</a>
                  </li>

                  <li class="submenu-category">
                    <a href="#" class="submenu-title">USD</a>
                  </li>

                  <li class="submenu-category">
                    <a href="#" class="submenu-title">EUR</a>
                  </li>
                </ul>
              </li>

            </ul> */}

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





        

        <main>

       
        <div class="banner">

          <div class="container">

            <div class="slider-container has-scrollbar">

              <div class="slider-item">

                <img src="assets/images/banner-1.jpg" alt="" class="banner-img" />

                <div class="banner-content">

                  <p class="banner-subtitle">Trending item</p>

                  <h2 class="banner-title">Men's latest fashion sale</h2>

                  <p class="banner-text">
                    starting at &dollar; <b>20</b>.00
                  </p>

                  <a href="#" class="banner-btn">Shop now</a>

                </div>

              </div>

              <div class="slider-item">

                <img src="assets/images/banner-2.jpg" alt="modern sunglasses" class="banner-img" />

                <div class="banner-content">

                  <p class="banner-subtitle">Social Media QR Code</p>

                  <h2 class="banner-title">Get mopre offer on social media</h2>

                  <a href="#" class="banner-btn">Shop now</a>

                </div>

              </div>

              <div class="slider-item">

                <img src="assets/images/banner-3.jpg" alt="new fashion summer sale" class="banner-img" />

                <div class="banner-content">

                  <p class="banner-subtitle">Sale Offer</p>

                  <h2 class="banner-title">New fashion summer sale</h2>

                  <p class="banner-text">
                    starting at &dollar; <b>29</b>.99
                  </p>

                  <a href="#" class="banner-btn">Shop now</a>

                </div>

              </div>

            </div>

          </div>

        </div>





       

        {/* <div class="category">

          <div class="container">

            <div class="category-item-container has-scrollbar">

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/images/icons/tee.svg" alt="t-shirts" width="30" />
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">T-shirts</h3>

                    <p class="category-item-amount">(35)</p>
                  </div>

                  <a href="#" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/images/icons/coat.svg" alt="winter wear" width="30" />
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Winter wear</h3>

                    <p class="category-item-amount">(58)</p>
                  </div>

                  <a href="#" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/images/icons/glasses.svg" alt="glasses & lens" width="30" />
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Glasses & lens</h3>

                    <p class="category-item-amount">(68)</p>
                  </div>

                  <a href="#" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/images/icons/shorts.svg" alt="shorts & jeans" width="30" />
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Shorts & jeans</h3>

                    <p class="category-item-amount">(84)</p>
                  </div>

                  <a href="#" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/images/icons/jacket.svg" alt="jacket" width="30" />
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Jacket</h3>

                    <p class="category-item-amount">(16)</p>
                  </div>

                  <a href="#" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/images/icons/watch.svg" alt="watch" width="30" />
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Watch</h3>

                    <p class="category-item-amount">(27)</p>
                  </div>

                  <a href="#" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/images/icons/hat.svg" alt="hat & caps" width="30" />
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Hat & caps</h3>

                    <p class="category-item-amount">(39)</p>
                  </div>

                  <a href="#" class="category-btn">Show all</a>

                </div>

              </div>

            </div>

          </div>

        </div> */}





      

        <div class="product-container">

          <div class="container">


           

            <div class="sidebar  has-scrollbar" data-mobile-menu>

              {/* <div class="sidebar-category">

                <div class="sidebar-top">
                  <h2 class="sidebar-title">Category</h2>

                  <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                </div>

                <ul class="sidebar-menu-category-list">

                  <li class="sidebar-menu-category">

                    <button class="sidebar-accordion-menu" data-accordion-btn>

                      <div class="menu-title-flex">
                        <img src="assets/images/icons/dress.svg" alt="clothes" width="20" height="20"
                          class="menu-title-img" />

                        <p class="menu-title">Clothes</p>
                      </div>

                      <div>
                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                      </div>

                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">Shirt</p>
                          <data value="300" class="stock" title="Available Stock">300</data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">shorts & jeans</p>
                          <data value="60" class="stock" title="Available Stock">60</data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">jacket</p>
                          <data value="50" class="stock" title="Available Stock">50</data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">dress & frock</p>
                          <data value="87" class="stock" title="Available Stock">87</data>
                        </a>
                      </li>

                    </ul>

                  </li>

                  <li class="sidebar-menu-category">

                    <button class="sidebar-accordion-menu" data-accordion-btn>

                      <div class="menu-title-flex">
                        <img src="assets/images/icons/shoes.svg" alt="footwear" class="menu-title-img" width="20"
                          height="20" />

                        <p class="menu-title">Footwear</p>
                      </div>

                      <div>
                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                      </div>

                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">Sports</p>
                          <data value="45" class="stock" title="Available Stock">45</data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">Formal</p>
                          <data value="75" class="stock" title="Available Stock">75</data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">Casual</p>
                          <data value="35" class="stock" title="Available Stock">35</data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">Safety Shoes</p>
                          <data value="26" class="stock" title="Available Stock">26</data>
                        </a>
                      </li>

                    </ul>

                  </li>

                  <li class="sidebar-menu-category">

                    <button class="sidebar-accordion-menu" data-accordion-btn>

                      <div class="menu-title-flex">
                        <img src="assets/images/icons/perfume.svg" alt="perfume" class="menu-title-img" width="20"
                          height="20" />

                        <p class="menu-title">Perfume</p>
                      </div>

                      <div>
                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                      </div>

                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">Clothes Perfume</p>
                          <data value="12" class="stock" title="Available Stock">12 pcs</data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">Deodorant</p>
                          <data value="60" class="stock" title="Available Stock">60 pcs</data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">jacket</p>
                          <data value="50" class="stock" title="Available Stock">50 pcs</data>
                        </a>
                      </li>

                    </ul>

                  </li>

                  <li class="sidebar-menu-category">

                    <button class="sidebar-accordion-menu" data-accordion-btn>

                      <div class="menu-title-flex">
                        <img src="assets/images/icons/glasses.svg" alt="glasses" class="menu-title-img" width="20"
                          height="20" />

                        <p class="menu-title">Glasses</p>
                      </div>

                      <div>
                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                      </div>

                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">Sunglasses</p>
                          <data value="50" class="stock" title="Available Stock">50</data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">Lenses</p>
                          <data value="48" class="stock" title="Available Stock">48</data>
                        </a>
                      </li>

                    </ul>

                  </li>

                  <li class="sidebar-menu-category">

                    <button class="sidebar-accordion-menu" data-accordion-btn>

                      <div class="menu-title-flex">
                        <img src="assets/images/icons/bag.svg" alt="bags" class="menu-title-img" width="20" height="20" />

                        <p class="menu-title">Bags</p>
                      </div>

                      <div>
                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                      </div>

                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">Shopping Bag</p>
                          <data value="62" class="stock" title="Available Stock">62</data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">Gym Backpack</p>
                          <data value="35" class="stock" title="Available Stock">35</data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="#" class="sidebar-submenu-title">
                          <p class="product-name">Wallet</p>
                          <data value="75" class="stock" title="Available Stock">75</data>
                        </a>
                      </li>

                    </ul>

                  </li>

                </ul>

              </div> */}

              <div class="product-showcase">

                <h3 class="showcase-heading">best sellers</h3>

                <div class="showcase-wrapper">

                  <div class="showcase-container">

                    <div class="showcase">

                      <a href="#" class="showcase-img-box">
                        <img src="assets/images/products/1.jpg" alt="" width="75" height="75"
                          class="showcase-img" />
                      </a>

                      <div class="showcase-content">

                        <a href="">
                          <h4 class="showcase-title">Fabric shoes</h4>
                        </a>

                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>

                        <div class="price-box">
                          <del>$5.00</del>
                          <p class="price">$4.00</p>
                        </div>

                      </div>

                    </div>

                    <div class="showcase">

                      <a href="#" class="showcase-img-box">
                        <img src="assets/images/products/2.jpg" alt="" class="showcase-img"
                          width="75" height="75" />
                      </a>

                      <div class="showcase-content">

                        <a href="#">
                          <h4 class="showcase-title">Men's hoodies t-shirt</h4>
                        </a>
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-half-outline"></ion-icon>
                        </div>

                        <div class="price-box">
                          <del>$17.00</del>
                          <p class="price">$7.00</p>
                        </div>

                      </div>

                    </div>

                    <div class="showcase">

                      <a href="#" class="showcase-img-box">
                        <img src="assets/images/products/3.jpg" alt="" class="showcase-img" width="75"
                          height="75" />
                      </a>

                      <div class="showcase-content">

                        <a href="#">
                          <h4 class="showcase-title">Men's t-shirt</h4>
                        </a>
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-half-outline"></ion-icon>
                        </div>

                        <div class="price-box">
                          <del>$5.00</del>
                          <p class="price">$3.00</p>
                        </div>

                      </div>

                    </div>

                    <div class="showcase">

                      <a href="#" class="showcase-img-box">
                        <img src="assets/images/products/4.jpg" alt="" class="showcase-img" width="75"
                          height="75" />
                      </a>

                      <div class="showcase-content">

                        <a href="#">
                          <h4 class="showcase-title">Woolen hat for men</h4>
                        </a>
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>

                        <div class="price-box">
                          <del>$15.00</del>
                          <p class="price">$12.00</p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>



            <div class="product-box">

             

              <div class="product-minimal">

                {/* <div class="product-showcase">

                  <h2 class="title">New Arrivals</h2>

                  <div class="showcase-wrapper has-scrollbar">

                    <div class="showcase-container">
                    
                      <div class="showcase">
                    
                        <a href="#" class="showcase-img-box">
                          <img src="assets/images/products/jacket-5.jpg" alt="men yarn fleece full-zip jacket" class="showcase-img"
                            width="70" />
                        </a>
                    
                        <div class="showcase-content">
                    
                          <a href="#">
                            <h4 class="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                          </a>
                    
                          <a href="#" class="showcase-category">Winter wear</a>
                    
                          <div class="price-box">
                            <p class="price">$61.00</p>
                            <del>$11.00</del>
                          </div>
                    
                        </div>
                    
                      </div>
                    
                      <div class="showcase">
                    
                        <a href="#" class="showcase-img-box">
                          <img src="assets/images/products/jacket-1.jpg" alt="mens winter leathers jackets" class="showcase-img"
                            width="70" />
                        </a>
                    
                        <div class="showcase-content">
                    
                          <a href="#">
                            <h4 class="showcase-title">Mens Winter Leathers Jackets</h4>
                          </a>
                    
                          <a href="#" class="showcase-category">Winter wear</a>
                    
                          <div class="price-box">
                            <p class="price">$32.00</p>
                            <del>$20.00</del>
                          </div>
                    
                        </div>
                    
                      </div>
                    
                      <div class="showcase">
                    
                        <a href="#" class="showcase-img-box">
                          <img src="assets/images/products/jacket-3.jpg" alt="mens winter leathers jackets" class="showcase-img"
                            width="70" />
                        </a>
                    
                        <div class="showcase-content">
                    
                          <a href="#">
                            <h4 class="showcase-title">Mens Winter Leathers Jackets</h4>
                          </a>
                    
                          <a href="#" class="showcase-category">Jackets</a>
                    
                          <div class="price-box">
                            <p class="price">$50.00</p>
                            <del>$25.00</del>
                          </div>
                    
                        </div>
                    
                      </div>
                    
                      <div class="showcase">
                    
                        <a href="#" class="showcase-img-box">
                          <img src="assets/images/products/shorts-1.jpg" alt="better basics french terry sweatshorts" class="showcase-img"
                            width="70" />
                        </a>
                    
                        <div class="showcase-content">
                    
                          <a href="#">
                            <h4 class="showcase-title">Better Basics French Terry Sweatshorts</h4>
                          </a>
                    
                          <a href="#" class="showcase-category">Shorts</a>
                    
                          <div class="price-box">
                            <p class="price">$20.00</p>
                            <del>$10.00</del>
                          </div>
                    
                        </div>
                    
                      </div>
                    
                    </div>

                  </div>

                </div> */}

                <div class="product-showcase">
                
                  <h2 class="title">Trending</h2>
                
                  <div class="showcase-wrapper  has-scrollbar">
                
                    <div class="showcase-container">
                
                      <div class="showcase">
                
                        <a href="#" class="showcase-img-box">
                          <img src="assets/images/products/sports-1.jpg" alt="running & trekking shoes - white" class="showcase-img"
                            width="70" />
                        </a>
                
                        <div class="showcase-content">
                
                          <a href="#">
                            <h4 class="showcase-title">Running & Trekking Shoes - White</h4>
                          </a>
                
                          <a href="#" class="showcase-category">Sports</a>
                
                          <div class="price-box">
                            <p class="price">$49.00</p>
                            <del>$15.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div class="showcase">
                
                        <a href="#" class="showcase-img-box">
                          <img src="assets/images/products/sports-6.jpg" alt="air tekking shoes - white" class="showcase-img"
                            width="70" />
                        </a>
                
                        <div class="showcase-content">
                
                          <a href="#">
                            <h4 class="showcase-title">Air Trekking Shoes - white</h4>
                          </a>
                
                          <a href="#" class="showcase-category">Sports</a>
                
                          <div class="price-box">
                            <p class="price">$52.00</p>
                            <del>$55.00</del>
                          </div>
                
                        </div>
                
                      </div>
          
                      <div class="showcase">
                
                        <a href="#" class="showcase-img-box">
                          <img src="assets/images/products/sports-3.jpg" alt="sports claw women's shoes" class="showcase-img"
                            width="70" />
                        </a>
                
                        <div class="showcase-content">
                
                          <a href="#">
                            <h4 class="showcase-title">Sports Claw Women's Shoes</h4>
                          </a>
                
                          <a href="#" class="showcase-category">Sports</a>
                
                          <div class="price-box">
                            <p class="price">$54.00</p>
                            <del>$65.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div class="showcase">
                
                        <a href="#" class="showcase-img-box">
                          <img src="assets/images/products/shoe-2.jpg" alt="casual men's brown shoes" class="showcase-img" width="70" />
                        </a>
                
                        <div class="showcase-content">
                
                          <a href="#">
                            <h4 class="showcase-title">Casual Men's Brown shoes</h4>
                          </a>
                
                          <a href="#" class="showcase-category">Casual</a>
                
                          <div class="price-box">
                            <p class="price">$50.00</p>
                            <del>$55.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                    </div>
                
                  </div>
                
                </div>

                <div class="product-showcase">
                
                  <h2 class="title">Top Rated</h2>
                
                  <div class="showcase-wrapper  has-scrollbar">
                
                    <div class="showcase-container">
                
                      <div class="showcase">
                
                        <a href="#" class="showcase-img-box">
                          <img src="assets/images/products/watch-3.jpg" alt="pocket watch leather pouch" class="showcase-img"
                            width="70" />
                        </a>
                
                        <div class="showcase-content">
                
                          <a href="#">
                            <h4 class="showcase-title">Pocket Watch Leather Pouch</h4>
                          </a>
                
                          <a href="#" class="showcase-category">Watches</a>
                
                          <div class="price-box">
                            <p class="price">$50.00</p>
                            <del>$34.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div class="showcase">
                
                        <a href="#" class="showcase-img-box">
                          <img src="assets/images/products/belt.jpg" alt="men's leather reversible belt" class="showcase-img"
                            width="70" />
                        </a>
                
                        <div class="showcase-content">
                
                          <a href="#">
                            <h4 class="showcase-title">Men's Leather Reversible Belt</h4>
                          </a>
                
                          <a href="#" class="showcase-category">Belt</a>
                
                          <div class="price-box">
                            <p class="price">$24.00</p>
                            <del>$10.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div class="showcase">
                
                        <a href="#" class="showcase-img-box">
                          <img src="assets/images/products/watch-1.jpg" alt="smart watche vital plus" class="showcase-img" width="70" />
                        </a>
                
                        <div class="showcase-content">
                
                          <a href="#">
                            <h4 class="showcase-title">Smart watche Vital Plus</h4>
                          </a>
                
                          <a href="#" class="showcase-category">Watches</a>
                
                          <div class="price-box">
                            <p class="price">$56.00</p>
                            <del>$78.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div class="showcase">
                
                        <a href="#" class="showcase-img-box">
                          <img src="assets/images/products/shampoo.jpg" alt="shampoo conditioner packs" class="showcase-img"
                            width="70" />
                        </a>
                
                        <div class="showcase-content">
                
                          <a href="#">
                            <h4 class="showcase-title">shampoo conditioner packs</h4>
                          </a>
                
                          <a href="#" class="showcase-category">cosmetics</a>
                
                          <div class="price-box">
                            <p class="price">$20.00</p>
                            <del>$30.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                    </div>
                
                  </div>
                
                </div>

              </div>



           

              <div class="product-featured">

                <h2 class="title">Deal of the day</h2>

                <div class="showcase-wrapper has-scrollbar">

                  <div class="showcase-container">

                    <div class="showcase">
                      
                      <div class="showcase-banner">
                        <img src="assets/images/products/shampoo.jpg" alt="shampoo, conditioner & facewash packs" class="showcase-img" />
                      </div>

                      <div class="showcase-content">
                        
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                        </div>

                        <a href="#">
                          <h3 class="showcase-title">shampoo, conditioner & facewash packs</h3>
                        </a>

                        <p class="showcase-desc">
                          Lorem ipsum dolor sit amet consectetur Lorem ipsum
                          dolor dolor sit amet consectetur Lorem ipsum dolor
                        </p>

                        <div class="price-box">
                          <p class="price">$150.00</p>

                          <del>$200.00</del>
                        </div>

                        <button class="add-cart-btn">add to cart</button>

                        <div class="showcase-status">
                          <div class="wrapper">
                            <p>
                              already sold: <b>20</b>
                            </p>

                            <p>
                              available: <b>40</b>
                            </p>
                          </div>

                          <div class="showcase-status-bar"></div>
                        </div>

                        <div class="countdown-box">

                          <p class="countdown-desc">
                            Hurry Up! Offer ends in:
                          </p>

                          <div class="countdown">

                            <div class="countdown-content">

                              <p class="display-number">360</p>

                              <p class="display-text">Days</p>

                            </div>

                            <div class="countdown-content">
                              <p class="display-number">24</p>
                              <p class="display-text">Hours</p>
                            </div>

                            <div class="countdown-content">
                              <p class="display-number">59</p>
                              <p class="display-text">Min</p>
                            </div>

                            <div class="countdown-content">
                              <p class="display-number">00</p>
                              <p class="display-text">Sec</p>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                  <div class="showcase-container">
                  
                    <div class="showcase">
                  
                      <div class="showcase-banner">
                        <img src="assets/images/products/sports-6.jpg" alt="Rose Gold diamonds Earring" class="showcase-img" />
                      </div>
                  
                      <div class="showcase-content">
                  
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                        </div>
                  
                        <h3 class="showcase-title">
                          <a href="#" class="showcase-title">ir Trekking Shoes - white</a>
                        </h3>
                  
                        <p class="showcase-desc">
                          Lorem ipsum dolor sit amet consectetur Lorem ipsum
                          dolor dolor sit amet consectetur Lorem ipsum dolor
                        </p>
                  
                        <div class="price-box">
                          <p class="price">$45.00</p>
                          <del>$20.00</del>
                        </div>
                  
                        <button class="add-cart-btn">add to cart</button>
                  
                        <div class="showcase-status">
                          <div class="wrapper">
                            <p> already sold: <b>15</b> </p>
                  
                            <p> available: <b>40</b> </p>
                          </div>
                  
                          <div class="showcase-status-bar"></div>
                        </div>
                  
                        <div class="countdown-box">
                  
                          <p class="countdown-desc">Hurry Up! Offer ends in:</p>
                  
                          <div class="countdown">
                            <div class="countdown-content">
                              <p class="display-number">360</p>
                              <p class="display-text">Days</p>
                            </div>
                  
                            <div class="countdown-content">
                              <p class="display-number">24</p>
                              <p class="display-text">Hours</p>
                            </div>
                  
                            <div class="countdown-content">
                              <p class="display-number">59</p>
                              <p class="display-text">Min</p>
                            </div>
                  
                            <div class="countdown-content">
                              <p class="display-number">00</p>
                              <p class="display-text">Sec</p>
                            </div>
                          </div>
                  
                        </div>
                  
                      </div>
                  
                    </div>
                  
                  </div>

                </div>

              </div>



             

              <div class="product-main">

                <h2 class="title">New Products</h2>

                <div class="product-grid">

                  <div class="showcase">

                    <div class="showcase-banner">

                      <img src="assets/images/products/jacket-3.jpg" alt="Mens Winter Leathers Jackets" width="300" class="product-img default" />
                      <img src="assets/images/products/jacket-4.jpg" alt="Mens Winter Leathers Jackets" width="300" class="product-img hover" />

                      <p class="showcase-badge">15%</p>

                      <div class="showcase-actions">

                        <button class="btn-action">
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button class="btn-action">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="btn-action">
                          <ion-icon name="repeat-outline"></ion-icon>
                        </button>

                        <button class="btn-action">
                          <ion-icon name="bag-add-outline"></ion-icon>
                        </button>

                      </div>

                    </div>

                    <div class="showcase-content">

                      <a href="#" class="showcase-category">jacket</a>

                      <a href="#">
                        <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
                      </a>

                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>

                      <div class="price-box">
                        <p class="price">$48.00</p>
                        <del>$75.00</del>
                      </div>

                    </div>

                  </div>

                  <div class="showcase">
                  
                    <div class="showcase-banner">
                      <img src="assets/images/products/shirt-1.jpg" alt="Pure Garment Dyed Cotton Shirt" class="product-img default"
                        width="300" />
                      <img src="assets/images/products/shirt-2.jpg" alt="Pure Garment Dyed Cotton Shirt" class="product-img hover"
                        width="300" />
                  
                      <p class="showcase-badge angle black">sale</p>
                  
                      <div class="showcase-actions">
                        <button class="btn-action">
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                  
                    <div class="showcase-content">
                      <a href="#" class="showcase-category">shirt</a>
                  
                      <h3>
                        <a href="#" class="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                      </h3>
                  
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div class="price-box">
                        <p class="price">$45.00</p>
                        <del>$56.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div class="showcase">
                  
                    <div class="showcase-banner">
                      <img src="assets/images/products/jacket-5.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" class="product-img default"
                        width="300" />
                      <img src="assets/images/products/jacket-6.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" class="product-img hover"
                        width="300" />
                  
                      <div class="showcase-actions">
                        <button class="btn-action">
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                  
                    <div class="showcase-content">
                      <a href="#" class="showcase-category">Jacket</a>
                  
                      <h3>
                        <a href="#" class="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                      </h3>
                  
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div class="price-box">
                        <p class="price">$58.00</p>
                        <del>$65.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div class="showcase">
                  
                    <div class="showcase-banner">
                      <img src="assets/images/products/shoe-2.jpg" alt="Casual Men's Brown shoes" class="product-img default"
                        width="300" />
                      <img src="assets/images/products/shoe-2_1.jpg" alt="Casual Men's Brown shoes" class="product-img hover"
                        width="300" />
                  
                      <div class="showcase-actions">
                        <button class="btn-action">
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                  
                    <div class="showcase-content">
                      <a href="#" class="showcase-category">casual</a>
                  
                      <h3>
                        <a href="#" class="showcase-title">Casual Men's Brown shoes</a>
                      </h3>
                  
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                  
                      <div class="price-box">
                        <p class="price">$99.00</p>
                        <del>$105.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div class="showcase">
                  
                    <div class="showcase-banner">
                      <img src="assets/images/products/jacket-1.jpg" alt="Mens Winter Leathers Jackets" class="product-img default"
                        width="300" />
                      <img src="assets/images/products/jacket-2.jpg" alt="Mens Winter Leathers Jackets" class="product-img hover"
                        width="300" />
                  
                      <div class="showcase-actions">
                        <button class="btn-action">
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                  
                    <div class="showcase-content">
                      <a href="#" class="showcase-category">jacket</a>
                  
                      <h3>
                        <a href="#" class="showcase-title">Mens Winter Leathers Jackets</a>
                      </h3>
                  
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div class="price-box">
                        <p class="price">$32.00</p>
                        <del>$45.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div class="showcase">
                  
                    <div class="showcase-banner">
                      <img src="assets/images/products/sports-2.jpg" alt="Trekking & Running Shoes - black" class="product-img default"
                        width="300" />
                      <img src="assets/images/products/sports-4.jpg" alt="Trekking & Running Shoes - black" class="product-img hover"
                        width="300" />
                  
                      <p class="showcase-badge angle black">sale</p>
                  
                      <div class="showcase-actions">
                        <button class="btn-action">
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                  
                    <div class="showcase-content">
                      <a href="#" class="showcase-category">sports</a>
                  
                      <h3>
                        <a href="#" class="showcase-title">Trekking & Running Shoes - black</a>
                      </h3>
                  
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div class="price-box">
                        <p class="price">$58.00</p>
                        <del>$64.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div class="showcase">
                  
                    <div class="showcase-banner">
                      <img src="assets/images/products/shoe-1.jpg" alt="Men's Leather Formal Wear shoes" class="product-img default"
                        width="300" />
                      <img src="assets/images/products/shoe-1_1.jpg" alt="Men's Leather Formal Wear shoes" class="product-img hover"
                        width="300" />
                  
                      <div class="showcase-actions">
                        <button class="btn-action">
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                  
                    <div class="showcase-content">
                      <a href="#" class="showcase-category">formal</a>
                  
                      <h3>
                        <a href="#" class="showcase-title">Men's Leather Formal Wear shoes</a>
                      </h3>
                  
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div class="price-box">
                        <p class="price">$50.00</p>
                        <del>$65.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div class="showcase">
                  
                    <div class="showcase-banner">
                      <img src="assets/images/products/shorts-1.jpg" alt="Better Basics French Terry Sweatshorts"
                        class="product-img default" width="300" />
                      <img src="assets/images/products/shorts-2.jpg" alt="Better Basics French Terry Sweatshorts"
                        class="product-img hover" width="300" />
                  
                      <p class="showcase-badge angle black">sale</p>
                  
                      <div class="showcase-actions">
                        <button class="btn-action">
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                  
                        <button class="btn-action">
                          <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                  
                    <div class="showcase-content">
                      <a href="#" class="showcase-category">shorts</a>
                  
                      <h3>
                        <a href="#" class="showcase-title">Better Basics French Terry Sweatshorts</a>
                      </h3>
                  
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div class="price-box">
                        <p class="price">$78.00</p>
                        <del>$85.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>





       

        <div>

          <div class="container">

            <div class="testimonials-box">


              <div class="cta-container">

                <a href="#" class="">
                  <img src="assets/images/cta-banner.jpg" alt="summer collection" class="cta-banner" />
                </a>

              </div>

              <div class="cta-container">

                <a href="#" class="">
                  <img src="assets/images/cta-banner.jpg" alt="summer collection" class="cta-banner" />
                </a>

              </div>


            </div>

          </div>

        </div>





        {/* <div class="blog">

          <div class="container">

            <div class="blog-container has-scrollbar">

              <div class="blog-card">

                <a href="#">
                  <img src="assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                </a>

                <div class="blog-content">

                  <a href="#" class="blog-category">Fashion</a>

                  <a href="#">
                    <h3 class="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
                  </a>

                  <p class="blog-meta">
                    By <cite>Mr Admin</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
                  </p>

                </div>

              </div>

              <div class="blog-card">
              
                <a href="#">
                  <img src="assets/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                    class="blog-banner" width="300" />
                </a>
              
                <div class="blog-content">
              
                  <a href="#" class="blog-category">Clothes</a>
              
                  <h3>
                    <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                  </h3>
              
                  <p class="blog-meta">
                    By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
                  </p>
              
                </div>
              
              </div>

              <div class="blog-card">
              
                <a href="#">
                  <img src="assets/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                    class="blog-banner" width="300" />
                </a>
              
                <div class="blog-content">
              
                  <a href="#" class="blog-category">Shoes</a>
              
                  <h3>
                    <a href="#" class="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
                  </h3>
              
                  <p class="blog-meta">
                    By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
                  </p>
              
                </div>
              
              </div>

              <div class="blog-card">
              
                <a href="#">
                  <img src="assets/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                    class="blog-banner" width="300" />
                </a>
              
                <div class="blog-content">
              
                  <a href="#" class="blog-category">Electronics</a>
              
                  <h3>
                    <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                  </h3>
              
                  <p class="blog-meta">
                    By <cite>Mr Pawar</cite> / <time datetime="2022-03-15">Mar 15, 2022</time>
                  </p>
              
                </div>
              
              </div>

            </div>

          </div>

        </div> */}

        </main>





       
        <footer>

        {/* <div class="footer-category">

          <div class="container">

            <h2 class="footer-category-title">Brand directory</h2>

            <div class="footer-category-box">

              <h3 class="category-box-title">Fashion :</h3>

              <a href="#" class="footer-category-link">T-shirt</a>
              <a href="#" class="footer-category-link">Shirts</a>
              <a href="#" class="footer-category-link">shorts & jeans</a>
              <a href="#" class="footer-category-link">jacket</a>

            </div>

            <div class="footer-category-box">
              <h3 class="category-box-title">footwear :</h3>
            
              <a href="#" class="footer-category-link">sport</a>
              <a href="#" class="footer-category-link">formal</a>
              <a href="#" class="footer-category-link">Boots</a>
              <a href="#" class="footer-category-link">casual</a>
              <a href="#" class="footer-category-link">cowboy shoes</a>
              <a href="#" class="footer-category-link">safety shoes</a>
            </div>

            <div class="footer-category-box">
              <h3 class="category-box-title">cosmetics :</h3>
            
              <a href="#" class="footer-category-link">Shampoo</a>
              <a href="#" class="footer-category-link">Bodywash</a>
              <a href="#" class="footer-category-link">Facewash</a>
              <a href="#" class="footer-category-link">prefume</a>
              <a href="#" class="footer-category-link">Body soap</a>
              <a href="#" class="footer-category-link">hair gel</a>
              <a href="#" class="footer-category-link">hair colors</a>
              <a href="#" class="footer-category-link">hair dye</a>
              <a href="#" class="footer-category-link">sunscreen</a>
              <a href="#" class="footer-category-link">skin loson</a>
            </div>

          </div>

        </div> */}

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

export default Main;
