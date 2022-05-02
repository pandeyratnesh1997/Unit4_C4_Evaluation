// use axios for api call
import axios from "axios";
import {GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCUESS,GET_REQUEST_ERROR} from './actionTypes';
function getProductsData(dispatch) {
    dispatch({
        type : GET_PRODUCTS_REQUEST,
    });
     try {
        let res = axios.get("https://movie-fake-server.herokuapp.com/products");
        let data =  res.data;
        dispatch({
            type : GET_PRODUCTS_SUCCUESS,
            payload : data,
        })
     } catch (error) {
         dispatch({
             type : GET_REQUEST_ERROR
         })
     }
}

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
