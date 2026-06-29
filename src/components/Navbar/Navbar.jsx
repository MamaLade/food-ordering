import "./Navbar.css";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        🍕 PizzaFox
      </div>

      <ul className="menu">
        <li>Trang chủ</li>
        <li>Thực đơn</li>
        <li>Khuyến mãi</li>
        <li>Liên hệ</li>
      </ul>

      <div className="actions">
        <div className="cart">
          <FaShoppingCart />
          <span>{cartCount}</span>
        </div>

        <FaUserCircle className="user-icon" />
      </div>
    </nav>
  );
}

export default Navbar;