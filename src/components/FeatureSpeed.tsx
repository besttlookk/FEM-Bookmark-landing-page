import React from "react";
import { FeatureType } from "../types";
import Feature from "./Feature";

const data: FeatureType = {
  width: 478,
  height: 416,
  tabNo: "2",
  heading: "Intelligent Search",
  content:
    "Our powerful search feature will help you find saved sites in no time at all. No nedd to trawl through all your bookmarks",
};

const FeatureSpeed = () => {
  return <Feature data={data} />;
};

export default FeatureSpeed;
