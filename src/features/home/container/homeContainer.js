import React, { useState, useEffect } from "react";
import FoodContainer from "../../food/container/foodContainer";
import Banner from "../../app/banner/banner";
import { FetchUserControllerGetFood, FetchUserControllerGetMenu } from '../../../network/api.Fetched'
const Home = () => {

  const [MenuLists, setMenuLists] = useState([])
  const [val, setVal] = useState([])
  const [FoodData, setFood] = useState([])
  const [val1, setVal1] = useState(null)
  useEffect(() => {
    Fetch_Menu()
    Fetch_GET_Food()
  }, [])
  const Fetch_Menu = () => {
    FetchUserControllerGetMenu((networkErr, userErr, data) => {
      if (networkErr != null) { console.log(networkErr) }
      else if (userErr != null) { console.log(JSON.stringify(userErr.message)) }
      else {
        setMenuLists(data.payload)
      }
    })
  }

  const Fetch_GET_Food = () => {
    FetchUserControllerGetFood((networkErr, userErr, data) => {
      if (networkErr != null) { console.log(networkErr) }
      else if (userErr != null) { console.log(JSON.stringify(userErr.message)) }
      else {

        setFood(data.payload)
      }
    })
  }

  const HandleOnChange = id => {
    setVal([])
    setVal1(id)
  }

  const HandleCheck = check_id => {
    setVal1(null)
    val.includes(check_id) ? setVal(val.filter(d => d != check_id)) : setVal([...val, check_id])
    
  }
  const tempData = FoodData.reduce((r, c) => {
    if (c.food_id == val1) {
      return [...r, c]
    }
    return val.includes(c.menu_id) ? [...r, c] : r
    // console.log({ val, c: c.menu_id })
  }, [])
  console.log(val1)
  return (
    <div>
      <Banner handleOnChange={HandleOnChange} foodData={FoodData} />
      <FoodContainer val={val} val1={val1} handleOnChange={HandleCheck} tempData={tempData} food={FoodData} MenuLists={MenuLists} />
    </div>
  );
};

export default Home;


