import { useContext } from "react";
import Comment from "../comment/Comment";
import "./Comments.scss";
import { AuthContext } from "../../context/AuthContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officia saepe facilis mollitia sequi rerum soluta quod optio quibusdam nobis necessitatibus aliquam earum commodi eligendi perspiciatis ratione atque quos in, explicabo dicta ipsam similique laborum. Iusto debitis iste, dolore vero ad illum impedit accusamus doloremque, voluptas, blanditiis assumenda itaque molestias.",
      name: "John Doe",
      useId: 1,
      profilePic:
        "https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officia saepe facilis mollitia sequi rerum soluta quod optio quibusdam nobis necessitatibus aliquam earum commodi eligendi perspiciatis ratione atque quos in, explicabo dicta ipsam similique laborum. Iusto debitis iste, dolore vero ad illum impedit accusamus doloremque, voluptas, blanditiis assumenda itaque molestias.",
      name: "John Doe",
      useId: 1,
      profilePic:
        "https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officia saepe facilis mollitia sequi rerum soluta quod optio quibusdam nobis necessitatibus aliquam earum commodi eligendi perspiciatis ratione atque quos in, explicabo dicta ipsam similique laborum. Iusto debitis iste, dolore vero ad illum impedit accusamus doloremque, voluptas, blanditiis assumenda itaque molestias.",
      name: "John Doe",
      useId: 1,
      profilePic:
        "https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officia saepe facilis mollitia sequi rerum soluta quod optio quibusdam nobis necessitatibus aliquam earum commodi eligendi perspiciatis ratione atque quos in, explicabo dicta ipsam similique laborum. Iusto debitis iste, dolore vero ad illum impedit accusamus doloremque, voluptas, blanditiis assumenda itaque molestias.",
      name: "John Doe",
      useId: 1,
      profilePic:
        "https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt={currentUser.name} />
        <input type="text" name="" id="" placeholder="write a comment..." />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt={comment.name} />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
