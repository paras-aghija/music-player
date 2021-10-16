import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibActive, libActive }) => {
  return (
    <nav>
      <h1>Waves Music</h1>
      <button onClick={() => setLibActive(!libActive)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
