import React, { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle,
  Eye,
  User,
} from "lucide-react";

const ResidentIncidents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const categories = [
    "All",
    "Theft",
    "Suspicious Activity",
    "Accident",
    "Vandalism",
    "Noise Complaint",
    "Parking Issue",
    "Safety Hazard",
    "Other",
  ];

  const statuses = ["All", "Open", "Under Review", "Investigating", "Resolved"];

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
      reporter: "You",
      images: 2,
      myReport: true,
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
      reporter: "Sarah M.",
      images: 1,
      myReport: false,
    },
    {
      id: 3,
      title: "Fallen Tree",
      category: "Safety Hazard",
      description: "Large tree branch blocking pedestrian path",
      location: "Near Block C",
      timestamp: "2024-01-14 16:45",
      status: "Resolved",
      priority: "medium",
      reporter: "Mike R.",
      images: 0,
      myReport: false,
    },
    {
      id: 4,
      title: "Noise Complaint",
      category: "Noise Complaint",
      description: "Loud music after midnight",
      location: "Block B, Unit 205",
      timestamp: "2024-01-14 23:30",
      status: "Open",
      priority: "low",
      reporter: "You",
      images: 0,
      myReport: true,
    },
    {
      id: 5,
      title: "Graffiti",
      category: "Vandalism",
      description: "Spray paint on community center wall",
      location: "Community Center",
      timestamp: "2024-01-14 09:20",
      status: "Resolved",
      priority: "low",
      reporter: "Security Team",
      images: 1,
      myReport: false,
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "text-blue-600 bg-blue-50";
      case "Under Review":
        return "text-yellow-600 bg-yellow-50";
      case "Investigating":
        return "text-orange-600 bg-orange-50";
      case "Resolved":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const filteredIncidents = incidents.filter((incident) => {
    const matchesSearch =
      incident.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || incident.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || incident.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Community Incidents
          </h1>
          <p className="text-gray-600 mt-1">
            Browse and track security incidents in your community
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex space-x-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800">
            <User className="h-4 w-4 mr-1" />
            Resident View
          </span>
        </div>
      </div>

      {/* Personal Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">My Reports</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {incidents.filter((i) => i.myReport).length}
              </p>
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
                Active in Community
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {incidents.length}
              </p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Resolved</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {incidents.filter((i) => i.status === "Resolved").length}
              </p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search incidents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {statuses.map((status) => (
                <option
                  key={status}
                  value={status.toLowerCase().replace(" ", "_")}
                >
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {selectedCategory !== "all" && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
              Category: {selectedCategory}
              <button
                onClick={() => setSelectedCategory("all")}
                className="ml-1 hover:text-gray-900"
              >
                ×
              </button>
            </span>
          )}
          {selectedStatus !== "all" && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
              Status: {selectedStatus.replace("_", " ")}
              <button
                onClick={() => setSelectedStatus("all")}
                className="ml-1 hover:text-gray-900"
              >
                ×
              </button>
            </span>
          )}
          {searchTerm && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
              Search: "{searchTerm}"
              <button
                onClick={() => setSearchTerm("")}
                className="ml-1 hover:text-gray-900"
              >
                ×
              </button>
            </span>
          )}
        </div>
      </div>

      {/* Incidents List */}
      <div className="space-y-4">
        {filteredIncidents.map((incident) => (
          <div
            key={incident.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {incident.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                        incident.priority
                      )}`}
                    >
                      {incident.priority.toUpperCase()}
                    </span>
                    {incident.myReport && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                        YOUR REPORT
                      </span>
                    )}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      incident.status
                    )}`}
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
                  {incident.images > 0 && (
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>
                        {incident.images} photo
                        {incident.images !== 1 ? "s" : ""}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-3">
                  <span className="text-sm text-gray-500">
                    Reported by:{" "}
                    <span
                      className={
                        incident.myReport
                          ? "text-primary-600 font-medium"
                          : "text-gray-700"
                      }
                    >
                      {incident.reporter}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredIncidents.length === 0 && (
          <div className="text-center py-12">
            <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No incidents found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResidentIncidents;
