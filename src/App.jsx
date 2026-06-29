import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />

      <h1>Restaurant Ordering System</h1>

      <h2>Bàn số 12</h2>

      <p>Chào mừng bạn đến với nhà hàng.</p>

      <button>🍔 Burger</button>
      <button>🍕 Pizza</button>
      <button>🥤 Đồ uống</button>
    </div>
  );
}

export default App;