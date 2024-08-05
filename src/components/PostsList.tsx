import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { PostData } from "./NewPost";

interface PosTlistProps {
  isModalVisible: boolean;
  onDonePosting: () => void;
}

const PostsList = ({ isModalVisible, onDonePosting }: PosTlistProps) => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);

      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);

      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData: PostData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isModalVisible ? (
        <Modal onClose={onDonePosting}>
          <NewPost onCancel={onDonePosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      {!isFetching && posts.length > 0 && (
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
      {!isFetching && posts.length === 0 && (
        <div className={classes.noPosts}>
          <h2>There are no posts yet.</h2>
          <p>Please add some!</p>
        </div>
      )}
      {isFetching && (
        <div
          style={{
            textAlign: "center",
            color: "white"
          }}
        >
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
