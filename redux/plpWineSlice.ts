import { ProductType } from "@/type/productType";
import { createSlice } from "@reduxjs/toolkit";

interface StoreState{
    productData:ProductType[]
}
const initialState:StoreState = {
    productData:[]
}
export const plpWineSlice = createSlice({
    name: "plpWine",
    initialState,
    reducers: {
        addtoCart: (state,action) => {
            const exitProduct = state.productData.find((item: ProductType) => 
                item._id === action.payload._id
            );
            if (exitProduct) {
                exitProduct.quantity += action.payload.quantity;
                exitProduct.totalPrice = exitProduct.isDiscount ? (exitProduct.originalPrice -
                    exitProduct.originalPrice *
                    (exitProduct.discountPercentage / 100)) * exitProduct.quantity : exitProduct.originalPrice * exitProduct.quantity;
            } else {
                action.payload.totalPrice = action.payload.isDiscount ? (action.payload.originalPrice -
                    action.payload.originalPrice *
                    (action.payload.discountPercentage / 100)) * action.payload.quantity : action.payload.originalPrice * action.payload.quantity;
                state.productData.push(action.payload)
            }
        },
        increaseQty: (state, action) => {
            const exitProduct = state.productData.find((item: ProductType) => 
                item._id === action.payload._id
            )
            exitProduct && exitProduct.quantity++;
            if (exitProduct) {
                exitProduct.totalPrice = exitProduct.isDiscount ? (exitProduct.originalPrice -
                    exitProduct.originalPrice *
                    (exitProduct.discountPercentage / 100)) * exitProduct.quantity : exitProduct.originalPrice * exitProduct.quantity;
            }
        },
        decreaseQty: (state, action) => {
            const exitProduct = state.productData.find((item: ProductType) => 
                item._id === action.payload._id
            );
            if (exitProduct?.quantity ===1 ) {
                exitProduct.quantity === 1;
            } else {
                exitProduct && exitProduct.quantity--;
                exitProduct && action.payload.price;
            }
            if (exitProduct) {
                exitProduct.totalPrice = exitProduct.isDiscount ?
                    exitProduct.totalPrice! -(exitProduct.originalPrice -
                    exitProduct.originalPrice *
                        (exitProduct.discountPercentage / 100)) :
                    exitProduct.totalPrice! - exitProduct.originalPrice;
            }
        },
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter((item)=>item._id !== action.payload)
        },
        resetCart: (state) => {
            state.productData = [];
        }
    }
})
export const { addtoCart,increaseQty,decreaseQty,deleteProduct,resetCart } = plpWineSlice.actions;
export default plpWineSlice.reducer;