import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  return (
    <>
      <div>
        <div className="text-center mt-20 space-y-4">
          <h2 className="text-2xl ">
            Counter with Redux: <span className="text-blue-400"> {count}</span>
          </h2>
          <div className="flex gap-3 justify-center">
            <button className="btn" onClick={() => handleIncrement(1)}>
              Increment
            </button>
            <button className="btn" onClick={() => handleIncrement(5)}>
              Increment by 5
            </button>
          </div>

          <div className="flex justify-center gap-3">
            <button className="btn" onClick={() => handleDecrement(3)}>
              Decrement by 3
            </button>
            <button className="btn" onClick={() => handleDecrement(1)}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
