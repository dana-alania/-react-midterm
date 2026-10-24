import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Midterm Calculator App</h1>
      <p>Student: Dana Alania</p>
      <p>Application Version: 2.0</p>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <button
          onClick={handleAdd}
          style={{ marginRight: "10px", padding: "6px 12px" }}
        >
          Add
        </button>
        <button onClick={handleSubtract} style={{ padding: "6px 12px" }}>
          Subtract
        </button>
      </div>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
