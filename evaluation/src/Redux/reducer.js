import {GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCUESS,GET_REQUEST_ERROR} from './actionTypes'

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch({type}){
     case GET_PRODUCTS_REQUEST : {
       return {
         ...state,  data: [],
         isLoading: true,
         isError: false,
         filterData: [],
         products: [],
       }
     }

     case GET_REQUEST_ERROR : {
      return {
        ...state,  data: [],
        isLoading: false,
        isError: true,
        filterData: [],
        products: [],
      }
    }
    
    case GET_PRODUCTS_SUCCUESS : {
      return {
        ...state,  data: payload,
        isLoading: false,
        isError: false,
        filterData: [],
        products: [],
      }
    }


    
    default :{
      return {
        ...state,
      }
    }
  }
};
export { reducer };
