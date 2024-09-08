import React, { useContext } from "react";
import UserContext from "../content/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div className="">please login</div>;
  else return <div>welcome {user}</div>;
}

export default Profile;
