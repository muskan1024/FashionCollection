import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./slices/SearchSlice";

const Store = configureStore({
    reducer:{
        search: SearchSlice
    }
});
export default Store;