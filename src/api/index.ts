import { create } from 'apisauce';

// Define the api
const api = create({
  baseURL: 'https://api.github.com/repos/hungluong-asnet/demo-api/issues',

  headers: {
    Accept: 'application/json',
    Authorization: 'token',
  },
});

api.setHeader(
  'Authorization',
  `Bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
);

export default api;
