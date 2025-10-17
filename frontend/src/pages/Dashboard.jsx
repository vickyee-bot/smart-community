import React, { useState } from "react";
import {
  AlertTriangle,
  FileText,
  CheckCircle,
  Bell,
  MapPin,
} from "lucide-react";
import StatsCard from "../components/dashboard/StatsCard";
import RecentIncidents from "../components/dashboard/RecentIncidents";
import ReportIncidentForm from "../components/incidents/ReportIncidentForm";

const Dashboard = () => {
  const [isReportFormOpen, setIsReportFormOpen] = useState(false);

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-black">
        <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-primary-100">
          Here's what's happening in your community today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Open Incidents"
          value="4"
          subtitle="Requiring attention"
          icon={AlertTriangle}
          color="red"
        />
        <StatsCard
          title="Recent Incidents"
          value="12"
          subtitle="Last 7 days"
          icon={FileText}
          color="blue"
        />
        <StatsCard
          title="Resolved"
          value="8"
          subtitle="This month"
          icon={CheckCircle}
          color="green"
        />
        <StatsCard
          title="Alerts"
          value="3"
          subtitle="Active warnings"
          icon={Bell}
          color="yellow"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Incidents */}
        <div className="lg:col-span-1">
          <RecentIncidents />
        </div>

        {/* Quick Actions & Alerts */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setIsReportFormOpen(true)}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <AlertTriangle className="h-5 w-5 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Report Incident
                </span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  View Map
                </span>
              </button>
            </div>
          </div>

          {/* Active Alerts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Active Alerts
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Bell className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-800">
                    Water Maintenance
                  </span>
                </div>
                <p className="text-sm text-yellow-700 mt-1">
                  Scheduled for tomorrow 2-4 PM
                </p>
              </div>
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-800">
                    Security Advisory
                  </span>
                </div>
                <p className="text-sm text-red-700 mt-1">
                  Report suspicious vehicles near Block C
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Incident Form Modal */}
      <ReportIncidentForm
        isOpen={isReportFormOpen}
        onClose={() => setIsReportFormOpen(false)}
        onSubmit={(data) => {
          console.log("Incident reported:", data);
          // Handle form submission here
        }}
      />
    </div>
  );
};

export default Dashboard;
