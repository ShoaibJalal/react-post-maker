import classes from "./Post.module.css";
import { Link } from "react-router-dom";

export interface PostProps {
  postId: string;
  title: string;
  description: string;
  author: string;
}

function Post({ postId, title, description, author }: PostProps) {
  return (
    <li className={classes.post}>
      <Link to={postId}>
      <p className={classes.title}>{title}</p>
      <p className={classes.description}>{description}</p>
      <p className={classes.author}>{author}</p>
      </Link>
      
    </li>
  );
}

export default Post;
