import React, { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle,
  Trash2,
  BarChart3,
  Download,
  Users,
} from "lucide-react";

const AdminIncidents = () => {
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
      reporter: {
        name: "John Doe",
        email: "john@email.com",
        phone: "555-0101",
        unit: "A-205",
      },
      assignedTo: "Officer Mike",
      responseTime: "15 mins",
      images: 2,
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
      reporter: {
        name: "Sarah M.",
        email: "sarah@email.com",
        phone: "555-0102",
        unit: "B-110",
      },
      assignedTo: "Officer Smith",
      responseTime: "25 mins",
      images: 1,
    },
    {
      id: 3,
      title: "Noise Complaint",
      category: "Noise Complaint",
      description: "Loud music after midnight - false report",
      location: "Block B, Unit 205",
      timestamp: "2024-01-14 23:30",
      status: "Open",
      priority: "low",
      reporter: {
        name: "Tom B.",
        email: "tom@email.com",
        phone: "555-0103",
        unit: "C-305",
      },
      assignedTo: "Unassigned",
      responseTime: "45 mins",
      images: 0,
      flagged: true,
    },
  ];

  const analytics = {
    totalIncidents: 47,
    resolvedThisMonth: 32,
    avgResponseTime: "22 mins",
    falseReports: 3,
  };

  const deleteIncident = (incidentId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this incident? This action cannot be undone."
      )
    ) {
      console.log(`Deleting incident ${incidentId}`);
      // API call would go here
    }
  };

  const exportData = () => {
    console.log("Exporting incident data");
    // Export functionality would go here
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Incident Analytics
          </h1>
          <p className="text-gray-600 mt-1">
            System-wide incident management and reporting
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex space-x-3">
          <button
            onClick={exportData}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
          >
            <Download className="h-4 w-4" />
            <span>Export Data</span>
          </button>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
            <BarChart3 className="h-4 w-4 mr-1" />
            Admin View
          </span>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Incidents
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {analytics.totalIncidents}
              </p>
              <p className="text-xs text-gray-500 mt-1">This month</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Resolved</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {analytics.resolvedThisMonth}
              </p>
              <p className="text-xs text-gray-500 mt-1">68% resolution rate</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Response</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {analytics.avgResponseTime}
              </p>
              <p className="text-xs text-gray-500 mt-1">Response time</p>
            </div>
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">False Reports</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {analytics.falseReports}
              </p>
              <p className="text-xs text-gray-500 mt-1">Require review</p>
            </div>
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Trash2 className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Incidents List with Admin Actions */}
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
                    {incident.flagged && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        FLAGGED
                      </span>
                    )}
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{incident.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{incident.timestamp}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="font-medium">
                        Category: {incident.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>Assigned to: {incident.assignedTo}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>Response: {incident.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>Images: {incident.images}</span>
                    </div>
                  </div>
                </div>

                {/* Reporter Details (Admin can see full info) */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Reporter Details
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Name:</span>{" "}
                      {incident.reporter.name}
                    </div>
                    <div>
                      <span className="font-medium">Unit:</span>{" "}
                      {incident.reporter.unit}
                    </div>
                    <div>
                      <span className="font-medium">Contact:</span>{" "}
                      {incident.reporter.phone}
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Action Buttons */}
              <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col space-y-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  View Analytics
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Reassign Officer
                </button>
                {incident.flagged && (
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    Mark Valid
                  </button>
                )}
                <button
                  onClick={() => deleteIncident(incident.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Delete Report</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* System Health */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          System Health
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm font-medium text-green-800">
              Incident Reports
            </p>
            <p className="text-2xl font-bold text-green-900 mt-1">+12%</p>
            <p className="text-xs text-green-600 mt-1">Increase this month</p>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm font-medium text-yellow-800">Response Time</p>
            <p className="text-2xl font-bold text-yellow-900 mt-1">-8%</p>
            <p className="text-xs text-yellow-600 mt-1">
              Improved from last month
            </p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm font-medium text-blue-800">
              User Satisfaction
            </p>
            <p className="text-2xl font-bold text-blue-900 mt-1">94%</p>
            <p className="text-xs text-blue-600 mt-1">Positive feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIncidents;
