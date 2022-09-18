import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useMsal } from '@azure/msal-react';
import { SignInButton } from './components/security/SignInButton';
import { GetAuthenticatedUserInformationButton } from './components/security/GetAuthenticatedUserInformationButton';

const App = () => {
  const { accounts } = useMsal();

  const [ idToken, setIdToken ] = useState();

  useEffect(() => {
    if (idToken) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + idToken;
    }
  }, [idToken]);

  return (
    <div className="App">
      <header className="App-header">
        AAfD SignalR React Application
      </header>
      <div>
        { idToken ? <div>
          <span>Welcome, {accounts[0].idTokenClaims.preferred_username}!</span>
          <GetAuthenticatedUserInformationButton />
        </div> : <SignInButton setIdToken={setIdToken} /> }
      </div>
    </div>
  )
};

export default App;


