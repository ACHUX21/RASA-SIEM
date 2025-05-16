
import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Incidents critiques</h2>
        <ul>
          <li>Incident 1 - Critique</li>
          <li>Incident 2 - Moyen</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Logs récents</h2>
        <p>Log 1: Auth failed...</p>
        <p>Log 2: Suspicious login...</p>
      </div>
    </div>
  );
};

export default Dashboard;
