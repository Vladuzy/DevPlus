import GoalsList from "../../components/GoalsList";

import { useState } from "react";

const Goals = () => {
    
    const [showArchived, setShowArchived] = useState(false)

    return(
        <div>
            <GoalsList
                showArchived = {showArchived}
            />
            <button onClick={() => setShowArchived(false)} >Ativos</button>
            <button onClick={() => setShowArchived(true)} >Feitos</button>
        </div>
    )
}

export default Goals;