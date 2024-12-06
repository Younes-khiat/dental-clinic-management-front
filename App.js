import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ProfilePage from "./components/ProfilePage";
import StockManagement from './pages/StockManagement';
import ProstheticsManagement from './pages/ProstheticsManagement';
import CalendarPage from './pages/CalendarPage';
import RoleManagement from './pages/RoleManagement';
import AppointmentPage from './pages/Appointment';
import HomePage from "./pages/HomePage";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <main className="content">
        
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/stock" element={<StockManagement />} />
            <Route path="/prosthetics" element={<ProstheticsManagement />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/roles" element={<RoleManagement />} />
           <Route path="/appointment" element={<AppointmentPage />} /> 
           <Route path="/profile" element={<ProfilePage />} />
          </Routes>


        </main>
      </div>
    </Router>
    
  );
  
};

export default App;
