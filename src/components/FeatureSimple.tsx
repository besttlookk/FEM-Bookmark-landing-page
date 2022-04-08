import React from "react";
import { FeatureType } from "../types";
import Feature from "./Feature";

const data: FeatureType = {
  width: 536,
  height: 346,
  tabNo: "1",
  heading: "Bookmark in one click",
  content:
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
};

const FeatureSimple = () => {
  return <Feature data={data} />;
};

export default FeatureSimple;
