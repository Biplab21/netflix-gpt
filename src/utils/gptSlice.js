import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggleGPTsearchView: (state)=>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export const {toggleGPTsearchView} = gptSlice.actions

export default gptSlice.reducer