import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  TextField,
  Button,
  Paper,
  Typography,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';

interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
}

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserFormData>({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8000/api/users/${id}`);
      setFormData(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch user data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (id) {
        await axios.put(`http://localhost:8000/api/users/${id}`, formData);
      } else {
        await axios.post('http://localhost:8000/api/users', formData);
      }
      navigate('/');
    } catch (err) {
      setError('Failed to save user');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Paper sx={{ p: 4, border: '2px solid #1976d2', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom align="center" color="primary">
        {id ? 'Edit User' : 'Create User'}
      </Typography>
      {error && (
        <Typography color="error" gutterBottom align="center">
          {error}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 16 }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/')}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(175, 175, 175, 0.15)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {id ? 'Update' : 'Create'}
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default UserForm; 