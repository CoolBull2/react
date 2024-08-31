import { useState } from "react";

function App() {
  let [color, setColor] = useState("white");
  let setBlue = () => {
    setColor("blue");
  };
  let setPurple = () => {
    setColor("purple");
  };
  let setGreen = () => {
    setColor("green");
  };
  return (
    <>
      <div className="h-screen w-full" style={{ backgroundColor: color }}>
        <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="bg-red-400 outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => {
                setColor("red");
              }}
            >
              Red
            </button>
            <button
              className="bg-blue-400 outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={setBlue}
            >
              Blue
            </button>
            <button
              className="bg-purple-400 outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={setPurple}
            >
              Purple
            </button>
            <button
              className="bg-green-400 outline-none px-4 py-1 rounded-full text-white shadow-lg  "
              onClick={setGreen}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
