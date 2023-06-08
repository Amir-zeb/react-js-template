import React from "react";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./data";
import { Loader, Toast } from "../components";
import { useSelector } from "react-redux";
import { ComponentWrapper } from "../hoc";

export default function Router() {
  const { loader } = useSelector(state => state.appReducer);

  return (
    <>
      <Routes>
        {appRoutes.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.routeName}
              exact={item.exact}
              element={<ComponentWrapper item={item} />}
            />
          );
        })}
      </Routes>
      <Loader open={loader} />
      <Toast />
    </>
  );
}