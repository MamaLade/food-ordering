import FoodCard from "../FoodCard/FoodCard";
import "../FoodCard/FoodCard.css";

import foods from "../../data/foods";

function FoodList({ addToCart }) {
  return (
    <section className="food-section">
      <h2>Món ăn nổi bật</h2>

      <div className="food-list">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            emoji={food.emoji}
            name={food.name}
            price={food.price}
            rating={food.rating}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default FoodList;