import { Container } from "../ContactCard/style";
import { AiFillLinkedin } from "react-icons/ai";

const ContactCard = ({ name, image, link, position }) => {
  return (
    <Container>
      <img src={image} alt="" />
      <a href={link}>
        {name} <AiFillLinkedin className="icon" />{" "}
      </a>
      <h3>{position}</h3>
    </Container>
  );
};
export default ContactCard;
