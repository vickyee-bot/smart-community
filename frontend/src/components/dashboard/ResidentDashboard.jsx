import React, { useState } from "react";
import { AlertTriangle, MapPin, Bell, MessageSquare } from "lucide-react";
import StatsCard from "./StatsCard";
import RecentIncidents from "./RecentIncidents";
import ReportIncidentForm from "../incidents/ReportIncidentForm";

const ResidentDashboard = () => {
  const [isReportFormOpen, setIsReportFormOpen] = useState(false);

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-black">
        <h1 className="text-2xl font-bold mb-2">Community Safety Dashboard</h1>
        <p className="text-primary-100">
          Stay informed and report security concerns in your community.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="My Reports"
          value="3"
          subtitle="Incidents you reported"
          icon={AlertTriangle}
          color="blue"
        />
        <StatsCard
          title="Nearby Incidents"
          value="12"
          subtitle="Within 1km radius"
          icon={MapPin}
          color="red"
        />
        <StatsCard
          title="Active Alerts"
          value="2"
          subtitle="Community warnings"
          icon={Bell}
          color="yellow"
        />
        <StatsCard
          title="Messages"
          value="1"
          subtitle="Unread from security"
          icon={MessageSquare}
          color="green"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentIncidents />

        <div className="space-y-6">
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
        </div>
      </div>

      <ReportIncidentForm
        isOpen={isReportFormOpen}
        onClose={() => setIsReportFormOpen(false)}
      />
    </div>
  );
};

export default ResidentDashboard;
