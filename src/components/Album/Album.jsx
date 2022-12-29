import React from "react";
import style from "./Album.module.css";

import BlockText from "../BlockText/BlockText";
import Image from "../Image/Image";
import { NavLink } from 'react-router-dom';

import "../../App.css";

function Album(props){
    console.log(props.background);
    return (
        <div className={style.item}>
            <Image img_path={props.background} width="350px" height="150px" width_img="350px" height_img="150px"/>
            <div className={style.content}>
                <BlockText title={props.title} descr={props.descr} height="108px"/>
                <NavLink to={`/albums/album?id=${props.id}`} className="btn gold">Смотреть</NavLink>
            </div>
        </div>
    )
}

export default Album;