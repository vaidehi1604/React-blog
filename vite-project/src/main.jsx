import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-j2oz3hbv66c5c0qo.us.auth0.com"
  clientId="KSYk2zuuuHRKZPsvuRr63BZItKwFK8wt"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <App />
    </Auth0Provider>,
)
