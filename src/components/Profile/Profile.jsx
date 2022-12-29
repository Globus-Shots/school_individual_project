import React from "react";
import style from "./Profile.module.css";

import PersonInfo from "../PersonInfo/PersonInfo.jsx";
import BlockText from "../BlockText/BlockText";

const Profile = (props) => {
    return(
        <div className={style.profile}>
            <div className={style.block} style={{width: "400px"}}>
                <PersonInfo avatar={props.avatar} fullname={props.fullname} age={props.age} position={props.position} contact={props.contact}/>
            </div>
            <div className={style.block} style={{width: "100%"}}>
                <BlockText title="Описание" descr={props.biography} lineHeight="28px"/>
            </div>
        </div>
    )
}

export default Profile;