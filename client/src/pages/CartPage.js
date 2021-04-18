import React, { useEffect } from "react";
import { addToCart } from "../actions/CartActions";
import { useDispatch, useSelector } from "react-redux";

export default function CartPage(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div className='row top'>
      
    </div>
    {/*<div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {productId} Qty: {qty}
      </p>
    </div>*/}
  );
}
