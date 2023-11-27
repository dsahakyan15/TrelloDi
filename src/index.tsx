import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from 'entitles/redux/store';
import { UserProvider } from 'app/providers/UserProvider/UserProvider';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <UserProvider> */}
        <App />
      {/* </UserProvider> */}
    </Provider>
  </React.StrictMode>
);
