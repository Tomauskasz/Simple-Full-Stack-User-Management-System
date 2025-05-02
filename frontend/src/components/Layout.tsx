import { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

interface LayoutProps {
  children: ReactNode;
  maxWidth?: number | string;
}

const Layout = ({ children, maxWidth = 'fit-content' }: LayoutProps) => {
  return (
    <Box sx={{ minHeight: '100vh', minWidth: '100vw' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Management
          </Typography>
          <Button
            color="inherit"
            component={RouterLink}
            to="/users/new"
            startIcon={<AddIcon />}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: '#ffcc80',
              },
            }}
          >
            Add User
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          my: '40px',
          width: '100%',
        }}
      >
        <Box sx={{ width: '100%', maxWidth, px: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout; 