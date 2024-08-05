import { useLoaderData, Link } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

export interface PostProps {
    postId: string;
    titleData: string;
    descriptionData: string;
    authorData: string;
  }
  

function PostDetails() {
  const post = useLoaderData() as PostProps | null;

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.title}>{post.titleData}</p>
        <p className={classes.text}>{post.descriptionData}</p>
        <p className={classes.author}>{post.authorData}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }: any) {
  const response = await fetch("http://localhost:8080/posts/" + params.postId);
  const resData = await response.json();
  return resData.post;
}
