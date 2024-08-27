import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../page/counter/counterSlice";

// configureStore()：封装了createStore，简化配置项，提供一些现成的默认配置项。
// 它可以自动组合 slice 的 reducer，可以添加任何 Redux 中间件，
// 默认情况下包含 redux-thunk，并开启了 Redux DevTools 扩展。
const store =  configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
