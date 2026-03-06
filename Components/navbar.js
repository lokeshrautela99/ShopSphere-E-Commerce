const navbar = () => {
    return `
    <div class="upperNav">
            <div class="burgerMenu">
                <img class="burgerLogo" src="./images/Navbar/SideBarImg.PNG" alt="">
            </div>
            <div class="burgerSlider">
                <button class="closed">x</button>
                <a class="slider_brand"  href="index.html"><h1 id="slider_brand">ShopSphere</h1></a>
                <div id="option">
                    <div id="optAcc">
                            <a id="sidebarAcc" href="account.html"> <img src="./images/Navbar/accountUser.png" alt="">
                            </img> <p id="sidebarUserName"> Account</p> </a>
                    </div>
                    <div id="optLogin">
                        <a  id="loginSidebar" href="login.html"> 
                            <img src="./images/Navbar/accountUser.png" alt=""> <p>Login</p></a>
                    </div>

                    <div id="opt-3">
                        <a class="sidebar-link" href="index.html">Home</a>
                        <a class="sidebar-link" href="fashion.html">Fashion</a>
                        <a class="sidebar-link" href="electronics.html">Electronics</a>
                        <a class="sidebar-link" href="books.html">Books</a>
                        <a class="sidebar-link" href="homeDecor.html">HomeDecor</a>
                        <a class="sidebar-link" href="about.html">About Us</a>
                        <a class="sidebar-link" href="contact.html">Contact Us</a>
                        <a class="sidebar-link" href="privacy.html">Privacy Policy</a>
                        <a class="sidebar-link" href="registration.html">Registration</a>
                    </div>
                </div>
                <!-- option closed  -->

                <div id="burger-footer">
                    <p>&copy; 2024 ShopSphere. All rights reserved.</p>
                </div> 
                
                <!-- burger footer closed  -->

            </div>
            <!-- burger menu closed  -->

            <div class="brandLogo">
                <a href="index.html">ShopSphere</a>
            </div>
        
            <div class="catDiv">
                <p>Categories</p>
            </div>

                <div class="searchBar">
                    <input type="text" name="search" class="query" placeholder="Search by Categories, Brand...">
                    <button class="searchBtn">Search</button>
                </div>
           

            <div class="navPageDiv">
            <div>
                <a href="login.html">
                    <img class="accountImg" src="./images/Navbar/accountImg.svg" alt="">
                </a>
            </div>
            <div>
                <a href="wishlist.html">
                    <img class="wishlist" src="./images/Navbar/heartIMg.svg" alt="">
                </a>
            </div>
            <div>
                <a href="cart.html">
                    <img class="cartImg" src="./images/Navbar/cartLogo.png" alt="">
                </a>
                <span class="cartCount"></span>
            </div>
            
            </div>

        </div>
        <!-- upperNav Closed Here  -->
        <div class="lowerNav">
            <div class="lowerNavDiv">

            <div class="dropdown">
                <a href="fashion.html">Fashion</a>
                <div class="dropdown-content">
                    <a href="men.html">Men</a>
                    <a href="women.html">Women</a>
                    <a href="kid.html">Kid</a>
                    <a href="accessories.html">Accessories</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="electronics.html">Electronics</a>
                <div class="dropdown-content">
                    <a href="mobile.html">Mobile Phones</a>
                    <a href="headphone.html">Headphones</a>
                    <a href="laptop.html">Laptop</a>
                    <a href="gaming.html">Gaming Console</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="books.html">Books</a>
            </div>
            <div class="dropdown">
                <a href="homeDecor.html">Home Decor</a>
            </div>

        </div>
        <!-- lowerNavDiv closed here  -->
        </div>
        <!-- lowerNav Closed here  -->
    `;
};
export default navbar;