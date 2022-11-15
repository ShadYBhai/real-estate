import { React, useEffect } from "react";
import PropertiesComponent from "../components/PropertiesComponent";
import BellaVilla from "../images/bellavilla.jpg";
import Villa from "../images/b8bd3365.f10.webp";
import { BsHeart } from "react-icons/bs";
import NineProperty from "../images/9c2c102f.f10.webp";
import Pacific from "../images/pacific.jpg";
import Redskynight from "../images/redsky.jpg";
import BigVilla from "../images/b887fa98.f10.webp";
import Udhampur from "../images/udhamnagar.jpg";
import Bahamas from "../images/bahamas.jpg";
import Seven from "../images/82737205-017d-462b-90a8-61e9bf686477.jpg";
import eight from "../images/b887fa98.f10.webp";
//500 -1500, 1500-2000 , 2000-3500
import FilterComponent from "../components/FilterComponent";

const properties = [
  {
    name: "Bella Villa",
    address: "2699 Green Valley, Highland Lake, USA",
    price: "$3300/month",
    img: BellaVilla,
    ico: <BsHeart />,
    beds: "3 Beds",
    rooms: "5 Bathrooms",
    type: "House",
    location: "USA",
  },
  {
    name: "Orchard House",
    address: "2699 Green Valley, Highland Lake, USA",
    price: "$3500/month",
    img: Villa,
    ico: <BsHeart />,
    beds: "4 Beds ",
    rooms: "3 Bathrooms",
    type: "House",
    location: "USA",
  },
  {
    name: "Pacific View",
    address: "2699 Green Valley, Highland Lake, Spain",
    price: "$3000/month",
    img: Pacific,
    ico: <BsHeart />,
    beds: "3 Beds",
    rooms: "3 Bathrooms",
    type: "Villa",
    location: "Spain",
  },
  {
    name: "Red Sky Night",
    address: "2699 Green Valley, Highland Lake,  Spain",
    price: "$2000/month",
    img: Redskynight,
    ico: <BsHeart />,
    beds: "5 Beds",
    rooms: "2 Bathrooms",
    type: "Villa",
    location: "Spain",
  },
  {
    name: "Udhampur",
    address: "2699 Green Valley, Highland Lake, Maldives",
    price: "$1800/month",
    img: Udhampur,
    ico: <BsHeart />,
    beds: "6 Beds",
    rooms: "2 Bathrooms",
    type: "Beach House",
    location: "Maldives",
  },
  {
    name: "Night Sky",
    address: "2699 Green Valley, Highland Lake, India",
    price: "$1500/month",
    img: Bahamas,
    ico: <BsHeart />,
    beds: "6 Beds",
    rooms: "2 Bathrooms",
    type: "Beach House",
    location: "India",
  },
  {
    name: "Manali House",
    address: "2699 Green Valley, Highland Lake, India",
    price: "$500/month",
    img: Seven,
    ico: <BsHeart />,
    beds: "4 Beds",
    rooms: "2 Bathrooms",
    type: "Mountain House",
    location: "India",
  },
  {
    name: "Maldives Home",
    address: "2699 Green Valley, Highland Lake, Maldives",
    price: "$1000/month",
    img: eight,
    ico: <BsHeart />,
    beds: "6 Beds",
    rooms: "2 Bathrooms",
    type: "Mountain House",
    location: "Maldives",
  },
];

const HomeScreen = () => {
  return (
    <div>
      <h1>Search properties to rent</h1>
      <FilterComponent />
      <PropertiesComponent properties={properties} />
    </div>
  );
};

export default HomeScreen;
