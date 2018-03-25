import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'pedal-head.auth0.com',
    clientID: 'E5lu3QF33PKVrxu17dFdJqDmuWz0ylK0',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://pedal-head.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });
}
