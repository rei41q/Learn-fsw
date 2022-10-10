import { useState } from "react";

const Counting2 = (props) => {
  const [count, setCount] = useState(props.startNumber);
  const [merdeka, setMerdeka] = useState(true);

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <div>Counting 2</div>
      <div>{count}</div>
      <div>{merdeka.toString()}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          setMerdeka(!merdeka);
        }}
      >
        Tambah
      </button>
    </div>
  );
};

export default Counting2;
