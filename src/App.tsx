import { useSDK } from '@metamask/sdk-react';
import './App.css';

export const App = () => {
  const { sdk, connected, connecting, provider, chainId, account, balance } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  const addEthereumChain = () => {
    if (!provider) {
      throw new Error(`invalid ethereum provider`);
    }


    provider
      .request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x89',
            chainName: 'Polygon',
            blockExplorerUrls: ['https://polygonscan.com'],
            nativeCurrency: { symbol: 'MATIC', decimals: 18 },
            rpcUrls: ['https://polygon-rpc.com/'],
          },
        ],
      })
      .then((res) => console.log('add', res))
      .catch((e) => console.log('ADD ERR', e));
  };

  const terminate = () => {
    sdk?.terminate();
  };

  const changeNetwork = async (hexChainId: string) => {
    console.debug(`switching to network chainId=${hexChainId}`);
    try {
      const response = await provider?.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: hexChainId }], // chainId must be in hexadecimal numbers
      });
      console.debug(`response`, response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <div className={"Info-Status"}>
        <p>{`Connected chain: ${chainId}`}</p>
        <p>{`Connected account: ${account}`}</p>
        <p>{`Account balance: ${balance}`}</p>
        <p>{`Connected: ${connected}`}</p>
      </div>

      <div className="sdkConfig">
        {connecting && (
          <div>Waiting for Metamask to link the connection...</div>
        )}
      </div>
   

      {connected ? (
        <div>
        
          { provider?.getChainId() === '0x1' ? (
            <button
              className={'Button-Normal'}
              style={{ padding: 10, margin: 10 }}
              onClick={() => changeNetwork('0x5')}
            >
              Switch to Goerli
            </button>
          ) : (
            <button
              className={'Button-Normal'}
              style={{ padding: 10, margin: 10 }}
              onClick={() => changeNetwork('0x1')}
            >
              Switch to Mainnet
            </button>
          )}

    

          <button
            className={'Button-Normal'}
            style={{ padding: 10, margin: 10 }}
            onClick={addEthereumChain}
          >
            Add Polygon Chain
          </button>

    
        </div>
      ) : (
        <div>
          <button className={'Button-Normal'} style={{ padding: 10, margin: 10 }} onClick={connect}>
            Connect
          </button>
      
        </div>
      )}

      <button
        className={'Button-Danger'}
        style={{ padding: 10, margin: 10 }}
        onClick={terminate}
      >
        Terminate
      </button>
    </div>
  );
};

export default App;
