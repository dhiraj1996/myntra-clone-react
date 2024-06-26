import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

function BagItems({item}) {
  const dispatch = useDispatch();
  const handleBagRemove = () => {
    dispatch(bagActions.removeFromBag(item.id))
  }

  const originalPrice = Math.ceil(item.price + Math.ceil(40 / 100 * item.price));
  const returnPeriod = 14;


  return (
    <div className="bag-items-container">
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={item.image} />
        </div>
        <div className="item-right-part">
          <div className="company">{item.title}</div>
          <div className="item-name">{item.description}</div>
          <div className="price-container">
            <span className="current-price">₹ {item.price}</span>
            <span className="original-price">₹ {originalPrice}</span>
            <span className="discount-percentage">
              (20% OFF)
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">
              {returnPeriod} days
            </span>
            return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">{returnPeriod + 10}</span>
          </div>
        </div>

        <div className="remove-from-cart" onClick={handleBagRemove}>
          X
        </div>
      </div>
    </div>
  );
}

export default BagItems