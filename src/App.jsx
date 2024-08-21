import React, { useMemo, useState } from "react";

const App = () => {
  const [weights, setweight] = useState(60);
  const [heights, setHeight] = useState(170);
  function weight(e) {
    setweight(e.target.value);
  }
  function height(e) {
    setHeight(e.target.value);
  }
  const output = useMemo(() => {
    const calheight = heights / 100;
    return (weights / (calheight * calheight)).toFixed(1);
  }, [heights, weights]);
  return (
    <>
      <div className="flex flex-col items-center bg-gray-300 min-h-screen p-8 ">
        <div className="mb-9 bg-violet-400 p-9 rounded-xl shadow-xl">
          <h1 className="text-5xl font-bold text-white">BMI Calculator</h1>
        </div>
        <div className="mb-8 p-6 bg-gray-200 w-96 items-center text-center rounded-lg shadow-md">
          <p className="text-lg mb-4">Weight: {weights} kg</p>
          <input
            className="w-full mb-6"
            type="range"
            min={50}
            max={120}
            value={weights}
            onChange={weight}
          />
          <p className="text-lg mb-4">Height: {heights} cm</p>
          <input
            className="w-full mb-6"
            type="range"
            min={100}
            max={200}
            value={heights}
            onChange={height}
          />
        </div>
        <div className="text-2xl font-semibold bg-gray-200 text-violet-500 p-3 shadow-lg rounded-lg">
          Your BMI is: {output}
        </div>
      </div>
    </>
  );
};

export default App;
