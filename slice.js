import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state, action) => {
            state.push(action.payload);
        },
    },
});

// store
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

console.log("onCreateStore: ", store.getState());

//subscription
store.subscribe(() => {
    console.log("STORE CHANGE: ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 10 }));