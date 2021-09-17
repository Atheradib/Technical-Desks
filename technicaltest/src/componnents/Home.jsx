import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProductList } from "./ProductList";
import { getProducts } from "../service/products";
import { TopNav } from "./TopNav";
import "./Product.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";

export const Home = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const allProducts = async () => {
    const products = await getProducts();
    dispatch({
      type: "ADD_PRODUCT",
      data: products,
    });
  };

  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div>
      <Router>
        <TopNav setSearchText={setSearchText} />
        <Switch>
          <div>
            <Route>
              <ProductList searchText={searchText} />
            </Route>
            <Route path="/detail">
              <ProductDetails />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
};
