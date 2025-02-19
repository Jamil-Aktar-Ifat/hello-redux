import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div>
        <div className="text-center mt-20 space-y-4">
          <h2 className="text-2xl underline">Counter with Redux</h2>
          <button className="btn" onClick={handleIncrement}>
            Increment
          </button>
          <div>0</div>
          <button className="btn" onClick={handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
