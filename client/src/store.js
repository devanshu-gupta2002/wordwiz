import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./reducers/authReducer"

const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

console.log(store.getState())

export default store