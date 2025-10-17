import React from "react";
import {
  Users,
  AlertTriangle,
  BarChart3,
  Settings,
  Shield,
} from "lucide-react";
import StatsCard from "./StatsCard";

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Admin Control Center</h1>
        <p className="text-purple-100">
          Manage community security system and user permissions.
        </p>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value="247"
          subtitle="Registered residents"
          icon={Users}
          color="blue"
        />
        <StatsCard
          title="Active Incidents"
          value="15"
          subtitle="Requiring attention"
          icon={AlertTriangle}
          color="red"
        />
        <StatsCard
          title="Security Staff"
          value="8"
          subtitle="Active officers"
          icon={Shield}
          color="green"
        />
        <StatsCard
          title="Monthly Reports"
          value="12"
          subtitle="Generated this month"
          icon={BarChart3}
          color="purple"
        />
      </div>

      {/* Management Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Management */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            User Management
          </h3>
          <div className="space-y-3">
            <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-between">
              <span>Manage User Roles</span>
              <Users className="h-5 w-5 text-gray-400" />
            </button>
            <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-between">
              <span>View All Users</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                247
              </span>
            </button>
            <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-between">
              <span>Pending Approvals</span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                3
              </span>
            </button>
          </div>
        </div>

        {/* System Management */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            System Management
          </h3>
          <div className="space-y-3">
            <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-between">
              <span>Send Community Alert</span>
              <AlertTriangle className="h-5 w-5 text-gray-400" />
            </button>
            <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-between">
              <span>Generate Analytics</span>
              <BarChart3 className="h-5 w-5 text-gray-400" />
            </button>
            <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-between">
              <span>System Settings</span>
              <Settings className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent System Activity
        </h3>
        <div className="space-y-3">
          {[
            {
              action: "New user registration",
              user: "John Doe",
              time: "10 mins ago",
            },
            {
              action: "Incident reported",
              user: "Block B - Theft",
              time: "25 mins ago",
            },
            {
              action: "Security officer assigned",
              user: "Mike Security",
              time: "1 hour ago",
            },
            {
              action: "Monthly report generated",
              user: "October Report",
              time: "2 hours ago",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.user}</p>
              </div>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
