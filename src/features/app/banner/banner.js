import React from "react";
import NavBar from "../navBar";
import BannerBg from '../../../assets/images/backgrounds/1.jpg'
const Banner = props => {
  const { handleOnChange, foodData ,MenuLists,handleCheck ,val} = props
  const headerStyle = { height: 'auto', minHeight: '500px', backgroundImage: `url("https://imperialcafemyanmar.com/assets/img/Restaurant.jpg")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' };
  return (
    <div style={headerStyle}>
      <NavBar handleOnChange={handleOnChange} foodData={foodData} MenuLists={MenuLists} handleCheck={handleCheck} val={val} />
    </div>
  );
};

export default Banner;
