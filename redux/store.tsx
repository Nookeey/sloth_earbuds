import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice";
import stepsReducer from "./features/stepsSlice";
import paymentsReducer from "./features/paymentsSlice";
import deliveriesReducer from "./features/deliveriesSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    steps: stepsReducer,
    payments: paymentsReducer,
    deliveries: deliveriesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
