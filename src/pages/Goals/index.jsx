import GoalsList from "../../components/GoalsList";

const Goals = ({showArchived}) => {
    
    return(
        <GoalsList
            showArchived = {showArchived}
        />
    )
}

export default Goals;