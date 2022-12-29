import React from "react";
import Album from "../../components/Album/Album.jsx";
import style from "./Albums.module.css";

import { Outlet } from "react-router-dom";

const Albums = ({data}) =>{
    return (
        <section className={style.albums}>
            {data.map((item,  index) => 
            
                <Album 
                    id={index}
                    background={item.image}
                    title={item.title}
                    descr={item.description}
                />
            )}
            <Outlet/>
        </section>
    )
}

export default Albums;