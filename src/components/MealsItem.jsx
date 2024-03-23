import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const MealsItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const handleAddItems = () => {
    cartCtx.addItems(meal);
  };

  return (
    <>
      <li className="meal-item">
        <article>
          {/* <img src={`http://localhost:3000/${meal.image}`} alt="meals Images" /> */}
          <img
            src={`https://backend-food-order-lsom.onrender.com/${meal.image}`}
            alt="meals Images"
          />
          <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-price">
              {/* {currencyFormatter.format(meal.price)} */}₹{meal.price}
            </p>
            <p className="meal-item-description">{meal.description}</p>
          </div>
          <p className="meal=item-actions">
            <Button onClick={handleAddItems}>Add to Cart</Button>
          </p>
        </article>
      </li>
    </>
  );
};
export default MealsItem;
