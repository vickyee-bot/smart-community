import React, { useState } from "react";
import { MapPin, Filter, Navigation, ZoomIn, ZoomOut } from "lucide-react";

const MapView = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTime, setSelectedTime] = useState("24h");

  const categories = [
    "All",
    "Theft",
    "Suspicious Activity",
    "Accident",
    "Vandalism",
    "Safety Hazard",
  ];

  const timeFilters = ["24h", "7d", "30d", "All"];

  // Mock incident data with coordinates
  const incidents = [
    {
      id: 1,
      title: "Car Break-in",
      category: "Theft",
      location: "Block A Parking",
      coordinates: { x: 25, y: 60 },
      priority: "high",
      time: "2h ago",
      status: "Under Review",
    },
    {
      id: 2,
      title: "Suspicious Person",
      category: "Suspicious Activity",
      location: "Community Park",
      coordinates: { x: 70, y: 30 },
      priority: "medium",
      time: "4h ago",
      status: "Investigating",
    },
    {
      id: 3,
      title: "Fallen Tree",
      category: "Safety Hazard",
      location: "Near Block C",
      coordinates: { x: 50, y: 80 },
      priority: "medium",
      time: "1d ago",
      status: "Resolved",
    },
    {
      id: 4,
      title: "Graffiti",
      category: "Vandalism",
      location: "Community Center",
      coordinates: { x: 60, y: 50 },
      priority: "low",
      time: "1d ago",
      status: "Resolved",
    },
    {
      id: 5,
      title: "Car Accident",
      category: "Accident",
      location: "Main Gate",
      coordinates: { x: 80, y: 70 },
      priority: "high",
      time: "30m ago",
      status: "Open",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500 border-red-600";
      case "medium":
        return "bg-yellow-500 border-yellow-600";
      case "low":
        return "bg-green-500 border-green-600";
      default:
        return "bg-gray-500 border-gray-600";
    }
  };

  const getPriorityPulse = (priority) => {
    switch (priority) {
      case "high":
        return "animate-pulse";
      case "medium":
        return "";
      case "low":
        return "";
      default:
        return "";
    }
  };

  const filteredIncidents = incidents.filter(
    (incident) =>
      selectedCategory === "all" || incident.category === selectedCategory
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Incident Map</h1>
          <p className="text-gray-600 mt-1">
            Real-time view of security incidents in your community
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex space-x-3">
          <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center space-x-2">
            <Navigation className="h-4 w-4" />
            <span>My Location</span>
          </button>
        </div>
      </div>

      {/* Map Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category.toLowerCase().replace(" ", "_")}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Time Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Period
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {timeFilters.map((time) => (
                  <option key={time} value={time.toLowerCase()}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Map Controls */}
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <ZoomIn className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <ZoomOut className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="relative bg-gradient-to-br from-blue-50 to-green-50 h-96 lg:h-[500px]">
          {/* Community Layout */}
          <div className="absolute inset-0">
            {/* Roads */}
            <div className="absolute top-1/2 left-0 right-0 h-4 bg-gray-300 transform -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-gray-300 transform -translate-x-1/2"></div>

            {/* Buildings/Blocks */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-gray-200 rounded-lg border-2 border-gray-300"></div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-gray-200 rounded-lg border-2 border-gray-300"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-gray-200 rounded-lg border-2 border-gray-300"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-gray-200 rounded-lg border-2 border-gray-300"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gray-200 rounded-lg border-2 border-gray-300 transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Incident Markers */}
            {filteredIncidents.map((incident) => (
              <div
                key={incident.id}
                className={`absolute w-8 h-8 rounded-full border-2 ${getPriorityColor(
                  incident.priority
                )} ${getPriorityPulse(
                  incident.priority
                )} cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group`}
                style={{
                  left: `${incident.coordinates.x}%`,
                  top: `${incident.coordinates.y}%`,
                }}
              >
                <MapPin className="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 min-w-48">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {incident.title}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(
                          incident.priority
                        )} text-white`}
                      >
                        {incident.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {incident.location}
                    </p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{incident.time}</span>
                      <span>{incident.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* User Location */}
            <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-primary-500 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              Incident Priority
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-red-600"></div>
                <span className="text-sm text-gray-600">High Priority</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-yellow-600"></div>
                <span className="text-sm text-gray-600">Medium Priority</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-green-600"></div>
                <span className="text-sm text-gray-600">Low Priority</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Incident Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-800">High Priority</p>
              <p className="text-2xl font-bold text-red-900 mt-1">2</p>
            </div>
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <MapPin className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-800">
                Medium Priority
              </p>
              <p className="text-2xl font-bold text-yellow-900 mt-1">2</p>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <MapPin className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-800">Low Priority</p>
              <p className="text-2xl font-bold text-green-900 mt-1">1</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
