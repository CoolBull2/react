import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/tood/totoSlice'

export const store = configureStore({
    reducer : todoReducer
})