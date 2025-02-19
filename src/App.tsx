import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div>
        <div className="text-center mt-20 space-y-4">
          <h2 className="text-2xl underline">Counter with Redux</h2>
          <button className="btn" onClick={() => handleIncrement(1)}>
            Increment
          </button>
          <button className="btn" onClick={() => handleIncrement(5)}>
            Increment by 5
          </button>
          <div>{count}</div>
          <button className="btn" onClick={handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
