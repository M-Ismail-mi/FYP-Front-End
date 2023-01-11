import '../App.css';
import logo from "../images/maleProfile.jpg"
import notify from "../images/notification.png"
const PatientScreen = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h3 className="header--name">Immediate First Aid</h3>
        <p className="header--profilename">Patient Profile</p>
        <input className="header--searchbar" type="text" placeholder="Search" />
        <img className="header--notifyicon" src={notify} alt="icon_image" />
        <img className="header--profileimage" src={logo} alt="name" />
      </header>

      {/* Navbar */}

      <div className="patient-leftside-navbar">
            <a href='back.html' className="url">&lt; BACK</a>
            <a href="overview.html" className="url">OVERVIEW</a>
            <a href="cardio.html"  className="url">CARDIOGRAM</a>
            <a href="medication.html" className="url">MEDICATIONS</a>
            <a href="reports.html" className="url">REPORTS</a>
            <a href="history.html" className="url">HISTORY</a>
            <a href="notes.html" className="url">NOTES</a>
            <a href="patientinfo.html" className="url">PERSONAL INFO</a>
        </div>

      {/* Main */}
      <section>
        <h2 className="interface-category">PATIENT PROFILE</h2>
        <div className="plot-ecg">
          <p>Cardiogram</p>
        </div>
        <a href="ecg.jpg" className="display-ecg">Detailed View</a>
      </section>
    </div>
  )
};

export default PatientScreen;