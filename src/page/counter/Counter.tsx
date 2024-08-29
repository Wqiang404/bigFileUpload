import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  increment,
  decrement,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";

function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Counter</h2>
      <h2>count {count}</h2>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementIfOdd(2))}
        >
          Increment IfOdd
        </button>
      </div>
    </div>
  );
}

export default Counter;
