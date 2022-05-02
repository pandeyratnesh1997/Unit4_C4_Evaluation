import React, { useEffect } from "react";
import styled from "styled-components";
import { Select } from "./Styled";
import {getProductsData} from '../Redux/actions'
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const {data,isLoading,isError,filterData,products} = useSelector((state)=>state);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
   
    getProductsData(dispatch);


  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
  };
  const Grid = styled.div `
    display : grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto;
    grid-gap : 10px;

  `
  if(isLoading){
    return (<div>Loding...</div>)
  }
  if(isError){
    return (<div>Error : Something went Wrong</div>)
  }
  function productTemp (item){
    <ProductCard
      id = {item.id}
      brand = {item.brand}
      title = {item.title}
      image = {item.image}
      category = {item.category}
      price = {item.price}
    />
  }
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container"  >
        {/* iterate data and show each POroduct card */}
        {data.map(productTemp)}
      </Grid>
    </>
  );
};
