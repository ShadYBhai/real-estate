import { React, useEffect, useState } from "react";
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
    id: 1,
    address: "2699 Green Valley, Highland Lake, USA",
    price: "3300",
    img: BellaVilla,
    beds: "3 Beds",
    rooms: "5 Bathrooms",
    type: "House",
    location: "USA",
  },
  {
    name: "Orchard House",
    id: 2,
    address: "2699 Green Valley, Highland Lake, USA",
    price: "3500",
    img: Villa,
    beds: "4 Beds ",
    rooms: "3 Bathrooms",
    type: "House",
    location: "USA",
  },
  {
    name: "Pacific View",
    id: 3,
    address: "2699 Green Valley, Highland Lake, Spain",
    price: "3000",
    img: Pacific,
    beds: "3 Beds",
    rooms: "3 Bathrooms",
    type: "Villa",
    location: "Spain",
  },
  {
    name: "Red Sky Night",
    id: 4,
    address: "2699 Green Valley, Highland Lake,  Spain",
    price: "2000",
    img: Redskynight,
    beds: "5 Beds",
    rooms: "2 Bathrooms",
    type: "Villa",
    location: "Spain",
  },
  {
    name: "Udhampur",
    id: 5,
    address: "2699 Green Valley, Highland Lake, Maldives",
    price: "1800",
    img: Udhampur,
    beds: "6 Beds",
    rooms: "2 Bathrooms",
    type: "Beach House",
    location: "Maldives",
  },
  {
    name: "Night Sky",
    id: 6,
    address: "2699 Green Valley, Highland Lake, India",
    price: "1500",
    img: Bahamas,
    beds: "6 Beds",
    rooms: "2 Bathrooms",
    type: "Beach House",
    location: "India",
  },
  {
    name: "Manali House",
    id: 7,
    address: "2699 Green Valley, Highland Lake, India",
    price: "500",
    img: Seven,
    beds: "4 Beds",
    rooms: "2 Bathrooms",
    type: "Mountain House",
    location: "India",
  },
  {
    name: "Maldives Home",
    id: 8,
    address: "2699 Green Valley, Highland Lake, Maldives",
    price: "1000",
    img: eight,
    beds: "6 Beds",
    rooms: "2 Bathrooms",
    type: "Mountain House",
    location: "Maldives",
  },
];

const HomeScreen = () => {
  const [data, setData] = useState(properties);
  const [wishlist, setWishlist] = useState([]);
  return (
    <div>
      <h1>Search properties to rent</h1>
      <FilterComponent
        setData={setData}
        data={data}
        properties={properties}
        wishlist={wishlist}
      />
      <PropertiesComponent
        properties={data}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
    </div>
  );
};

export default HomeScreen;
