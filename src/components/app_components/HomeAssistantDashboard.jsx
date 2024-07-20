import React from 'react';

export const HomeAssistantDashboard = () => {
  const url = "http://192.168.1.15:8123"; // URL of your Home Assistant instance

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe 
        src={url} 
        style={{ height: '100%', width: '100%' }} 
        title="Home Assistant Dashboard"
      ></iframe>
    </div>
  );
};

