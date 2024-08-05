import classes from "./PostsList.module.css";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";

interface PostData {
  id: string;
  authorData: string;
  descriptionData: string;
  titleData: string;
}

const PostsList: React.FC = () => {
  const posts = useLoaderData() as PostData[];

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              postId={post.id}
              key={post.id}
              author={post.authorData}
              description={post.descriptionData}
              title={post.titleData}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={classes.noPosts}>
          <h2>There are no posts yet.</h2>
          <p>Please add some!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
