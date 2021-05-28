import {configureStore} from '@reduxjs/toolkit';
import NavbarLogoSlice from '../features/NavbarLogo/NavbarLogoSlice';



export const store = configureStore({
reducer : {
    navbar : NavbarLogoSlice
}
})