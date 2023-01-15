import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v3/';


export const getArticles = createAsyncThunk('articles/', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('articles/')
        
        
        return data
    } catch (error) {
        return rejectWithValue(alert('Error'));
    }
});

export const getArticlesBySearch = createAsyncThunk('articles/', async (input, { rejectWithValue }) => {
    try {
         const arrTitle = await axios.get(`articles/?title_contains=${input}`)
         const arrSummary =  await axios.get(`articles/?summary_contains=${input}`)
       
        const data = [...arrTitle.data, ...arrSummary.data]

        return data
    } catch (error) {
        return rejectWithValue(alert('Error'));
    }
})
