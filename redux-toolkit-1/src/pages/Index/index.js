import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, change } from "../../redux/slice/counterSlice";

function Index() {
  const currenctCounter = useSelector((state) => {
    console.log(">> STATE", state);

    return state.storeCounter.counterState;
  });

  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="col-12">
        Counter: {currenctCounter}
        <button
          className="btn btn-primary"
          onClick={(e) => {
            console.log(">> INCREMENT ACTION RESULT", increment());
            dispatch(increment());
          }}
        >
          Increase
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            console.log(">> DECREMENT ACTION RESULT", decrement());
            dispatch(decrement());
          }}
        >
          Decrease
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            console.log(
              ">> CHANGE ACTION RESULT",
              change({
                foo: "foo",
                bar: "bar",
              })
            );
            dispatch(change(5));
          }}
        >
          Change
        </button>
      </div>
    </div>
  );
}

export default Index;
