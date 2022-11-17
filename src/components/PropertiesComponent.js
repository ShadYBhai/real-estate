import React from "react";
import PropertiesComponentStyles from "../styles/PropertiesComponent.css";
import { BiBed } from "react-icons/bi";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { MdOutlineBathtub } from "react-icons/md";

const PropertiesComponent = ({ properties, setWishlist, wishlist }) => {
  const handleWishlist = (id) => {
    if (wishlist.includes(id)) {
      return setWishlist(wishlist.filter((wish) => {
        return wish != id;
      }));
    }
    setWishlist([...wishlist, id]);
  }
  return (
    <div className="cards">
      {properties &&
        properties.map((property) => {
          return (
            <>
              <div className="card" key={property.name}>
                <div className="container">
                  <img
                    className="property"
                    src={property.img}
                    alt={property.name}
                  />
                </div>
                <div>
                  <span className="price">{property.price}</span>
                  <span onClick={() => handleWishlist(property.id)}>{wishlist.includes(property.id) ? < BsFillHeartFill /> : < BsHeart />}</span>
                  <p className="name">{property.name}</p>
                  <p className="address">{property.address}</p>
                  <hr />
                  <span style={{ verticalAlign: "center", display: "flex" }}>
                    <BiBed />
                    {property.beds}

                    <span>
                      {" "}
                      <MdOutlineBathtub />
                      {property.rooms}
                    </span>
                  </span>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default PropertiesComponent;
