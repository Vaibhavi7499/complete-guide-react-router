import { useContext } from "react";
import { NameContext } from "../../contexts/NameContext";


const Contact = () => {

  const {name} = useContext(NameContext);

  return <div>
    <h1>{name}</h1>
  </div>;
};

export default Contact;
