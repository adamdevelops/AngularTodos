import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    issuer: 'https://accounts.google.com', // Google as OAuth provider
    clientId: '<YOUR_GOOGLE_CLIENT_ID>', // Replace with actual Client ID
    redirectUri: window.location.origin, // Redirect after login
    postLogoutRedirectUri: window.location.origin,
    responseType: 'token', // or 'code' for PKCE flow
    scope: 'openid profile email', // Request necessary scopes
    showDebugInformation: true, // Enable debugging
    strictDiscoveryDocumentValidation: false,
};