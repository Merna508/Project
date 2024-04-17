import { configureStore } from "@reduxjs/toolkit";
import AboutSlice from "./AboutSlice";
import HomeSlice from './HomeSlice'
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = configureStore({
    reducer: {
        about: AboutSlice,
        favor: HomeSlice
    }
})

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import UserSlice from "./AboutSlice";
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const store = configureStore({
//     reducer: {
//         user: UserSlice
//     }
// })

// export default store;