import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SisenseContextProvider } from '@sisense/sdk-ui';



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


