import { FaUserCircle } from "react-icons/fa";
import { ProfileContainer, InfoNameContainer } from "./style";
import { useAuth } from "../../providers/AuthProvider";
import { FaUserEdit } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const { userInfo, getUserInfo } = useAuth();
  const history = useHistory();
  useEffect(() => {
    getUserInfo();
  }, []);
  const handleClickEdit = (value) => {
    history.push(value);
  };
  return (
    <ProfileContainer>
      <FaUserCircle className="user-icon" />
      <InfoNameContainer>
        <h1>{userInfo.username}</h1>
        <FaUserEdit
          className="figure-profile"
          onClick={() => handleClickEdit("/edition/Username")}
        ></FaUserEdit>
      </InfoNameContainer>
    </ProfileContainer>
  );
};

export default Profile;
