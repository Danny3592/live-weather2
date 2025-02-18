import React from 'react';
import { Outlet } from 'react-router';

const MainHeader = () => {
  return (
    <div>
      MainHeader
      <Outlet />
    </div>
  );
};

export default MainHeader;
