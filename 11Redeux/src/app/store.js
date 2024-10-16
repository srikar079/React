import {configuereStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'

export const store=configuereStore({
    reducer: todoReducer
})