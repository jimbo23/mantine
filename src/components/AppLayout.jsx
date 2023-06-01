import { AppShell } from '@mantine/core';
import { AppHeader } from './AppHeader';
import { AppNavBar } from './AppNavBar';

export const AppLayout = ({ children }) => (
  <AppShell padding="md" navbar={<AppNavBar />} header={<AppHeader />}>
    {children}
  </AppShell>
);
