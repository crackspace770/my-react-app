import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';


const addToCart = createAction("ADD_TO_CART");

// reducer
const cartReducer = createReducer([], (builder) => { 
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
});

// Define other actions and reducers as needed, for example:
const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({status:false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
});

// store
const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer,  // include loginReducer if needed
    },
});

// Subscribe
store.subscribe(() => {
    console.log("STORE CHANGE: ", store.getState());
});

// Dispatch action
store.dispatch(addToCart({ id: 2, qty: 10 }));
store.dispatch(login());
