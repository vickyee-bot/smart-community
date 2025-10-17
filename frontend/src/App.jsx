import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import ResidentDashboard from "./components/dashboard/ResidentDashboard";
import SecurityOfficerDashboard from "./components/dashboard/SecurityOfficerDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const AppContent = () => {
  const { user } = useAuth();

  const getDashboardComponent = () => {
    switch (user?.role) {
      case "resident":
        return <ResidentDashboard />;
      case "security_officer":
        return <SecurityOfficerDashboard />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <ResidentDashboard />;
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="flex">
                  <Sidebar />
                  <div className="flex-1 flex flex-col">
                    <Header />
                    <main className="flex-1 overflow-auto">
                      <Routes>
                        <Route path="/" element={getDashboardComponent()} />
                        <Route
                          path="/dashboard"
                          element={getDashboardComponent()}
                        />
                        <Route
                          path="/incidents"
                          element={
                            <div className="p-6">
                              Incidents Page - Coming Soon
                            </div>
                          }
                        />
                        <Route
                          path="/map"
                          element={
                            <div className="p-6">Map View - Coming Soon</div>
                          }
                        />
                        <Route
                          path="/messages"
                          element={
                            <div className="p-6">Messages - Coming Soon</div>
                          }
                        />
                        <Route
                          path="/patrol"
                          element={
                            <div className="p-6">
                              Patrol Management - Coming Soon
                            </div>
                          }
                        />
                        <Route
                          path="/communications"
                          element={
                            <div className="p-6">
                              Communications - Coming Soon
                            </div>
                          }
                        />
                        <Route
                          path="/users"
                          element={
                            <div className="p-6">
                              User Management - Coming Soon
                            </div>
                          }
                        />
                        <Route
                          path="/analytics"
                          element={
                            <div className="p-6">Analytics - Coming Soon</div>
                          }
                        />
                        <Route
                          path="/reports"
                          element={
                            <div className="p-6">Reports - Coming Soon</div>
                          }
                        />
                        <Route
                          path="/settings"
                          element={
                            <div className="p-6">Settings - Coming Soon</div>
                          }
                        />
                      </Routes>
                    </main>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
