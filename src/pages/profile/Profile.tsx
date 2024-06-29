import { useSDK } from '@metamask/sdk-react';
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate();
    const { sdk, chainId, account, balance } = useSDK();

    const close = () => {
        sdk?.terminate();
        navigate("/");
    };

    return (
        <div className="flex flex-col h-screen justify-between">
            <header className="h-10"><strong className="inline">Profile</strong></header> 

            <main className="mb-auto">
           
                <Separator className="my-4" />

                <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">Chain</h4>
                    <p className="text-sm text-muted-foreground">
                        {chainId}
                    </p>
                </div>

                <Separator className="my-4" />
                <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">Account</h4>
                    <p className="text-sm text-muted-foreground">
                        {account}  
                    </p>
                </div>
               
                <Separator className="my-4" />
                <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">Balance</h4>
                    <p className="text-sm text-muted-foreground">
                        {balance}
                    </p>
                </div>
                <Separator className="my-4" />
            </main>    

            <footer className="mb-10">
                <Button
                    className="w-11/12"
                    onClick={close}
                    variant="destructive"
                >Close</Button>
            </footer>
        </div> 
    );
}

export default ProfilePage;
