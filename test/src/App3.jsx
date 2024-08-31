import React, { useEffect, useState } from "react";

export default function App3() {
  const [data, setData] = useState("");
  const [isvalid, setIsvalid] = useState(false);

  useEffect(() => {
    if (data === "") setIsvalid(false);
    else setIsvalid(true);
  }, [data]);

  return (
    <>
      <input
        type="text"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <div>{isvalid ? "data is valid" : "Not valid"}</div>
    </>
  );
}
