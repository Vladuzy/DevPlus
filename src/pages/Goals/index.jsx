import GoalsList from "../../components/GoalsList";

const Goals = ({showArchived}) => {
    
    return(
        <div>
            <GoalsList
                showArchived = {showArchived}
            />
        </div>
    )
}

export default Goals;