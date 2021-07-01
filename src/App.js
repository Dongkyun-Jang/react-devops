import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

export default function App() {
  const { count } = useSelector((state) => state.counter); // 여기서 state는 store.js의 reducer 객체를 의미한다.
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The Count is : {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment specific amount
      </button>
    </div>
  );
}
