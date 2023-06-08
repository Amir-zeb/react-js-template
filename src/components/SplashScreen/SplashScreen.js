import { Box, Skeleton } from "@mui/material";
import React from "react";
import { Logo } from "../../assets";

export default function SplashScreen() {
  return (
    <div className="splash_container">
      <div className="img_wrapper">
        <img src={Logo} alt="logo.png" width="150px" />
      </div>
    </div>
  );
}