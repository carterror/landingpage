import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpenMenu: false,
    isDark: false,
    language: 'es',

}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {

        resetStateTheme: () => initialState,

        isOpenMenuSet: (state, action) => {
            state.isOpenMenu = action.payload
        },

        isDarkSet: (state, action) => {
            state.isDark = action.payload
        },  
        
        languageSet: (state, action) => {
            state.language = action.payload
        },  
       
    },
})

// Action creators are generated for each case reducer function
export const { resetStateTheme, isOpenMenuSet, isDarkSet, languageSet} = themeSlice.actions

export default themeSlice.reducer