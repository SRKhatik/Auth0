import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './component/Login';
import Logout from './component/Logout';
import User from './component/User';

function App() {

  const {isAuthenticated} = useAuth0()
  return (
    <div className="App">
      {!isAuthenticated ? (
        <div> <Login /> </div>
      ) :(
        <div>
          <Logout />
          <User />
        </div>
      )}

    </div>
  );
}
export default App;
