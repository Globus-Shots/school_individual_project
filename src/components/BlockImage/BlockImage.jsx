import React from "react";
import style from "./BlockImage.module.css"

import Image from "../Image/Image";

const BlockImage = ({images, width, height}) => {
    const width_img = width / images.lenght;
    const height_img = height / images.lenght;

    return(
        <div className={style.images} style={{width: width, height: height}}>
            {images.map(item => 
                <Image img_path={item} width={width_img} height={height_img}/>    
            )}
        </div>
    )
}

export default BlockImage;