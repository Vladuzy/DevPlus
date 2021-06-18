import ContactCard from "../ContactCard";
import Adyson from "../../img/Adyson.png";
import Caio from "../../img/Caio.jpg";
import Fernando from "../../img/Fernando.jpg";
import Rodrigo from "../../img/Rodrigo.jpeg";
import Leandro from "../../img/Leandro.jpg";
import { useState } from "react";
import { Container, Title } from "./style";

const ContactList = () => {
  const [people, setPeople] = useState([
    {
      name: "Adyson Bruno",
      image: Adyson,
      link: "https://www.linkedin.com/in/adysonbruno/",
      position: "P.O",
    },
    {
      name: "Caio Sampaio",
      image: Caio,
      link: "https://www.linkedin.com/in/caio-sampaio-894abc/",
      position: "Q.A",
    },
    {
      name: "Fernando Schneider",
      image: Fernando,
      link: "https://www.linkedin.com/in/fernando-schneider-dev/",
      position: "Tech-Leader",
    },
    {
      name: "Leandro Simões",
      image: Leandro,
      link: "https://www.linkedin.com/in/leandro-simões/",
      position: "Scrum-Master",
    },
    {
      name: "Rodrigo Ferraz",
      image: Rodrigo,
      link: "https://www.linkedin.com/in/how-dev-rodrigo/",
      position: "Q.A",
    },
  ]);
  return (
    <>
      <Title>
        <h1>Developers:</h1>
      </Title>
      <Container>
        {people.map((person) => (
          <ContactCard
            name={person.name}
            image={person.image}
            link={person.link}
            position={person.position}
          />
        ))}
      </Container>
    </>
  );
};

export default ContactList;
