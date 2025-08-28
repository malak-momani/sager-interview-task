// API call

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDrones = createAsyncThunk("drones", 
    async(_, thunkAPI)=> {
        try {
            const res = await fetch("http://localhost:9013/api/v1/hello");
            console.log("Response", res?.data);
            return res?.data;

        } 
        catch(err) {
            return thunkAPI.rejectWithValue(err.response?.data || err.message)
        }
    }
)
const dronesSlice = createSlice({
    name: "drones",
    initialState: {
        data: [],
    },
    reducers: {
        setDroneData: (state, action) => {
            state.data = action.payload;
        },
    },
});
export const { setDroneData } = dronesSlice.actions;
export default dronesSlice.reducer;