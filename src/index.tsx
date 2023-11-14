import ReactDOM from 'react-dom/client'; 
import './index.css'
import App from './app/App';
import { UserProvider } from 'app/providers/UserProvider/UserProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserProvider>
    <App/>
  </UserProvider>
  
);
