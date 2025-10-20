import React from "react";
import {
  LayoutDashboard,
  AlertTriangle,
  Map,
  MessageSquare,
  Settings,
  FileText,
  Users,
  Shield,
  BarChart3,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Base menu items for all roles
  const baseMenuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: AlertTriangle, label: "Incidents", path: "/incidents" },
    { icon: Map, label: "Map View", path: "/map" },
  ];

  // Role-specific menu items
  const roleMenuItems = {
    resident: [{ icon: MessageSquare, label: "Messages", path: "/messages" }],
    security_officer: [
      { icon: Shield, label: "Patrol", path: "/patrol" },
      { icon: MessageSquare, label: "Communications", path: "/communications" },
    ],
    admin: [
      { icon: Users, label: "User Management", path: "/users" },
      { icon: BarChart3, label: "Analytics", path: "/analytics" },
      { icon: FileText, label: "Reports", path: "/reports" },
    ],
  };

  // Common items for all roles
  const commonItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const menuItems = [
    ...baseMenuItems,
    ...(roleMenuItems[user?.role] || []),
    ...commonItems,
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    // Handle root path and dashboard
    if (
      path === "/dashboard" &&
      (location.pathname === "/" || location.pathname === "/dashboard")
    ) {
      return true;
    }
    // Handle exact matches and sub-paths
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div
            className={`w-3 h-3 rounded-full ${
              user?.role === "resident"
                ? "bg-green-500"
                : user?.role === "security_officer"
                ? "bg-blue-500"
                : "bg-purple-500"
            }`}
          ></div>
          <div>
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500 capitalize">
              {user?.role?.replace("_", " ")}
            </p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    active
                      ? "bg-primary-50 text-primary-700 border-r-2 border-primary-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
