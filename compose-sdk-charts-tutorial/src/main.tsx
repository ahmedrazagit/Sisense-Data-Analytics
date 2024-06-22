import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SisenseContextProvider } from '@sisense/sdk-ui';

const sisenseContextProviderArgs = () => {
  const baseOptions = {
    url: import.meta.env.VITE_APP_SISENSE_URL,
    defaultDataSource: 'Sample ECommerce',
  };
  const wat = import.meta.env.VITE_APP_SISENSE_WAT;
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjY3NTk3NDYxY2MzMjgwMDJlZjliOTQ2IiwiYXBpU2VjcmV0IjoiNTQ5ODk5MzctNmVjZS0zMDNlLTEyZDMtNjYwNTQ0YjVhYzhjIiwiYWxsb3dlZFRlbmFudHMiOlsiNjNhZGQxMGVkOGRiMWMwMDFiN2UxZjI3Il0sInRlbmFudElkIjoiNjNhZGQxMGVkOGRiMWMwMDFiN2UxZjI3IiwiaWF0IjoxNzE4OTgyNDcwfQ.WWHr9pAZhBxqq2yaMW2WnpFgaK5jcbepoSZ7zlX7xjo';
  const ssoEnabled = import.meta.env.VITE_APP_SISENSE_SSO_ENABLED;

  if (ssoEnabled) {
    return { ...baseOptions, ssoEnabled: ssoEnabled?.toLowercase() === 'true' };
  } else if (wat) {
    return { ...baseOptions, wat };
  } else if (token) {
    return { ...baseOptions, token };
  } else {
    return baseOptions;
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SisenseContextProvider {...sisenseContextProviderArgs()}
      url='http://localhost:5173/'
      token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjY3NTk3NDYxY2MzMjgwMDJlZjliOTQ2IiwiYXBpU2VjcmV0IjoiNTQ5ODk5MzctNmVjZS0zMDNlLTEyZDMtNjYwNTQ0YjVhYzhjIiwiYWxsb3dlZFRlbmFudHMiOlsiNjNhZGQxMGVkOGRiMWMwMDFiN2UxZjI3Il0sInRlbmFudElkIjoiNjNhZGQxMGVkOGRiMWMwMDFiN2UxZjI3IiwiaWF0IjoxNzE4OTgyNDcwfQ.WWHr9pAZhBxqq2yaMW2WnpFgaK5jcbepoSZ7zlX7xjo'
    >
      <App />
    </SisenseContextProvider>
  </React.StrictMode>
);


