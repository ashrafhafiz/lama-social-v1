import "./Comment.scss";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <img src={comment.profilePic} alt={comment.name} />
      <div className="info">
        <span>{comment.name}</span>
        <p>{comment.desc}</p>
      </div>
      <span className="date">1 hour ago</span>
    </div>
  );
};

export default Comment;
