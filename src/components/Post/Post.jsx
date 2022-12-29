import React from "react";
import style from "./Post.module.css";

import BlockImage from "../BlockImage/BlockImage.jsx";
import BlockText from "../BlockText/BlockText.jsx";
import Author from "../Author/Author.jsx"

 const Post = ({post}) => {
    console.log(post);
    return(
        <div className={style.post}>
            <BlockImage images={post.images}/>
            <BlockText title={post.title} descr={post.description}/>
            <Author avatar={post.author_avatar} name={post.author_name}/>
        </div>
    )
 }

 export default Post;