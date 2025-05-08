import PicturesLayout from "@/components/PicturesLayout";
import { redirect } from "next/navigation";
import { AllowedDirectoryPages } from "@/utils/utils";

const directoryPage = async ({ params }: {
    params: Promise<{ directoryPage: string }>
  }) => {
    const { directoryPage } = await params;
    const validDirectoryPages: AllowedDirectoryPages[] = ['events', 'street', 'portraits', 'concerts', 'film'];
        // @ts-ignore
        // eslint-disable-next-line
        if (!validDirectoryPages.includes(directoryPage.toLowerCase())){
            console.log('invalid');
            // redirects out of non photography pages not intended to nest
            redirect(`/`);
        }
    return (
        <div>
            <PicturesLayout 
            // @ts-ignore
        // eslint-disable-next-line
            directory={directoryPage}/>
        </div>
    );
};

export default directoryPage;