'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Add this import statement

import { request } from 'graphql-request';

const Shop = () => {
	const [products, setProducts] = useState([]);

	const router = useRouter();

	useEffect(() => {
		const fetchSneakers = async () => {
			const { shoes } = await request(
				"https://ap-south-1.cdn.hygraph.com/content/cm0gnjrf900p107wcsvob8ct6/master",
				`
         { 
            shoes(first: 50) {
				id
				name
				  slug
				price
				category {
                name
			   id
               slug
			}
				image {
					url
				}
			}
         }
       `
			);
			setProducts(shoes);
		};
		fetchSneakers();
	}, []);

	return (
		<div className="container">
			<button className="back-btn btn" onClick={() => router.push('/')}>
				Back
			</button>
			<div className="page-title">
				<h2>
					Shop<span>.</span>
				</h2>
			</div>
			<div className="products">
				{products.map((product) => (
					<div key={product.id} className="product">
						<img src={product.image.url} className="product-img" alt="" />
						<div className="product-content">
							{console.log(product)}
							<div className="flex-row">
								<Link href={`/shop/${product.category?.slug}/${product?.slug}`}>
									<h3>{product.name})</h3>
								</Link>
								<p className="price">${product.price}</p>
							</div>
						
							<button
								className="snipcart-add-item btn"
								data-item-id={product.id}
								data-item-price={product.price}
								data-item-image={product.image.url}
								data-item-name={product.name}
							>
								Add to Cart
							</button>
							{/* <button className="btn">
								Add to Cart
							</button> */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Shop;