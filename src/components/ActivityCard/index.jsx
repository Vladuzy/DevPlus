import { 
  ActivityCardContainer, 
  InfoContainer, 
  ButtonClose, 
  ButtonCheck, 
  ButtonUncheck
} from "./style";

import { FaCheck } from 'react-icons/fa';
import { IoClose } from "react-icons/io5"
import { RiArrowGoBackLine } from "react-icons/ri"

  const ActivityCard = ({ activity, patchActivies, deleteActivity }) => {
  const { id, title, realization_time } = activity;

  return (
    <ActivityCardContainer key={id}>
      <ButtonClose onClick={ () => deleteActivity(activity)}><IoClose className="close"/></ButtonClose>
      <InfoContainer>
        <h2>{title}</h2>
        <h3>{realization_time}</h3>
      </InfoContainer>
      <ButtonCheck onClick={ () => patchActivies(activity, "archieved")}><FaCheck className="check" /></ButtonCheck>

      {/* {
                (showArchived)? (
                    <ButtonUncheck onClick={ () => patchActivies(activity, "activate")}><RiArrowGoBackLine className="uncheck" /></ButtonUncheck>
                ) : (
                    <ButtonCheck onClick={ () => patchActivies(activity, "archieved")}><FaCheck className="check" /></ButtonCheck>
                )
            } */}
    </ActivityCardContainer>
  );
};
export default ActivityCard;
