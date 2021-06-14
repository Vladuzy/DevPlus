import HabitsList from "../../components/HabitsList";

const Habits = ({showArchived}) => {
    
    return(
        <HabitsList
            showArchived = {showArchived}
        />
    )
}

export default Habits;