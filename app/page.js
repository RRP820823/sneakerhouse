import Hero from '../components/hero';

import  '../components/index.css'

// import ShoesCategories from '../components/categories/index'; // Correct import
import Categories from '../components/categories/index';

import Script from 'next/script';
import Head from 'next/head';
export const metadata = {
	title: 'My Page Title',
  }




const Home = () => {
	return (
		
		
		<div>
<Head >
		 <link rel="preconnect" href="<https://app.snipcart.com>" />
		<link rel="preconnect" href="<https://cdn.snipcart.com>" />
		<link
			rel="stylesheet"
			href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
		/>
		   <div
      hidden
      id="snipcart"
      data-api-key="OTM3YWZkYmUtNmM2My00Njk3LWIwYzgtOTQxZDAwZjA4NjcxNjM4NjA3MzA5NjM3NTgzOTAy
"
      data-config-modal-style="side"
      currency="usd"
    ></div>
    <Script
			async
			src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
		></Script>

		</Head>
    
			<div className="container">
				<Hero />
			</div>
			<div className="container new-arrivals-container">
				<h2 className="title">New Arrivals</h2>
				<div className="products">
					<div className="product">
						<img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v_-rgMZEscxGwtPAQL3O1xsg-wcEl8Q_0w&s"} className="product-img" alt="" />
						<div className="product-content">
							<div className="flex-row">
								<h3>Nike Air Max</h3>
								<p className="price">$500</p>
							</div>
							<button className="btn">Add to Cart</button>
						</div>
					</div>

					<div className="product">
						<img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuVQbOWr-sR6kYhdHThBmKGDub2RnBKBSlA&s"} className="product-img" alt="" />
						<div className="product-content">
							<div className="flex-row">
								<h3>Nike Air Max</h3>
								<p className="price">$500</p>
							</div>
							<button className="btn">Add to Cart</button>
						</div>
					</div>

					<div className="product">
						<img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-l6wjWYb689RvvUV6KbtBjd9ODELDYRzEw&s"} className="product-img" alt="" />
						<div className="product-content">
							<div className="flex-row">
								<h3>Nike Air Max</h3>
								<p className="price">$500</p>
							</div>
							<button className="btn">Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
<Categories/>
			</div>
			<div className="contact-card-section">
				<h2>Contact Us</h2>
				<p>
					Having any difficulties? <br /> Send us a mail Now.
				</p>
				<a href="mailto:contact@educative.io" className="btn">Send Mail</a>
			</div>
		</div>
	
	);
};

export default Home;
