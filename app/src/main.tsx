import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WebApp from '@twa-dev/sdk'
import { MetaMaskProvider } from "@metamask/sdk-react";

WebApp.ready();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MetaMaskProvider
      debug={true}
      sdkOptions={{
        dappMetadata: {
          name: "Stone NFT",
          url:"https://stone-nft.vercel.app"
        },
        storage: {
          enabled: true,
        },
        infuraAPIKey: process.env.INFURA_API_KEY,
      }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>
);
