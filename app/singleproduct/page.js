// import { useNavigate } from 'react-router-dom';
'use client'

import { useRouter } from 'next/navigation';
let  nike1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v_-rgMZEscxGwtPAQL3O1xsg-wcEl8Q_0w&s"
import './index.css';


const SingleProduct = () => {
	const router = useRouter()

	return (
		<div className="container">
            
			<button className="back-btn btn" onClick={() => router.push('/')}>
				Back
			</button>
			<div className="single-product-container">
				<div className="page-title">
					<h2>
						Nike
						<span>.</span>
					</h2>
					<div className="product-container">
						<div className="product-img">
							<img src={nike1} alt="" />
						</div>
						<div className="product-info">
							<h3 className="product-title">NIKE AIR</h3>
							<p className="product-price">$213</p>
							<p className="product-description">
								The Air Jordan 1 Retro High OG ‘Stage Haze’ features neutral
								tones on the foundational sneaker that started it all. The upper
								combines a white leather base with a grey suede heel overlay and
								a forefoot overlay in cracked black leather.
							</p>
							<button className=" btn">Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
