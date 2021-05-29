import { createSlice } from '@reduxjs/toolkit';
import { StaticRouter } from 'react-router';
 

const slice = createSlice({
    name: 'user',
    initialState: {value : "LOGO",show:true},
    reducers: {
        changeLogoSign: (state, action) => {
            console.log("Logo changed")
            state.value = action.payload.value;
        
        },
        showNavbar : (state,action)=>{
            state.show = action.payload.show;
        }

    },
    

   
});
export const {changeLogoSign,showNavbar} = slice.actions;
export default slice.reducer 

 