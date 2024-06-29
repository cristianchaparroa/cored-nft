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
          name: "CoreDAO NFT",
          url:"cored-nft.vercel.app"
        },
        infuraAPIKey: process.env.INFURA_API_KEY,
      }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>
);
