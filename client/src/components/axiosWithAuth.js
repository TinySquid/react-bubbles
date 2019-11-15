import axios from 'axios';

export const axiosWithAuth = () => {
  const token = sessionStorage.getItem('token');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    },
  });
};