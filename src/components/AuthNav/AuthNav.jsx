import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const AuthNav = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (pathname === '/register') {
      setValue(1);
    }
  }, [pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab
          style={{ color: 'white' }}
          component={NavLink}
          label="LOGIN"
          to="/login"
        />
        <Tab
          style={{ color: 'white' }}
          component={NavLink}
          label="REGISTER"
          to="/register"
        />
      </Tabs>
    </Box>
  );
};
export default AuthNav;
