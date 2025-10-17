import React from "react";
import { Clock, MapPin, AlertTriangle } from "lucide-react";

const RecentIncidents = () => {
  const incidents = [
    {
      id: 1,
      type: "Theft",
      location: "Block A, Parking Lot",
      time: "2 hours ago",
      status: "Open",
      priority: "high",
    },
    {
      id: 2,
      type: "Suspicious Activity",
      location: "Main Gate",
      time: "4 hours ago",
      status: "Under Review",
      priority: "medium",
    },
    {
      id: 3,
      type: "Accident",
      location: "Community Park",
      time: "6 hours ago",
      status: "Resolved",
      priority: "low",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Incidents
        </h3>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-red-50 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{incident.type}</h4>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{incident.location}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{incident.time}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                  incident.priority
                )}`}
              >
                {incident.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentIncidents;
