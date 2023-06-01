import { Box, NavLink as MantineNavLink, Navbar } from '@mantine/core';
import { NavLink } from 'react-router-dom';

export const AppNavBar = () => {
  return (
    <Navbar
      width={{ base: 200 }}
      p="xs"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/kol-avatar">KOL Avatar</NavLink>
        <NavLink to="/campaign">CAMPAIGN</NavLink>
        <NavLink to="/media">MEDIA GALLERY</NavLink>
        <NavLink to="/profile">PROFILE</NavLink>
        <NavLink to="/billing">BILLING</NavLink>
        <NavLink to="/campaign">test</NavLink>
      </Box>
      <MantineNavLink label="LOG OUT" />
    </Navbar>
  );
};
