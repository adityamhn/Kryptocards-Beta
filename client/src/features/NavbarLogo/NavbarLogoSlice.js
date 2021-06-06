import { createSlice } from '@reduxjs/toolkit';
import { StaticRouter } from 'react-router';
 

const slice = createSlice({
    name: 'user',
    initialState: {value : "LOGO",show:true},
    reducers: {
        changeNavbarMode: (state, action) => {
          
            state.value = action.payload.value;
            state.show = action.payload.show;
            
        
        }
       

    },
    

   
});
export const {changeNavbarMode} = slice.actions;
export default slice.reducer 

 