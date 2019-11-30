import React, { useEffect, useState } from "react";
import { withMedia } from "react-media-query-hoc";

import Logo from "../../assets/icons/logo/logo.png";
import * as RoutePath from "../../config/routeConfig";
import { fsc } from "../../assets/fontControlHelper";
import MyLink from "../../tools/myLink";
import * as Colors from "../../config/colorConfig";
import Select from 'react-select'


const Navbar = props => {
  const { media, handleOnChange, foodData } = props;
  const [MenuClick, setMenuClick] = useState(false)

  const handleMenuClick = () => {
    setMenuClick(!MenuClick);
  };
  useEffect(() => {
    if (media.desktop || media.tablet) {
      setMenuClick(false);
    }

  });

  const Options = foodData.map((v, k) => {
    return { value: v.food_name, label: v.food_name, food_id: v.food_id, isFixed: true }
  })


  return (
    <div className="sticky-top position-fixed w-100">

      <div
        id="NavbarContainer"
        className="d-flex flex-row w-100 justify-content-between py-2 px-5"
        style={{
          zIndex: 2,
          backgroundColor: "rgba(0,0,0,0.4)"

        }}
      >
        <div className="d-flex flex-row">
          <div style={{ width: 80 }} className="p-2">
            <img src={Logo} alt="Logo" className="w-100" style={{ "filter": "brightness(100%)" }} />
          </div>
          <div className="p-2 my-3" style={{ background: 'rgb(128,0,0)' }}>
            <h4 style={{ color: "white" }}>IMPERIAL</h4>
          </div>
        </div>
        <div style={{ width: '400px' }} className="my-3">
          <Select options={Options} placeholder="search by food name" onChange={(e) => handleOnChange(e.food_id)} />
        </div>
      </div>

    </div>
  );
};

export default withMedia(Navbar);