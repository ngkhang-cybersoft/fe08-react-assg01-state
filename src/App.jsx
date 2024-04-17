import React, { useState } from "react";
import Title from "./component/Title";
import View from "./component/View";
import Button from "./component/Button";

const App = () => {
  const [dataImg, setDataImg] = useState({
    id: 1,
    title: "red color",
    urlImg: "../img/red-car.jpg",
  });

  const listProd = [
    {
      id: 1,
      title: "red color",
      urlImg: "../img/red-car.jpg",
    },
    {
      id: 2,
      title: "silver color",
      urlImg: "../img/silver-car.jpg",
    },
    {
      id: 3,
      title: "black color",
      urlImg: "../img/black-car.jpg",
    },
  ];

  return (
    <div className="container">
      <Title />
      <div className="row align-items-center">
        <div className="col-7">
          <View content={dataImg} />
        </div>
        <div className="col-5 d-flex">
          {listProd.map((item) => {
            return (
              <div key={item.id}>
                <Button data={item} setDataImg={setDataImg} isDisable={item.id === dataImg.id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
