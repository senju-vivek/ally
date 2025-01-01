import React from 'react';

const QuickActions = () => {
  return (
    <div className="p-4 space-y-4">
       
      <nav className="flex items-center justify-between text-black">
        <span className="font-bold">Quick Actions</span>
      </nav>

       
      <div className="flex flex-col space-y-4">
        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
          New Password
        </button>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
          Order Status
        </button>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
          Refund
        </button>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
          Re-ship
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
