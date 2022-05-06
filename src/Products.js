import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardImg from "./components/CardImg";
import "./Products.css";
import Fade from 'react-reveal/Fade';

const Products = ({ products, data, setProducts, setProduct }) => {
	const [active, setActive] = useState("All");
	const [activeLine, setActiveLine] = useState("All")
	const [sort, setSort] = useState("lowest")
	const [search, setSearch] = useState("")


	const handleSearch = (e) => {
		if(e.target.value == ""){
			setProducts(data)
		}else{
			const filtered = data.filter(item => item.data.name.toLowerCase().includes(e.target.value.toLowerCase()))
			setProducts(filtered)
		}
		setSearch(e.target.value)
	}

	const handleFilter = (active) => {
		if(active === "All"){
			setActiveLine(active)
			setProducts(data)
		}
		else{
			const filtered = data.filter(item => item.data.collection?.toLowerCase().includes(active.toLowerCase()))
			setActiveLine(active)
			setProducts(filtered)
		}
	}

	const handleSort = (sort) => {
		if(sort === "lowest"){
			console.log(sort)
		}
		if(sort === "highest"){}
		if(sort === "A-Z"){}
		if(sort === "Z-A"){}
	}

	return (
		<div className="products">
			<div className="products__sidepanel">
				<div>
					<input value={search} onInput={(e) => handleSearch(e)} className="products__search" placeholder="search" />
				</div>
				<div className="products__categories">
					<div className="products__header">
						<h2>Category</h2>
					</div>
					<div className="products__category">
						<h4 className={`products__text ${activeLine === "All" ? "active" : "" }`} onMouseEnter={() => setActive("All")} onClick={() => handleFilter(active)}>All</h4>
						<h4 className={`products__text ${activeLine === "Office" ? "active" : "" }`} onMouseEnter={() => setActive("Office")} onClick={() => handleFilter(active)}>Office</h4>
						<h4 className={`products__text ${activeLine === "Living Room" ? "active" : "" }`} onMouseEnter={() => setActive("Living Room")} onClick={() => handleFilter(active)}>Living Room</h4>
						<h4 className={`products__text ${activeLine === "Kitchen" ? "active" : "" }`} onMouseEnter={() => setActive("Kitchen")} onClick={() => handleFilter(active)}>Kitchen</h4>
						<h4 className={`products__text ${activeLine === "Bedroom" ? "active" : "" }`} onMouseEnter={() => setActive("Bedroom")} onClick={() => handleFilter(active)}>Bedroom</h4>
						<h4 className={`products__text ${activeLine === "Dining" ? "active" : "" }`} onMouseEnter={() => setActive("Dining")} onClick={() => handleFilter(active)}>Dining</h4>
						<h4 className={`products__text ${activeLine === "Kids" ? "active" : "" }`} onMouseEnter={() => setActive("Kids")} onClick={() => handleFilter(active)}>Kids</h4>
					</div>
				</div>
			</div>

			<div className="products__cards">
				<div className="products__header">
					<h3 className="products__headtext">{products?.length} products found</h3>
					<div className="products--line" />
					<div className="products__sortcon">
						<h2 className="products__sorttext">Sort by</h2>
						<h2 className="products__sort">
							{/* <label for="price">Choose an order</label> */}
							<select name="price" value={sort} onChange={(e) => setSort(e.target.value)}>
								<option value={"lowest"} >Price (Lowest)</option>
								<option value={"highest"} >Price (Highest)</option>
								<option value={"A-Z"} >Name (A - Z) </option>
								<option value={"Z-A"} >Name (Z - A) </option>
							</select>
						</h2>
					</div>
				</div>
				<div className="product__con">
				{products ? products.map((product) => {
					return (
						<Link to={`/products/product`} onMouseEnter={() => setProduct(product)}>
							<div key={product.id} className="products__product" >
								<div className="products__cardCon">
									<CardImg product={product}/>
								</div>
							</div>
						</Link>
					);
				}) : <div>
							Loading
					</div>
				}
				</div>
			</div>

		</div>
	);
};

export default Products;