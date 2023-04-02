import React from "react";
import { Link } from "react-router-dom";

export default function MainHome() {
  return <div>
    <Link to={'/user/login'}>User</Link>
    <Link>Admin</Link>
  </div>;
}
