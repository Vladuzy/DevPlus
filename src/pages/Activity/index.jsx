import ActivityList from "../../components/ActivityList";

const Activity = ({showArchived}) => {
  return (
    <>
      <ActivityList showArchived ={showArchived}></ActivityList>
    </>
  );
};

export default Activity;
