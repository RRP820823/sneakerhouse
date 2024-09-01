'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Change to useRouter

import { request } from 'graphql-request';

import './index.css';

const SingleProduct = ({ params }) => {
	const [product, setProduct] = useState(null);
	const router = useRouter(); // Use useRouter instead

	console.log( "router" ,router.query);
	const { slug, category } = params; // Get slug and category from router.query

	useEffect(() => {
		const fetchProduct = async () => {
			const { shoe } = await request(
				"https://ap-south-1.cdn.hygraph.com/content/cm0gnjrf900p107wcsvob8ct6/master",
				`
		{ 
			shoe(where: {slug: "${slug}"}) {
				id
				name
				price
				description
				image {
				  url
				}
			 }
		}
	 `
			);
			setProduct(shoe);
		};
		fetchProduct();
	}, [slug]);

	return (
		<div className="container">
			<button className="back-btn btn" onClick={() => router.push("/")}>
				Back
			</button>
			<div className="single-product-container">
				<div className="page-title">
					<h2>
						{category}
						<span>.</span>
					</h2>
					{product && (
						<div className="product-container">
							<div className="product-img">
								<img src={product.image.url} alt="" />
							</div>
							<div className="product-info">
								<h3 className="product-title">{product.name}</h3>
								<p className="product-price">${product.price}</p>
								<p className="product-description">{product.description}</p>
								<button className="btn">
									Add to Cart
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
