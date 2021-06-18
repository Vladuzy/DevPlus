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
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { useMotionValue, useTransform } from "framer-motion";
import { useActivity } from "../../providers/Activities";

const ActivityCard = ({
  activity,
  patchActivities,
  deleteActivity,
  showArchived,
  patchSwitchArchived,
  limit,
}) => {
  const { id, title, realization_time } = activity;
  const date = new Date(realization_time);
  const { isSubscribe } = useAuth();
  const history = useHistory();
  const { getOneActivity } = useActivity();

  //ANIMATION
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const opacityOutput = [0.7, 1, 0.7];
  const colorOutput = showArchived
    ? ["#F8565D", "#30444D", "#FBC442"]
    : ["#F8565D", "#30444D", "#3DD598"];
  const opacity = useTransform(x, xInput, opacityOutput);
  const background = useTransform(x, xInput, colorOutput);

  const handleEventDrag = (_, info) => {
    const {
      offset: { x },
    } = info;
    if (x > 170) {
      showArchived
        ? patchSwitchArchived(activity, "activate")
        : patchSwitchArchived(activity, "archieved");
    } else if (x < -170) {
      deleteActivity(activity);
    }
  };

  const handleEditionActivity = (value) => {
    getOneActivity(id);
    setTimeout(function () {
      history.push(`/edition/Atividade/${id}`);
    }, 700);
  };
  return (
    <ActivityCardContainer
      key={id}
      drag="x"
      dragConstraints={limit}
      dragElastic={0.3}
      style={{ x, background, opacity }}
      onDragEnd={(e, info) => handleEventDrag(e, info)}
    >
      {isSubscribe ? (
        <>
          <ButtonClose onClick={() => deleteActivity(activity)}>
            <IoClose className="close" />
          </ButtonClose>
          {showArchived ? (
            <>
              <InfoContainer>
                <h2>{title}</h2>
                <h3>
                  {date.toLocaleTimeString().slice(0, 5) +
                    "h - " +
                    date.toLocaleDateString()}
                </h3>
              </InfoContainer>
              <ButtonUncheck
                onClick={() => patchSwitchArchived(activity, "activate")}
              >
                <RiArrowGoBackLine className="uncheck" />
              </ButtonUncheck>
            </>
          ) : (
            <>
              <InfoContainer>
                <h2>{title}</h2>
              </InfoContainer>
              <ButtonEdit onClick={() => handleEditionActivity()}></ButtonEdit>
              <ButtonCheck
                onClick={() => patchSwitchArchived(activity, "archieved")}
              >
                <FaCheck className="check" />
              </ButtonCheck>
            </>
          )}
        </>
      ) : (
        <>
          {showArchived ? (
            <InfoContainer>
              <h2>{title}</h2>
              <h3>
                {date.toLocaleTimeString().slice(0, 5) +
                  "h - " +
                  date.toLocaleDateString()}
              </h3>
            </InfoContainer>
          ) : (
            <InfoContainer>
              <h2>{title}</h2>
            </InfoContainer>
          )}
        </>
      )}
    </ActivityCardContainer>
  );
};
export default ActivityCard;
