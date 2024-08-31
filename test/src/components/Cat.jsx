import React from "react";
import { useParams } from "react-router-dom";
export default function Cat() {
  const { data } = useParams();
  console.log(data);

  return <div>cat {data}</div>;
}
