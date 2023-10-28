import "./Profile.scss";
import Posts from "../../components/posts/Posts";
import {
  FacebookTwoTone,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
  Place,
  Language,
  EmailOutlined,
  MoreVert,
} from "@mui/icons-material";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cover"
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="profile pic"
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="userIno">
          <div className="left">
            <a href="https://www.facebook.com">
              <FacebookTwoTone fontSize="large" />
            </a>
            <a href="https://www.instagram.com">
              <Instagram fontSize="large" />
            </a>
            <a href="https://www.twitter.com">
              <Twitter fontSize="large" />
            </a>
            <a href="https://www.linkedin.com">
              <LinkedIn fontSize="large" />
            </a>
            <a href="https://www.pinterest.com">
              <Pinterest fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>John Doe</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>USA</span>
              </div>
              <div className="item">
                <Language />
                <span>lama.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
