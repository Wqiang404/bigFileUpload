import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppThunk } from "../../store/index";

export type CounterState = {
  value: number;
};
const initialState: CounterState = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
    // 并不是真正的改变状态值，因为它使用了 Immer 库
    // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
    // 不可变的状态
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// 选择器等其他代码可以使用导入的 `RootState` 类型
export const selectCount = (state: RootState) => state.counter.value;

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount))
    }
  }

export default counterSlice.reducer;