import { configureStore } from '@reduxjs/toolkit'; // Fix the typo here
import todoReducer from '../features/todoSlice'; // Ensure the path is correct

export const store = configureStore({
    reducer:  todoReducer
});
