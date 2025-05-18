import React from 'react';
import style from './Categories.module.css';
import img1 from "../../../assets/img (1).png";
import img2 from "../../../assets/img (2).png";
import img3 from "../../../assets/img (3).png";
import img4 from "../../../assets/img (4).png";

export default function Categories() {
  const handleCategoryClick = (category: string) => {
    alert(`${category}: Здесь скоро будет контент`);
  };

  return (
    <div className={style.container}>
      <h1>Categories</h1>
      <div className={style.cardCollection}>
        <div className={style.card} onClick={() => handleCategoryClick("Fertilizer")}>
          <img className={style.cardImg} src={img1} alt="" />
          <p>Fertilizer</p>
        </div>
        <div className={style.card} onClick={() => handleCategoryClick("Protective products and septic tanks")}>
          <img className={style.cardImg} src={img2} alt="" />
          <p>Protective products and septic tanks</p>
        </div>
        <div className={style.card} onClick={() => handleCategoryClick("Planting material")}>
          <img className={style.cardImg} src={img3} alt="" />
          <p>Planting material</p>
        </div>
        <div className={style.card} onClick={() => handleCategoryClick("Tools and equipment")}>
          <img className={style.cardImg} src={img4} alt="" />
          <p>Tools and equipment</p>
        </div>
      </div>
    </div>
  );
}
