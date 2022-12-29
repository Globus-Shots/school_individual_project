import React from "react";
import style from "./Author.module.css";

function Album({name, avatar}){
    return (
        <div className={style.author}>
            <img src={avatar} alt="avatar" />
            <span>{name}</span>
        </div>
    )
}

export default Album;