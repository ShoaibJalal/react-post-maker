import { useState } from "react";
import classes from "./NewPost.module.css";

export interface PostData {
  titleData: string;
  descriptionData: string;
  authorData: string;
}

interface InputProps {
  onCancel: () => void;
  onAddPost: (data: PostData) => void;
}

function NewPost({ onCancel, onAddPost }: InputProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  function titleChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.currentTarget.value);
  }

  function descriptionChangeHandler(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setDescription(event.currentTarget.value);
  }

  function authorChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setAuthor(event.currentTarget.value);
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const postData: PostData = {
      titleData: title,
      descriptionData: description,
      authorData: author,
    };
    console.log(postData);
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required onChange={titleChangeHandler} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          required
          rows={3}
          onChange={descriptionChangeHandler}
        />
      </p>
      <p>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          required
          onChange={authorChangeHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
