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
}) => {
  const { id, title, realization_time } = activity;
  const date = new Date(realization_time);
  return (
    <ActivityCardContainer key={id}>
      <ButtonClose onClick={() => deleteActivity(activity)}>
        <IoClose className="close" />
      </ButtonClose>
      <InfoContainer>
        <h2>{title}</h2>
        <h3>{date.toLocaleTimeString() + "h - " + date.toLocaleDateString()}</h3>
      </InfoContainer>
      <ButtonEdit></ButtonEdit>
      {showArchived ? (
        <ButtonUncheck onClick={() => patchActivities(activity, "activate")}>
          <RiArrowGoBackLine className="uncheck" />
        </ButtonUncheck>
      ) : (
        <ButtonCheck onClick={() => patchActivities(activity, "archieved")}>
          <FaCheck className="check" />
        </ButtonCheck>
      )}
    </ActivityCardContainer>
  );
};
export default ActivityCard;
