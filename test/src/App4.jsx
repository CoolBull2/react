import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [len, setLen] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*(){}[]";

    for (let i = 0; i < len; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPass(pass);
  }, [num, char, len]);

  useEffect(() => {
    passGen();
  }, [passGen]); // Pass `passGen` as a dependency to `useEffect`

  const passref = useRef(null);

  const copypass = useCallback(() => {
    passref.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  return (
    <div>
      <input type="text" value={pass} ref={passref} readOnly />
      <button onClick={copypass}>Copy</button>
      <input type="range" min={8} max={100} value={len} onChange={(e) => setLen(e.target.value)} />
      <input type="checkbox" checked={num} onChange={() => setNum(!num)} /> Numbers
      <input type="checkbox" checked={char} onChange={() => setChar(!char)} /> Characters
    </div>
  );
}

export default App;
