import { useContext } from "react";
import { CountContext } from "./context";
import { useRecoilValue, useRecoilState, RecoilRoot, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

//! -----------------------------

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <Text />
    </div>
  );
}

//! -----------------------------

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>{count}</div>;
}

//! -----------------------------

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  // const [count, setCount] = useRecoilState(countAtom);
  // Both of them can be used

  return (
    <div>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

const Text = () => {
  const count = useRecoilValue(countAtom);
  return <div>
    {count % 2 === 0 ? 'It is Even' : 'It is Odd'}
  </div>;
}

export default App;