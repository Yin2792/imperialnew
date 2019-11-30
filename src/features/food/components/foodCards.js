import React, { useState, useEffect } from "react";
import { withMedia } from "react-media-query-hoc";
import { FetchUserControllerGetMenu } from '../../../network/api.Fetched'
import * as Colors from "../../../config/colorConfig";
import { writeCookie } from '../../../helper/cookieHome'
import { ImageAPI } from '../../../network/imperial.api'
import * as Font from "../../../config/fontConfig";
import { fsc } from "../../../assets/fontControlHelper";


const FoodCards = props => {
  const { media, val, val1, handleOnChange, tempData, food, MenuLists } = props;
  const [hover, setHover] = useState(false);
  const [isShow, setTrue] = useState(false)
  const _handleHover = e => {
    setHover(!hover);
    const ID = document.getElementById(e.target.id)

    if (hover === true) {
      ID.style.transform = "scale(1)";
    } else {
      ID.style.transform = "scale(1.2)";
    }
  };

  return (
    <div className="container py-3 ">
      <div className="container-fluid">
        <div className="row h-100 align-items-center" style={{ backgroundColor: 'white' }}>
          <div className="col-12 text-center text-justify">
            <h2 className="font-weight-light ">Available Foods In Our Restaurant</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 my-3">
            Menu Lists
             <ul className="list-group">
              {MenuLists.map((value, k) => {
                return <li className="list-group-item border-0" key={k}>

                  <div className="form-check">
                    <div style={{ backgroundColor: 'red' }} >
                      <input type="checkbox" className="form-check-input"
                        checked={val.includes(value.menu_id)}
                        value={value.menu_id} onFocus={() => setTrue(true)}
                        onChange={(e) => handleOnChange(value.menu_id)}
                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                      />
                    </div>
                    <label className="form-check-label mx-1" style={{ color: Colors.textBlack, fontWeight: 'bold', fontSize: fsc(media, 15) }}>{value.menu_name}</label>
                  </div>
                </li>

              })}


            </ul>

          </div>
          <div className="col-md-9">
            <div className="row">
              {val.length > 0 || val1?
                tempData.map((v, k) => (
                  <div className='col-lg-4 col-md-6 p-4' key={k}>
                    <div className="card shadow" style={{ width: '100%', height: media.mobile ? '100%' : 300 }}>
                      <div
                        style={{
                          overflow: "hidden",
                          height: media.mobile ? "100%" : "70%"
                        }}
                      >
                        <img
                          src={`${ImageAPI}/${v.image}`}
                          id={v.food_id}
                          onMouseLeave={id => _handleHover(id)}
                          onMouseOver={id => _handleHover(id)}
                          className="card-img-top"
                          style={{
                            transition: ".5s",
                            filter: 'contrast(120%)',

                          }}
                          alt="rooms"
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{v.food_name}</h5>
                        <div className="card-text" >
                          <span className='w-100'>{v.food_name}</span><br />
                          <span>{v.size}</span><br />
                          <span style={{ color: Colors.textBlack, fontWeight: 'bold', fontSize: fsc(media, 25) }}>{v.price} ks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
                :
                food.map((v, k) => (
                  <div className='col-lg-4 col-md-6 p-4' key={k}>
                    <div className="card shadow" style={{ width: '100%', height: media.mobile ? '100%' : 300 }}>
                      <div
                        style={{
                          overflow: "hidden",
                          height: media.mobile ? "100%" : "70%"
                        }}
                      >
                        <img
                          src={`${ImageAPI}/${v.image}`}
                          id={v.food_id}
                          onMouseLeave={id => _handleHover(id)}
                          onMouseOver={id => _handleHover(id)}
                          className="card-img-top"
                          style={{
                            transition: ".5s",
                            filter: 'contrast(120%)',

                          }}
                          alt="rooms"
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{v.food_name}</h5>
                        <div className="card-text" >
                          <span className='w-100'>{v.food_name}</span><br />
                          <span>{v.size}</span><br />
                          <span style={{ color: Colors.textBlack, fontWeight: 'bold', fontSize: fsc(media, 25) }}>{v.price} ks</span>
                        </div>
                      </div>
                    </div>
                  </div>))
              }

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default withMedia(FoodCards)
