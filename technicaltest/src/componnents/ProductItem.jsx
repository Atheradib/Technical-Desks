import React from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Card className="productitem">
      <Row>
        <Form.Label>{item.title}</Form.Label>
      </Row>
      <Row>
        <Form.Label>${item.price}</Form.Label>
      </Row>
      <Row>
        <Image src={`${item.image}`} width="100px" height="300px" />
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "REMOVE_PRODUCT",
                data: "",
              })
            }
          >
            DELETE
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: [],
              })
            }
          >
            ADD
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/detail">
            <Button
              variant="primary"
              style={{ width: "100px" }}
              onClick={() =>
                dispatch({
                  type: "SELECTED_PROD_ID",
                  data: item.id,
                })
              }
            >
              View
            </Button>
          </Link>
        </Col>
      </Row>
    </Card>
  );
};
