import React from "react";
import style from "./Intro.module.css";

import BlockText from "../BlockText/BlockText";
import Image from "../Image/Image";

import "../../App.css";

import map from "../../assets/img/icons/map.png"

const Intro = (props) => {
    return(
        <div className={style.intro}>
            <div className={style.title_block}>
                <BlockText title={props.title} subtitle={props.sub_title} color_subtitle="#fff" width="500px"/>
                <a href="" className="btn gold">
                    <img src={map} alt="map"/>
                    карты
                </a>
            </div>
            <Image img_path={require(props.intro).default} width="250px" height="250px"/>
        </div>
    )
}

export default Intro;