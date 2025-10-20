import React from "react";
import { MessageSquare } from "lucide-react";

const Messages = () => {
  return (
    <div className="p-6">
      <div className="text-center py-12">
        <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Messages</h2>
        <p className="text-gray-600 mb-6">
          Chat with security officers and community members
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-yellow-800">Messages feature coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;
