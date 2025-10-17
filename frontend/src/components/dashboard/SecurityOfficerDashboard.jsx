import React from "react";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import StatsCard from "./StatsCard";

const SecurityOfficerDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Security Operations Center</h1>
        <p className="text-blue-100">
          Monitor and respond to community security incidents.
        </p>
      </div>

      {/* Security Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Pending Review"
          value="5"
          subtitle="New incidents"
          icon={AlertTriangle}
          color="red"
        />
        <StatsCard
          title="Under Investigation"
          value="3"
          subtitle="Active cases"
          icon={Shield}
          color="yellow"
        />
        <StatsCard
          title="Resolved Today"
          value="8"
          subtitle="Completed cases"
          icon={CheckCircle}
          color="green"
        />
        <StatsCard
          title="Messages"
          value="4"
          subtitle="Awaiting response"
          icon={MessageSquare}
          color="blue"
        />
      </div>

      {/* Incident Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Incident Queue
          </h3>
          {/* Incident list for review */}
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-4 border border-gray-200 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h4 className="font-medium">Suspicious Activity - Block B</h4>
                  <p className="text-sm text-gray-500">Reported 30 mins ago</p>
                </div>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50">
              Broadcast Alert
            </button>
            <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50">
              View Patrol Map
            </button>
            <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50">
              Generate Daily Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityOfficerDashboard;
