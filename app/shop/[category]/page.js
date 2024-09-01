'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Corrected import
import { useRouter  } from 'next/navigation'; // Ensure this is also updated
import { request } from 'graphql-request';

const CategoryPage = ({params}) => {
	const [products, setProducts] = useState([]);
	const router = useRouter(); // Get router instance
	const { category } = params // Access category from query

	console.log(category);
	useEffect(() => {
		const fetchSneakers = async () => {
			if (!category) return; // Ensure category is defined before fetching
			const { shoes } = await request(
				"https://ap-south-1.cdn.hygraph.com/content/cm0gnjrf900p107wcsvob8ct6/master",
				`
         { 
            shoes(where: {category: {slug: "${category}"}}, first: 50) {
					id
					name
					price
					slug
					image {
					  url
					}
					category {
						slug
					 }
				 }
         }
       `
			);

			setProducts(shoes);
		};
		fetchSneakers();
	}, [category]);

	return (
		<div className="container">
			<button className="back-btn btn" onClick={() => router.back()}>
				Back
			</button>
			<div className="page-title">
				<h2>
					{category}
					<span>.</span>
				</h2>
			</div>
			<div className="products">
				{products.map((product) => (
					<div key={product.id} className="product">
						<img src={product.image.url} className="product-img" alt="" />
						<div className="product-content">
							<div className="flex-row">
								<Link href={`/shop/${product.category.slug}/${product.slug}`}> {/* Updated Link usage */}
									<h3>{product.name}</h3>
								</Link>
								<p className="price">${product.price}</p>
							</div>
							<button className="btn">
								Add to Cart
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryPage;