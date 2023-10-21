import { useState } from "react";

const computeInitialValue = () => {
  console.log("call computeInitialValue");
  return 200;
};

class Test {}

// stateの初期値を関数で返した時の挙動確認用コンポーネント
//  関数を読んで渡すと再レンダリングの度に関数が呼ばれる
//  関数をそのまま渡すと再レンダリングされても関数は呼ばれない
export const StateTestComponent = () => {
  const [value, setValue] = useState(computeInitialValue());
  // const [value, setValue] = useState(computeInitialValue);

  const [trigger, setTrigger] = useState(false);

  console.log("render state test component");

  return (
    <div
      style={{
        border: "1px solid lightgray",
        padding: "10px",
        width: "fit-content",
      }}
    >
      state test component
      <button
        style={{ padding: "8px 16px", display: "block" }}
        onClick={() => setTrigger(!trigger)}
      >
        re-render this component
      </button>
    </div>
  );
};
