import React from "react";
import style from "./Image.module.css";

const Image = ({img_path, width, height, width_img, height_img}) => {
    
    return(
        <div className={style.image} style={{width: width, height: height}}>
            <img src={`../../assets/data${img_path}`} alt="img" width={width_img} height={height_img} />
           
        </div>
    )
}

export default Image;