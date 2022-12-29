import React from "react";
import styles from "./BlockText.module.css";

const BlockText = (props) => {
    const props_style = {
        "width": props.width,
        "height": props.height,
        "margin": props.margin
    }

    return(
        <div className={styles.block_text} style={props_style}>
            <h3 className={styles.title}>
                {props.title}
            </h3>
            <h4 className={styles.subtitle} style={{"color": props.color_subtitle}}>
                {props.subtitle}
            </h4>
            <div className={styles.descr} style={{"color": props.color_descr, "lineHeight": props.lineHeight}}>
                {props.descr}
            </div>
        </div>
    )
}

export default BlockText;