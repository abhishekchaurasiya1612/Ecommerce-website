import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {token && <Link to="/cart">Cart</Link>}
      {token && <Link to="/orders">Orders</Link>}
      {token && <Link to="/admin">Admin</Link>}

      {!token && <Link to="/login">Login</Link>}
      {!token && <Link to="/register">Register</Link>}

      {token && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

export default Navbar;
