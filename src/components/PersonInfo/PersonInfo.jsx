import React from "react";
import style from "./PersonInfo.module.css";

import Image from "../Image/Image";

import  "../../App.css"

const PersonInfo = (props) => {
    return(
        <div className={style.person}>
            <div className={style.image_wrapper}>
                <Image img_path={props.avatar} width="150px" height="150px" width_img="200px" height_img="150px"/>
            </div>
            <p className={style.name}><span className="gold">ФИО:</span> {props.fullname}</p>
            <p className={style.age}><span className="gold">Возраст:</span> {props.age}</p>
            <p className={style.position}><span className="gold">Позиция на сайте:</span> {props.position}</p>
            <p className={style.vk}><span className="gold">VK:</span> <a href={props.contact}>click</a></p>
        </div>
    )
}

export default PersonInfo;