import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";

const store = createStore(rootReducer)

export default store;
