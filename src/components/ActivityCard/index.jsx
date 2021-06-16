import {
  ActivityCardContainer,
  InfoContainer,
  ButtonClose,
  ButtonCheck,
  ButtonUncheck,
} from "./style";
import ButtonEdit from "../Buttons/ButtonEdit";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";

const ActivityCard = ({
  activity,
  patchActivities,
  deleteActivity,
  showArchived,
  patchSwitchArchived
}) => {
  const { id, title, realization_time } = activity;
  const date = new Date(realization_time);
  return (
    <ActivityCardContainer key={id}>
      <ButtonClose onClick={() => deleteActivity(activity)}>
        <IoClose className="close" />
      </ButtonClose>
      {showArchived ? (
        <>
        <InfoContainer>
          <h2>{title}</h2>
          <h3>{date.toLocaleTimeString().slice(0,5) + "h - " + date.toLocaleDateString()}</h3>
        </InfoContainer>
        <ButtonUncheck onClick={() => patchSwitchArchived(activity, "activate")}>
          <RiArrowGoBackLine className="uncheck" />
        </ButtonUncheck>
        </>
      ) : (
        <>
        <InfoContainer>
          <h2>{title}</h2>
        </InfoContainer>
        <ButtonEdit></ButtonEdit>
        <ButtonCheck onClick={() => patchSwitchArchived(activity, "archieved")}>
          <FaCheck className="check" />
        </ButtonCheck>
        </>
      )}
    </ActivityCardContainer>
  );
};
export default ActivityCard;
