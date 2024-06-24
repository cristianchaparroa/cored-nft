import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WebApp from '@twa-dev/sdk'
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";


WebApp.ready();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MetaMaskUIProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
          url: window.location.href,
        },
        infuraAPIKey: process.env.INFURA_API_KEY,
      }}
    >
      <App />
    </MetaMaskUIProvider>
  </React.StrictMode>
);
