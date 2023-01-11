// Rendering all the components of Patient Profile Screen
import '../App.css';
import logo from "../images/maleProfile.jpg"
import notify from "../images/notification.png"

const DoctorPortal = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h3 className="header--name">Immediate First Aid</h3>
        <p className="header--profilename">Welcome Dr. Arthur</p>
        <input className="header--searchbar" type="text" placeholder="Search"/>
        <img className="header--notifyicon" src={notify} alt="icon_image"/>
        <img className="header--profileimage" src={logo} alt="name"/>
      </header>   

      {/* Navbar */}
      <div className="leftside-navbar">
            <p className="text-style">MENU</p>  
            <a href="overview.html" className="url">DASHBOARD</a>
            <a href="cardio.html"  className="url">ALL PATIENTS</a>
            <a href="medication.html" className="url">CRITICAL PATIENTS</a>
            <a href="reports.html" className="url">REPORTS</a>
            <a href="history.html" className="url">ASSIGNED ASSISTANTS</a>
            <a href="notes.html" className="url">SEND UPDATES</a>
            <a href="patientinfo.html" className="url">UPCOMING APPOINMENTS</a>
            <a href="patientinfo.html" className="url">ADD NEW PATIENTS</a>
            <a href="patientinfo.html" className="url">REMOVE HEALTHY PATIENTS</a>
      </div>

      {/* Main */}
      <section>
        <h2 className="interface-category">CRITICAL PATIENTS</h2>
          <div className="plot-ecg">
            <p>Cardiogram</p>      
          </div>
        <a href="ecg.jpg" className="display-ecg">Detailed View</a>
      </section>
    </div>
  )
}
export default DoctorPortal