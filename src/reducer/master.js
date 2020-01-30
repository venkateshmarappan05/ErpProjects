import { 
  //CATEGORY_LIST, 
  BRAND_LIST,
 // CUSTOMER_LIST
} from 'action/master';

const initialState = {
  categoryList: [],
  brandList:[]
}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
      // case CATEGORY_LIST: {
      //   return {...state, categoryList: action.data }
      // } 
     // break; 
      case BRAND_LIST: {
        return {...state, brandList: action.data }
      } 
      break; 
      // case CUSTOMER_LIST: {
      //   return {...state, customerList: action.data }
      // } 
      // break; 
    default:
      return state;
    }
}