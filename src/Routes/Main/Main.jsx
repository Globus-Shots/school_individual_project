import React from "react";
import style from "./Main.module.css";

import BlockText from "../../components/BlockText/BlockText";
import Intro from "../../components/Intro/Intro.jsx";

import "../../App.css";

const Main = ({data}) => {
    return(
        <div className={style.main}>
            {/* <Intro title={data.title} sub_title={data.subtitle} intro={require(`../../assets/img/intro.png`).default}/> */}
            <div className={style.descr}>
                <BlockText title={data.title} descr={data.description} width="100%"/>
            </div>
        </div>
    )
}

export default Main;