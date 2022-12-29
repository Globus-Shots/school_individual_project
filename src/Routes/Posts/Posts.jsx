import React from "react";
import style from "./Posts.module.css";

import Post from "../../components/Post/Post.jsx";
import BlockText from "../../components/BlockText/BlockText.jsx";
import Image from "../../components/Image/Image";

const Posts = ({album}) => {
    return(
        <div className={style.posts}>
            <div className={style.intro}>
                <Image img={require(`../../assets/data${album.image}`)} width="100%" height="250px"/>
                <div className={style.intro_content}>
                    <BlockText title={album.title} descr={album.description}/>
                </div>
            </div>
            <div className={style.list}>
                {
                    album.posts.map(item => 
                        <Post post={item}/>
                    )
                }
            </div>
        </div>
    )
}

export default Posts;