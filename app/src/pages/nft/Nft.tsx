import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ImageUploader } from "@/components/ui-custom/ImageUploader";

const formSchema = z.object({
        name: z.string().min(2).max(150),
        supply: z.number(),
        description: z.string(),
});

const NFTPage = () => {
    const [image, setImage] = React.useState<string | ArrayBuffer | null>(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            supply: 1,
        },
    
    }) 

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        console.log(image);
    }

    return (
        <div className="p-6">
             <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <FormField
                    control={form.control}
                    name="name"
              
                    render={({ field }) => (
                        <div>
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="nft name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Description" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <ImageUploader setImage={setImage} />
                        </div>
                    )}
                />
                <Button className="w-full text-lg" type="submit">Create</Button>
                </form>
            </Form>
        </div>
    );

}
export default NFTPage;
