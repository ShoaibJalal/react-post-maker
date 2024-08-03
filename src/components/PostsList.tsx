import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";
import { PostData } from "./NewPost";

interface PosTlistProps {
  isModalVisible: boolean;
  onDonePosting: () => void;
}

const PostsList = ({ isModalVisible, onDonePosting }: PosTlistProps) => {
  const [posts, setPosts] = useState<PostData[]>([]);

  function addPostHandler(postData: PostData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isModalVisible ? (
        <Modal onClose={onDonePosting}>
          <NewPost onCancel={onDonePosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.descriptionData}
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
