import {FaUserCircle} from "react-icons/fa"
import {ProfileContainer} from "./style"
import {useAuth} from "../../providers/AuthProvider"

const Profile = () => {
    const {userInfo} = useAuth();
    return(
        <ProfileContainer>
            <FaUserCircle className="user-icon"/>
            <h1>{userInfo.username}</h1>
        </ProfileContainer>
    )
}

export default Profile;