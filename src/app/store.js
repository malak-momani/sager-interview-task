import { configureStore } from "@reduxjs/toolkit";
import dronesReducer from "../app/slices/dronesSlice"


const store = configureStore({
    reducer: {
        drones: dronesReducer,
    }
});

export default store;