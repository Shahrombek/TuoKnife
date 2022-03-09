import * as t from "../types/types";
import {SET_ADMIN_PRODUCTS_CATIGORY} from "../types/types";
import {sendProducts} from "../actions/doing";

const initialState = {
    products: {
        kitchen: [
            {
                id: Math.random().toString(),
                nums: 1,
                completed: false,
                title: " Knight light C653",
                img: "./images/knifes/image16.svg",
                price: 109000,

            },
            {
                id: Math.random().toString(),
                nums: 1,
                completed: false,
                title: "Нож классного  Knight C653",
                img: "./images/knifes/image15.svg",
                price: 139000,
            },
            {
                id: Math.random().toString(),
                title: "Складной нож SQ01-B",
                nums: 1,
                completed: false,
                img: "./images/knifes/image16.svg",
                price: 149000,
            },
            {
                id: Math.random().toString(),
                title: "Складной нож JJ001-TUO-B",
                nums: 1,
                completed: false,
                img: "./images/knifes/image15.svg",
                price: 99000,
            },
            {
                id: Math.random().toString(),
                title: "Складной нож SQ01-B",
                nums: 1,
                completed: false,
                img: "./images/knifes/image16.svg",
                price: 119000,
            },
            {
                id: Math.random().toString(),
                title: "Складной нож SQ01-B",
                nums: 1,
                completed: false,
                img: "./images/knifes/image15.svg",
                price: 109000,
            },
            {
                id: Math.random().toString(),
                title: "Складной нож SQ01-B",
                nums: 1,
                completed: false,
                img: "./images/knifes/image16.svg",
                price: 129000,
            },
            {
                id: Math.random().toString(),
                title: "Складной нож SQ01-B",
                nums: 1,
                completed: false,
                img: "./images/knifes/image16.svg",
                price: 159000,
            }
            ,
        ],
        fightKnife: [
            {
                id: Math.random().toString(),
                nums: 1, completed: false,
                title: "Нож классного качества Knight light C653",
                img: "./images/knifes/image15.svg",
                price: 139000,

            },

        ],
        knifeTools: [
            {
                id: Math.random().toString(),
                nums: 1, completed: false,
                title: "Нож классного качества Knight light C653",
                img: "./images/knifes/image15.svg",
                price: 79000,

            },
            {
                id: Math.random().toString(),
                nums: 1, completed: false,
                title: "Нож классного качества Knight light C653",
                img: "./images/knifes/image15.svg",
                price: 89000,
            },

        ],
        kitchenTools: [
            {
                id: Math.random().toString(),
                nums: 1, completed: false,
                title: "Нож классного качества Knight light C653",
                img: "./images/knifes/image15.svg",
                price: 199000,

            },
            {
                id: Math.random().toString(),
                nums: 1, completed: false,
                title: "Нож классного качества Knight light C653",
                img: "./images/knifes/image15.svg",
                price: 149000,
            },
            {
                id: Math.random().toString(),
                title: "Складной нож SQ01-B",
                nums: 1, completed: false,
                img: "./images/knifes/image15.svg",
                price: 159000,
            },

        ]


    },

    getBasket: []
    ,
    sendProducts: [],

    admin: { 
        email: 'shahromfozilov02@gmail.com',
        password: '12345',
    },
};

const productsReducer = (state = initialState, action) => {
    let oldTProduct;

    switch (action.type) {
        case t.GET_PRODUCTS:
            return {
                ...state
            }
        case t.SEND_PRODUCTS:
            return {
                ...state, sendProducts: [...state.sendProducts, {...action.payload}]

            }

//----------------------------------------------------------------------------------------------

// savatga qushilgan mahsulot
        case t.ADD_BASKET:
            const index = state.getBasket.findIndex((el) => el.id === action.payload.id);
            if (index === -1) {
                return {
                    ...state, getBasket: [...state.getBasket, {...action.payload}]
                }
            }

            return state

//-----------------------------------------------------------------------------------------------

// bu optiondan tanlaganda uni narxi shunchaga ortishi uchun edit qiladi


        case t.EDIT_BASKET:
            const basketArr = [...state.getBasket];
            basketArr[action.payload.index] = action.payload.data;
            return {
                ...state,
                getBasket: basketArr,
            };
//--------------------------------------------------------------------------------------------------

        case t.SET_ADMIN_PRODUCTS:
            const oldProduct = state.products
            return {
                ...state,
                products: {...state.products, kitchen: [...state.products.kitchen, {...action.payload}]}

            }





// savatdagi mahsulotni o'chirish
        case t.REMOVE_BASKET:
            oldTProduct = [...state.getBasket];
            oldTProduct.splice(action.payload, 1);
            return {
                ...state,
                getBasket: [...oldTProduct],
            };
        default:
            return state

    }

};


export default productsReducer;
