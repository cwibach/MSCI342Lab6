import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.js';

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
