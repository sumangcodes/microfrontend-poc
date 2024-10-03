import React from 'react';
import './AppComponent2.css'; // Importing the CSS file

const AppComponent2 = () => {
  const appName = "My Cool Microfrontend Remote App";
  const ipAddress = window.location.hostname; // This gets the hostname (IP or domain)
  const port = window.location.port; // This gets the port number
  const techInfo = "Built with React, Node.js, and Express";

  return (
    <div className="container"> {/* Apply the container class */}
      <h1>{appName}</h1>
      <p><strong>IP Address:</strong> {ipAddress}</p>
      <p><strong>Port:</strong> {port ? port : "Default port (80 for HTTP or 443 for HTTPS)"}</p>
      <p><strong>Tech Info:</strong> {techInfo}</p>
    </div>
  );
};

export default AppComponent2;
