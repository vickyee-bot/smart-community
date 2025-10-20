import React from "react";
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6">
      <div className="text-center py-12">
        <SettingsIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Settings</h2>
        <p className="text-gray-600 mb-6">
          Manage your account preferences and notifications
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-yellow-800">Settings feature coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
