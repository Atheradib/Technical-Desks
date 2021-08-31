import React, { useState, useEffect, useRef } from "react";
import { Button, Col, Row, Card, Form } from "react-bootstrap";
import "./LoginForm.css";
import { userData } from "./reducers/Config";

export const Login = () => {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [isNotValid, setIsNotValid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const eleUserName = useRef();
  const elePassword = useRef();
  useEffect(() => {
    if (name.length >= 5 && pass.length >= 6) {
      setIsNotValid(false);
      if (
        userData.userName == name.trim() &&
        userData.password === pass.trim()
      ) {
        setIsSuccess(true);
        localStorage.setItem("token", userData.token);
      }
    } else setIsNotValid(true);
  }, [name, pass]);
  useEffect(() => {
    if (localStorage.getItem("userName")) {
      eleUserName.current.value = localStorage.getItem("userName");
      elePassword.current.focus();
    } else {
      eleUserName.current.focus();
    }
  }, []);
  return (
    <div>
      {isSuccess ? (
        <p>You are successfully logged in!!!!</p>
      ) : (
        <div>
          <h1>Login with Validation</h1>
          <hr />
          <Card className="login">
            <Row>
              <Col md={12}>
                <Form.Control
                  type="text"
                  placeholder="user Name"
                  onChange={(e) => setname(e.target.value)}
                  ref={eleUserName}
                ></Form.Control>
              </Col>
              <Col md={12}>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => setpass(e.target.value)}
                  ref={elePassword}
                ></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <Button disabled={isNotValid}>Submit</Button>
              </Col>
              <Col md={5}>
                <Button>Cancel</Button>
              </Col>
            </Row>
            {!isSuccess && !isNotValid && (
              <p>Please enter correct username and password</p>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};
