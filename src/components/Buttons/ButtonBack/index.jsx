import { IoMdArrowRoundBack } from "react-icons/io";
import { BackFooterImg, TitleFooter } from "./style";
import { useHistory } from "react-router-dom";
const ButtonBack = ({...rest}) => {
  // const history = useHistory();

  // const sendTo = (path) => {
  //   history.push(path);
  // };

  // const handleGoBack = () => {
  //   sendTo(history.goBack());
  // };
  return (
    <BackFooterImg type="button" {...rest}>
      <IoMdArrowRoundBack className="backArrow"></IoMdArrowRoundBack>
      <TitleFooter>Voltar</TitleFooter>
    </BackFooterImg>
  );
};
export default ButtonBack;
