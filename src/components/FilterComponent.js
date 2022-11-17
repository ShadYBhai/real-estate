import React from "react";
import WhenComponent from "./WhenComponent";

const FilterComponent = ({ setData, data, properties, wishlist }) => {
  const handleWishlist = () => {
    setData(
      properties.filter((elem) => {
        return wishlist.includes(elem.id);
      })
    );
  };
  const handleLocation = (event) => {
    console.log(
      properties.filter((elem) => {
        return elem.location == event.target.value;
      })
    );
    setData(
      properties.filter((elem) => {
        return elem.location == event.target.value;
      })
    );
  };
  const handlePrice = (event) => {
    const myArray = event.target.value.split("-");
    console.log(
      properties.filter((elem) => {
        return (
          parseInt(myArray[0]) <= parseInt(elem.price) &&
          parseInt(elem.price) <= parseInt(myArray[1])
        );
      })
    );
    setData(
      properties.filter((elem) => {
        if (!parseInt(myArray[1])) {
          return parseInt(myArray[0]) <= parseInt(elem.price);
        }
        return (
          parseInt(myArray[0]) <= parseInt(elem.price) &&
          parseInt(elem.price) <= parseInt(myArray[1])
        );
      })
    );
  };
  const handleType = (event) => {
    console.log(
      properties.filter((elem) => {
        return elem.type == event.target.value;
      })
    );
    setData(properties.filter((elem) => elem.type == event.target.value));
  };
  const handleClear = (event) => {
    setData(properties);
  };
  const filterObj = [
    {
      name: "Location: ",
      properties: [
        "Select Location",
        "India",
        "Australia",
        "USA",
        "Spain",
        "Maldives",
      ],
      handler: handleLocation,
    },
    {
      name: "Price: ",
      properties: [
        "Select Price",
        "500-1500",
        "1500-2000",
        "2000-3000",
        "3000",
      ],
      handler: handlePrice,
    },
    {
      name: "Type: ",
      properties: [
        "Select Type",
        "House",
        "Villa",
        "Beach House",
        "Mountain House",
      ],
      handler: handleType,
    },
  ];
  return (
    <>
      <div className="wrapper">
        {filterObj.map((filter) => {
          return (
            <div className="dropdown">
              <p className="name">{filter.name}</p>
              <select className="default_option" onChange={filter.handler}>
                {filter.properties.map((elem) => {
                  return (
                    <option className="optionName" value={elem}>
                      {elem}
                    </option>
                  );
                })}
              </select>
              <div className="search_field"></div>
            </div>
          );
        })}
        <button className="filterbutton" onClick={handleWishlist}>
          Wishlist
        </button>
        <button className="filterbutton" onClick={handleClear}>
          Clear
        </button>
      </div>
    </>
  );
};

export default FilterComponent;
