import '../App.css';
import logo from "../images/maleProfile.jpg"
import notify from "../images/notification.png"
const Home = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h3 className="header--name">Immediate First Aid</h3>
        <p className="header--profilename">Welcome Mr.Joseph</p>
        <input className="header--searchbar" type="text" placeholder="Search" />
        <img className="header--notifyicon" src={notify} alt="icon_image" />
        <img className="header--profileimage" src={logo} alt="name" />
      </header>

      {/* Navbar */}
      <div className="leftside-navbar">
        <p className="text-style">MENU</p>
        <a href="overview.html" className="url">HOME</a>
        <a href="cardio.html" className="url">CARDIOGRAM</a>
        <a href="medication.html" className="url">MEDICATIONS</a>
        <a href="reports.html" className="url">REPORTS</a>
        <a href="history.html" className="url">UPDATES</a>
        <a href="notes.html" className="url">RECOMMENDATIONS</a>
        <a href="patientinfo.html" className="url">UPCOMING APPOINMENTS</a>
        <a href="patientinfo.html" className="url">DOCTOR'S PROFILE</a>
      </div>

      {/* Main */}
      <section>
        <h2 className="interface-category">HOME</h2>
        <div className="plot-ecg">
          <p>Cardiogram</p>
        </div>
        <a href="ecg.jpg" className="display-ecg">Detailed View</a>
      </section>
    </div>
  )
};

export default Home;