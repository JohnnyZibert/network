import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {AddNewPostFormRedux} from "./MyPostsForm";

const MyPosts = React.memo(props => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
})

export default MyPosts;


