# ShopSphere - Responsive E-Commerce Website

ShopSphere is a responsive and feature-rich e-commerce website, designed to offer a seamless shopping experience for users. Users can browse products, manage their cart and wishlist, filter, sort, apply discounts, and register for an account to enhance their shopping experience.

# Features

Responsive Design: Optimized for all screen sizes using Tailwind CSS, offering a consistent experience across devices.

Product Search: Search products by title or brand name for quick navigation.

Product Filtering: Filter products by categories such as clothing, accessories, electronics, etc.

Product Sorting: Sort products by price to make shopping easier and quicker.

Wishlist Management: Add products to the wishlist for future reference or potential purchase.

Cart Management: Add products to the cart, manage selected items, and apply discounts at checkout.

Discounts: Apply discounts to cart items for promotional offers or sales.

User Authentication: Login/signup functionality for personalized shopping, including wishlist and cart persistence across sessions.

# Tech Stack

HTML: Structure of the website.

Tailwind CSS: Styling for responsive design and layout.

JavaScript: Dynamic interactions such as search, sorting, filtering, cart, and wishlist management.

JSON-server:Simulated backend to handle product, wishlist, cart, and user data.

Setup Instructions

Clone the Repository:

git clone https://github.com/lokeshrautela25/ShopSphere-E-Commerce.git

Navigate to the project directory:

cd ShopSphere-E-Commerce

Install JSON-server (if not already installed)

Copy code: npm install -g json-server

Start the JSON-server:

Copy code: json-server --watch db.json

This will simulate the backend and serve product data.

Open index.html in your browser: Use a local server such as Live Server in VSCode for a live experience, or open the file directly in your browser.

# Project Structure

ShopSphere/

tailwind.css                         # Tailwind CSS file for styles.

Scripts                              # JavaScript file for website functionality.

db.json                              # JSON-server mock data for products.

images                               # Images used for products and layout.

index.html                           # Main landing page.

categories                           # Categories Pages displaying all products.

wishlist.html                        # Add products to the wishlist for future purchases.

cart.html                            # Page for managing the cart and discounts.

# Functionality Overview

Search: Search for products by title or brand name using the search bar, and results will be updated dynamically.

Filter: Choose a category from the filter dropdown to view specific product types.
Sort: Use the sort functionality to sort products by price in ascending or descending order.

Wishlist: Add products to the wishlist for future purchases.

Cart Management: Add items to the cart, view and manage selected products, and apply discounts at checkout.

Discounts: Discounts can be applied to the cart total during checkout.

Login/Signup: Users can create accounts, log in, and manage their wishlist and cart persistently across sessions.

# Future Enhancements

Payment Gateway: Integrate payment processing for seamless transactions.

Order History: Implement order tracking and history for registered users.

Product Reviews: Enable users to leave reviews and ratings on products.

# Author
Lokesh Rautela
Full Stack Developer