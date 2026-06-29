import "./FoodCard.css";

function FoodCard({
  emoji,
  name,
  price,
  rating,
  addToCart,
}) {
  return (
    <div className="food-card">
      <div className="food-image">
        {emoji}
      </div>

      <h3>{name}</h3>

      <p>⭐ {rating}</p>

      <h2>{price.toLocaleString()}đ</h2>

      <button onClick={addToCart}>
        + Thêm vào giỏ
      </button>
    </div>
  );
}

export default FoodCard;