import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para la navegación

const Menu = () => {
  return (
    <div>
      <button>
        <Link to="/">Login</Link>
      </button>
      <button>
        <Link to="/home">Home</Link>
      </button>
    </div>
  );
};

export default Menu;
