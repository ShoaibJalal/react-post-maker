import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect, ActionFunctionArgs } from "react-router-dom";

const NewPost: React.FC = () => {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="titleData" required />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="descriptionData" required rows={3} />
        </p>
        <p>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="authorData" required />
        </p>
        <p className={classes.actions}>
          <Link to={".."} type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
