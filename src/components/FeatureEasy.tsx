import React from "react";
import { FeatureType } from "../types";
import Feature from "./Feature";

const data: FeatureType = {
  width: 440,
  height: 480,
  tabNo: "3",
  heading: "Share your bookmarks",
  content:
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
};

const FeatureEasy = () => {
  return <Feature data={data} />;
};

export default FeatureEasy;
