import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import ProfilePage from "../profile/Profile"
import { PenSquare } from "lucide-react"
import { UserRound } from "lucide-react"
import { Images } from "lucide-react"  
import NFTPage from "../nft/Nft"

const HomePage =  () => {
    return (
        <div className="mt-4">
            <Tabs defaultValue="create" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="create"> <PenSquare/> </TabsTrigger>
                <TabsTrigger value="gallery"> <Images /> </TabsTrigger>
                <TabsTrigger value="profile"> <UserRound/> </TabsTrigger>
              </TabsList>

              <TabsContent value="create">
                <NFTPage/>
              </TabsContent>
              
              <TabsContent value="profile">
                <ProfilePage/> 
              </TabsContent>

              <TabsContent value="gallery">
                <div> Gallery </div>
              </TabsContent>
            </Tabs>
        </div>
    );
}

export default HomePage;
