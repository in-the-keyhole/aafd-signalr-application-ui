const msalConfigurationByHostname = {
    'localhost': {
        'clientId': '6cbc6789-c3f3-46d2-84fb-b03bb0558d9f',
        'redirectUri': 'http://localhost:3000/' 
    }
}

const getClientId = () => {
    const hostnameMSALConfiguration = msalConfigurationByHostname[document.location.hostname];

    if (!hostnameMSALConfiguration) {
        throw new Error('No mapping exists between hostname ' + document.location.hostname + ' for client id');
    }

    return hostnameMSALConfiguration.clientId;
};

const getRedirectUri = () => {
    const hostnameMSALConfiguration = msalConfigurationByHostname[document.location.hostname];

    if (!hostnameMSALConfiguration) {
        throw new Error('No mapping exists between hostname ' + document.location.hostname + ' for redirect uri');
    }

    return hostnameMSALConfiguration.redirectUri;
};

export const msalConfig = {
    auth: {
        clientId: getClientId(),
        authority: 'https://login.microsoftonline.com/3fbef3f1-5db1-4829-b968-850575dc2a1b',
        redirectUri: getRedirectUri()
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false
    }
};

export const loginRequest = {
    scopes: [
        'User.Read'
    ]
};

export const graphConfig = {
    graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me'
};


