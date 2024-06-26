import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";

function HomeItem({ item }) {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  // console.log(item.id, elementFound);
  const originalPrice = Math.ceil(item.price + Math.ceil(40 / 100 * item.price));

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleOnRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.rate} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.title}</div>
        <div className="item-name">{item.description}</div>
        <div className="price">
          <span className="current-price">Rs {item.price}</span>
          <span className="original-price">Rs {originalPrice}</span>
          <span className="discount">(20% OFF)</span>
        </div>
        {elementFound ? (
          <button
            type="button"
            className="btn btn-danger btn-add-bag"
            onClick={handleOnRemove}
          >
            <CiCircleRemove />
            Remove
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success btn-add-bag"
            onClick={handleAddToBag}
          >
            {" "}
            <IoIosAddCircleOutline />
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
}

export default HomeItem;
