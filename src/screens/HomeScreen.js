import { React, useEffect } from "react";
import PropertiesComponent from "../components/PropertiesComponent";
import BellaVilla from "../images/bellavilla.jpg";
import { AiOutlineHeart } from "react-icons/ai";

const properties = [
  {
    name: "Bella Villa",
    address: "2699 Green Valley, Highland Lake, FL",
    price: "$2095/month",
    img: BellaVilla,
    ico: AiOutlineHeart,
  },
  {
    name: "Bella Villa",
    address: "2699 Green Valley, Highland Lake, FL",
    price: "$2095/month",
    img: BellaVilla,
    ico: AiOutlineHeart,
  },
  {
    name: "Bella Villa",
    address: "2699 Green Valley, Highland Lake, FL",
    price: "$2095/month",
    img: BellaVilla,
    ico: AiOutlineHeart,
  },
  {
    name: "Bella Villa",
    address: "2699 Green Valley, Highland Lake, FL",
    price: "$2095/month",
    img: BellaVilla,
  },
  {
    name: "Bella Villa",
    address: "2699 Green Valley, Highland Lake, FL",
    price: "$2095/month",
    img: BellaVilla,
    ico: AiOutlineHeart,
  },
];

const HomeScreen = () => {
  return (
    <div>
      <h1>Search properties to rent</h1>
      <PropertiesComponent properties={properties} />
    </div>
  );
};

export default HomeScreen;
