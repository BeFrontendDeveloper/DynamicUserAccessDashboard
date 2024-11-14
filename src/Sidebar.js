import React from 'react';
import { Menu, Grid } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="sidebar-button">
        <Menu className="icon" />
      </button>
      <button className="sidebar-button">
        <Grid className="icon" />
      </button>
    </div>
  );
};

export default Sidebar;