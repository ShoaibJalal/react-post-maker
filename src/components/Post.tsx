import classes from "./Post.module.css";

interface PostProps {
  title: string;
  description: string;
  author: string;
}

function Post({ title, description, author }: PostProps) {
  return (
    <li className={classes.post}>
      <p className={classes.title}>{title}</p>
      <p className={classes.description}>{description}</p>
      <p className={classes.author}>{author}</p>
    </li>
  );
}

export default Post;
