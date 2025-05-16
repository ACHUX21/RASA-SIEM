
import React from "react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Intelligent SIEM Dashboard</h1>
      <Dashboard />

      {}
      <div className="fixed bottom-4 right-4 w-96 h-96 border shadow-2xl rounded-2xl overflow-hidden">
        <iframe
          src="http://localhost:5005"
          title="Rasa Chatbot"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default App;
