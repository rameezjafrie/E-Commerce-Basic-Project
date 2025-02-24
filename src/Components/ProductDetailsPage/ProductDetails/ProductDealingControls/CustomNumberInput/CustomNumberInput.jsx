import { useDispatch, useSelector } from "react-redux";
import { MAXIMUM_QUANTITY, MINIMUM_QUANTITY } from "src/Data/globalVariables";
import { updateProductsState } from "src/Features/productsSlice";
import s from "./CustomNumberInput.module.scss";

const CustomNumberInput = () => {
  const { productQuantity } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function increaseQuantity() {
    if (productQuantity >= MAXIMUM_QUANTITY) return;
    updateQuantity(productQuantity + 1);
  }

  function decreaseQuantity() {
    if (productQuantity <= MINIMUM_QUANTITY) return;
    updateQuantity(productQuantity - 1);
  }

  function updateQuantity(value) {
    dispatch(
      updateProductsState({
        key: "productQuantity",
        value,
      })
    );
  }

  return (
    <div className={s.customNumberInput}>
      <button
        type="button"
        onClick={decreaseQuantity}
        aria-label="Decrease quantity by 1"
      >
        -
      </button>

      <input
        type="number"
        onChange={(e) => setQuantity(e.target.value)}
        value={productQuantity}
        min={1}
        max={1000}
      />

      <button
        type="button"
        onClick={increaseQuantity}
        aria-label="Increase quantity by 1"
      >
        +
      </button>
    </div>
  );
};
export default CustomNumberInput;
