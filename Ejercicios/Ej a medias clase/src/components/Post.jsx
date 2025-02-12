const Post = (props) => {

    return (
        <li>
            <p>{props.post.title}</p>
            <small>{props.post.body}</small>
        </li>
    )
}

export default Post;
