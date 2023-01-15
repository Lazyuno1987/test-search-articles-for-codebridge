import { configureStore } from '@reduxjs/toolkit'
import articleReducer from './articles/articles-slice'
import { contactsFilterSlice } from './filterSlice'


export const store = configureStore({
    reducer: {
        articles: articleReducer,
        filter: contactsFilterSlice.reducer,
    }
})