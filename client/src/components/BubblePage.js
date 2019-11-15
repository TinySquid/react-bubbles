import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const reorderColors = () => {
    setRefresh(!refresh);
  }

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(response => {
        setColorList(response.data);
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} reorderColors={reorderColors} />
      <Bubbles colors={colorList} refresh={refresh} />
    </>
  );
};

export default BubblePage;
