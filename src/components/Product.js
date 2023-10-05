import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceOptions } from "../store/slice/cartSlice";
import { getProducts } from "../store/slice/productSlice";

const Product = () => {
  // const [products, setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));
    dispatch(getProducts());
  }, []);

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(cartSliceOptions.add(product));
  };

  if (status === "loading") {
    return <p>Loading......</p>;
  }
  if (status === "error") {
    return <p>Something Went wrong !Try Again Later</p>;
  }
  const cards = products?.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }} key={product.id}>
      <Card style={{ width: "18rem" }} className="h-100">
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      Product
      <div className="row">{cards}</div>{" "}
    </div>
  );
};

export default Product;
