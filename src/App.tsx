import Navbar from "./components/layout/Navbar";
import { Button } from "./components/ui/button";
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
        <Navbar></Navbar>
        <div className="text-center mt-20 space-y-4">
          <h2 className="text-2xl ">
            Counter with Redux: <span className="text-blue-400"> {count}</span>
          </h2>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => handleIncrement(1)}>Increment</Button>
            <Button onClick={() => handleIncrement(5)}>Increment by 5</Button>
          </div>

          <div className="flex justify-center gap-3">
            <Button onClick={() => handleDecrement(3)}>Decrement by 3</Button>
            <Button onClick={() => handleDecrement(1)}>Decrement</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
