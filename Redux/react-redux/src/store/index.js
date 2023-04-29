// import { createStore } from 'redux';

// const reducerFunction = (state = { counter: 10 }, action) => {

//     if(action.type === 'INC'){
//         return { ...state, counter: state.counter + 1 }
//     }

//     if(action.type === 'DEC'){
//         return { ...state, counter: state.counter - 1  >= 0 ? state.counter - 1 : 0}

//     }

//     if(action.type === 'ADD'){
//         return { ...state, counter: state.counter + action.payload}

//     }

//     return state;
// }

// const store = createStore(reducerFunction)

// export default store;



import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0},
    reducers: {
        increment(state, action){
            state.counter++;
        },
        decrement(state, action){
            state.counter--;
        },
        addBy(state, action){
            state.counter += action.payload;
        }
    }
})
export const actions = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;





