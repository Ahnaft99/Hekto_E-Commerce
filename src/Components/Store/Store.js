import { configureStore } from "@reduxjs/toolkit"
import  ProductReducer  from "../Slice/ProductSlice"


export const Store = configureStore({
    reducer:{
        product: ProductReducer
    }
})