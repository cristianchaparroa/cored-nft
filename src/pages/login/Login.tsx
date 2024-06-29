import { useSDK } from '@metamask/sdk-react';
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

// icons
import { Loader2 } from "lucide-react"

export const LoginPage = () => {
  const navigate = useNavigate();
  const { sdk, connecting } = useSDK();

  const connect = async () => {
    try {
        await sdk?.connect();
        navigate("/profile");
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  return (
    <div>
      <div className="p-10"> 
        <div className="text-center">
            <h1> Stone </h1>
        </div> 
      </div>

      <div className="sdkConfig">
        {connecting && (
            <div>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <div>Waiting for Metamask to link the connection...</div>
            </div>
        )}
      </div>

      <Button
        className="w-11/12"
        onClick={connect}
      >Connect  wallet</Button>
    </div>
  );
};

export default LoginPage;
