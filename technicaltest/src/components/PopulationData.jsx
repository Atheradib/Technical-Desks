import React, { useState, useEffect } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import "./Population.css";
import axios from "axios";

export const PopulationData = () => {
  const [allData, setAllData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const handleSearch = (e) => {
    const filterData = allData.filter((item) =>
      item.title.toLowerCase().includes(e.target.value)
    );
    setTeamData([...filterData]);
  };
  const populateData = async () => {
    const resultData = await axios.get("https://fakestoreapi.com/products");
    setAllData([...resultData.data]);
    setTeamData([...resultData.data]);
  };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <div>
      <Card className="tbSearch">
        <Row>
          <Col>
            <Form.Control
              type="text"
              label="Search"
              placeholder="Search here.."
              onChange={(e) => handleSearch(e)}
            />
          </Col>
        </Row>
      </Card>
      <Card className="tbData">
        <Row>
          <Col md={3}>ID</Col>
          <Col md={3}>Title</Col>
          <Col md={3}>Price</Col>
          <Col md={3}>Category</Col>
        </Row>

        {teamData.map((item) => {
          return (
            <Row>
              <Col md={3}>{item.id}</Col>
              <Col md={3}>{item.title}</Col>
              <Col md={3}>{item.price}</Col>
              <Col md={3}>{item.category}</Col>
            </Row>
          );
        })}
      </Card>
    </div>
  );
};

// import React from "react";

// export const PopulationData = () => {
//   return <div>this is data population</div>;
// };
