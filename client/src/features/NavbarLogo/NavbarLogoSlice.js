import { createSlice } from '@reduxjs/toolkit';
 

const slice = createSlice({
    name: 'user',
    initialState: {value : "LOGO"},
    reducers: {
        changeLogoSign: (state, action) => {
            state.value = action.payload.value;
            console.log(`NEW STATE : ${state.value}`)
        },

    },
    

   
});
export const {changeLogoSign} = slice.actions;
export default slice.reducer 

 