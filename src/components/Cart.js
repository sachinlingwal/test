import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceOptions } from "../store/slice/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(cartSliceOptions.remove(id));
  };
  const cards = products?.map((product) => (
    <div
      className="col-md-12"
      style={{ marginBottom: "10px" }}
      key={product.id}
    >
      <Card className="text-center h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>

        <Card.Footer style={{ background: "white" }}>
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <div className="row">{cards}</div>;
};

export default Cart;
