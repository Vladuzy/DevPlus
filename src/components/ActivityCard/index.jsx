import { FaCheck } from "react-icons/fa";
import { ActivityCardContainer, InfoContainer, ButtonCheck } from "./style";

const ActivityCard = ({ activity, patchActivies }) => {
  const { id, title, realization_time, group } = activity;

  return (
    <ActivityCardContainer key={id}>
      <InfoContainer>
        <h2>{title}</h2>
        <h3>{realization_time}</h3>
        <h4>{group}</h4>
      </InfoContainer>
    </ActivityCardContainer>
  );
};
export default ActivityCard;
