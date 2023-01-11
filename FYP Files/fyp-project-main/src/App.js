import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorPortal from "./pages/DoctorPortal";
import Home from "./pages/Home"
import PatientScreen from "./pages/PatientScreen";
import Credential from "./pages/credentials"
export default function App() {
  return (
    <BrowserRouter>
	
      <Routes>
        <Route path="/" element={<Credential/>}></Route>
        <Route path="/doctorportal" element={<DoctorPortal/>}></Route>
        <Route path="/patientscreen" element={<PatientScreen/>}></Route>
        <Route path="/homescreen" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

