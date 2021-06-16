import {GoalCardContainer, InfoContainer, ButtonClose, ButtonCheck, ButtonUncheck, ProgressBar} from "./style"

import { FaCheck } from 'react-icons/fa';
import { IoClose } from "react-icons/io5"
import { RiArrowGoBackLine } from "react-icons/ri"
import {useAuth} from "../../providers/AuthProvider"

const GoalCard = ({goal, patchGoal, deleteGoal, showArchived}) => {
    //Desestruturar
    //Tentar fazer uma barrinha em função de 100%
    //Lembrar de limitar o tamanho do titulo
    //Progresso de 0 a 100
    //Limitar Dificuldade
    //Verificar se está escrito
    const {isSubscribe} = useAuth();
    const {id, title, difficulty, how_much_achieved} = goal;

    return(
        <GoalCardContainer key={id}>
           {
                (isSubscribe) ? (
                    <>
                        <ButtonClose onClick={ () => deleteGoal(goal)}><IoClose className="close"/></ButtonClose>
                        <InfoContainer>
                            <h2>{title}</h2>
                            <h3>{difficulty}</h3>
                            <ProgressBar progress={how_much_achieved}>
                                <span></span>
                            </ProgressBar>
                        </InfoContainer>
                        {
                            (showArchived)? (
                                <ButtonUncheck onClick={ () => patchGoal(goal, "activate")}><RiArrowGoBackLine className="uncheck" /></ButtonUncheck>
                            ) : (
                                <ButtonCheck onClick={ () => patchGoal(goal, "archieved")}><FaCheck className="check" /></ButtonCheck>
                            )
                        }
                    </>
                ) : (
                    <InfoContainer>
                        <h2>{title}</h2>
                        <h3>{difficulty}</h3>
                        <ProgressBar progress={how_much_achieved}>
                            <span></span>
                        </ProgressBar>
                    </InfoContainer>
                )
           } 
            
        </GoalCardContainer>
    )
}

export default GoalCard;