import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div>
      <div>
        <h3>Current User Data:</h3>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Login</h3>
        <Login lData={userData} />
      </div>
      <div>
        <h3>Registration</h3>
        <Registration regData={setUserData} />
      </div>
    </div>
  );
}

export default App;
