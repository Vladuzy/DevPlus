import HabitsList from "../../components/HabitsList";

const Habits = ({showArchived}) => {
    
    return(
        <div>
            <HabitsList
                showArchived = {showArchived}
            />
        </div>
    )
}

export default Habits;