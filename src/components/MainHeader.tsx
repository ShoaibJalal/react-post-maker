import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.css";

function MainHeader({
  onCreatePost,
}: {
  onCreatePost: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        PostMaker
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}
export default MainHeader;
