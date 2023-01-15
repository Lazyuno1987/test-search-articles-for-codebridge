import { createSlice } from '@reduxjs/toolkit'
import {getArticles, getArticlesBySearch} from './articles-operations'

const initialState = {
    articles: [],
    isLoading: false,
    error:''
}


const articleSlice = createSlice({
    name: 'articles',
    initialState,
    extraReducers: {
        [getArticles.pending]: state => {
            state.isLoading = true;
        },
        [getArticles.fulfilled]: (state, { payload }) => {
            state.articles = payload;
            state.isLoading = false;
        },
        [getArticles.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        },
        [getArticlesBySearch.pending]: state => {
          state.isLoading = true;
        },
          [getArticlesBySearch.fulfilled]: (state, {payload}) => {
         state.articles = payload;
        state.isLoading = false;
        },
          [getArticlesBySearch.pending]: (state, {payload}) => {
           state.isLoading = false;
            state.error = payload
        },
    }
})


export default articleSlice.reducer