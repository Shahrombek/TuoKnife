import {combineReducers} from "redux";
import productsInfo from "./productsInfo";




 const reducers =combineReducers({
    allProducts:productsInfo,
})

export default reducers


