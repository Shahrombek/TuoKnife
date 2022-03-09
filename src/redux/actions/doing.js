import { dispatch } from "../store";
import * as t from '../types/types';

export const getProducts = (productsIndex, taskIndex) => {
  dispatch({ type: t.GET_PRODUCTS });
};
export const getAdminProductsCatigory = ( nameCatigory) => {
  dispatch({ type: t.SET_ADMIN_PRODUCTS_CATIGORY });
};

export const addBasket = (productsIndex, taskIndex) => {
  dispatch({ type: t.ADD_BASKET, payload: { productsIndex, taskIndex } });
};
export const removeBasket = (productsIndex, taskIndex) => {
  dispatch({ type: t.REMOVE_BASKET, payload: { productsIndex, taskIndex } });
};

export const sendProducts = (data, userData,) => {
  dispatch({ type: t.SEND_PRODUCTS, payload: {data, ...userData} });
};
export const setAdminProducts = (setData) => {
  dispatch({ type: t.SET_ADMIN_PRODUCTS, payload: {...setData} });
};

