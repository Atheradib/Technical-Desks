import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

export const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const myProducts = useSelector((state) => state.productReducer.product);
  const selectedId = useSelector(
    (state) => state.productReducer.selectedprodid
  );
  useEffect(() => {
    const filteredProd = myProducts.filter((item) => item.id === selectedId);
    setSelectedProduct([...filteredProd]);
  }, [selectedId]);
  return (
    <div>
      <Card>
        <Row>
          <Col md={4}>Images</Col>
          <Col md={8}>Description</Col>
          <Button>Back</Button>
        </Row>
      </Card>
    </div>
  );
};
