import {GoalCardContainer, InfoContainer, ButtonCheck} from "./style"

import { FaCheck } from 'react-icons/fa';

const GoalCard = ({goal, patchGoal}) => {
    //Desestruturar
    //Tentar fazer uma barrinha em função de 100%
    //Lembrar de limitar o tamanho do titulo
    //Progresso de 0 a 100
    //Limitar Dificuldade
    //Verificar se está escrito

    const {id, title, difficulty, how_much_achieved} = goal;

    return(
        <GoalCardContainer key={id}>
            <InfoContainer>
                <h2>{title}</h2>
                <h3>{difficulty}</h3>
                <h4>{how_much_achieved}</h4>
            </InfoContainer>
            <ButtonCheck onClick={ () => patchGoal(goal)}><FaCheck className="check" /></ButtonCheck>
        </GoalCardContainer>
    )
}

export default GoalCard;