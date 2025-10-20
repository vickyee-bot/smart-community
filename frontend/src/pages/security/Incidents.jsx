import React, { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle,
  Eye,
  Shield,
  User,
  MessageSquare,
} from "lucide-react";

const SecurityIncidents = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);

  const incidents = [
    {
      id: 1,
      title: "Car Break-in",
      category: "Theft",
      description: "Car window smashed and items stolen from vehicle",
      location: "Block A Parking Lot",
      timestamp: "2024-01-15 14:30",
      status: "Under Review",
      priority: "high",
      reporter: { name: "John Doe", phone: "555-0101", unit: "A-205" },
      images: 2,
      assignedTo: "You",
    },
    {
      id: 2,
      title: "Suspicious Person",
      category: "Suspicious Activity",
      description: "Unknown individual loitering near playground",
      location: "Community Park",
      timestamp: "2024-01-15 12:15",
      status: "Investigating",
      priority: "medium",
      reporter: { name: "Sarah M.", phone: "555-0102", unit: "B-110" },
      images: 1,
      assignedTo: "Officer Smith",
    },
  ];

  const updateStatus = (incidentId, newStatus) => {
    console.log(`Updating incident ${incidentId} to ${newStatus}`);
    // API call would go here
  };

  const assignToMe = (incidentId) => {
    console.log(`Assigning incident ${incidentId} to current officer`);
    // API call would go here
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Incident Management
          </h1>
          <p className="text-gray-600 mt-1">
            Review and manage security incidents
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex space-x-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
            <Shield className="h-4 w-4 mr-1" />
            Security Operations
          </span>
        </div>
      </div>

      {/* Action Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Assigned to Me
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <User className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Pending Review
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">5</p>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Investigating</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
            </div>
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Resolved Today
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Incidents List with Actions */}
      <div className="space-y-4">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {incident.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        incident.priority === "high"
                          ? "bg-red-100 text-red-800"
                          : incident.priority === "medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {incident.priority.toUpperCase()}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      incident.status === "Under Review"
                        ? "bg-yellow-100 text-yellow-800"
                        : incident.status === "Investigating"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {incident.status}
                  </span>
                </div>

                <p className="text-gray-600 mt-2">{incident.description}</p>

                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{incident.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{incident.timestamp}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">{incident.category}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Assigned to: {incident.assignedTo}</span>
                  </div>
                </div>

                {/* Reporter Info (Security Officers can see this) */}
                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    Reporter Information
                  </p>
                  <p className="text-sm text-gray-600">
                    {incident.reporter.name} • {incident.reporter.unit} •{" "}
                    {incident.reporter.phone}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col space-y-2">
                <button
                  onClick={() => updateStatus(incident.id, "Investigating")}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Start Investigation
                </button>
                <button
                  onClick={() => assignToMe(incident.id)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Assign to Me
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Message Reporter</span>
                </button>
                <button
                  onClick={() => updateStatus(incident.id, "Resolved")}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Mark Resolved
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityIncidents;
