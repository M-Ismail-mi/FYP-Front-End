import '../App.css';
import { Outlet, Link } from "react-router-dom";

const Credentials = () => {
  return (
      <nav className="credentials--style">
        <h1 className='credentials--heading'>Immediate First Aid</h1>
        <button className="credentials--button">
            <Link to="/doctorportal" className="credentials--url">Cardiologist Portal</Link>
        </button>
        <button className="credentials--button">
            <Link to="/patientscreen" className="credentials--url">Patient Screen</Link>
        </button>

        <button className="credentials--button">
            <Link to="/homescreen" className="credentials--url">Home Screen</Link>
        </button>
        <Outlet />
      </nav>
      
  )
};

export default Credentials;