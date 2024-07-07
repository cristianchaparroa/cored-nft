import { useSDK } from '@metamask/sdk-react';
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

// icons
import TextIcon from '../../components/ui-custom/TextIcon';
import { Gem, Loader2 } from "lucide-react"

export const LoginPage = () => {
  const navigate = useNavigate();
  const { sdk, connecting } = useSDK();

  const connect = async () => {
    try {
        await sdk?.connect();
        navigate("/home");
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  return (
    <div>
      <div className="mt-32 p-10"> 
        <div className="flex justify-center">
            <TextIcon text="StoneNFT" tsize={50}>
                <Gem size={40} />
            </TextIcon>
        </div> 
      </div>

      <div className="sdkConfig">
        {connecting && (
            <div className="flex justify-center">
                <TextIcon text="Waiting for Metamask to Link the connection" tsize={12}>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </TextIcon>
            </div>
        )}
      </div>

      <Button
            className="w-11/12 text-lg p-6"
            onClick={connect}
      >Connect  wallet</Button>
    </div>
  );
};

export default LoginPage;
